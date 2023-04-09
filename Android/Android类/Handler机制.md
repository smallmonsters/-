# Handler机制

- [Handler机制](#handler机制)
  - [handler机制是什么](#handler机制是什么)
  - [handler机制背景](#handler机制背景)
  - [MessageQueue](#messagequeue)
    - [dome](#dome)
    - [创建](#创建)
    - [关键概念：线程休眠](#关键概念线程休眠)
    - [关键方法](#关键方法)
  - [Looper](#looper)
  - [Handler](#handler)
    - [demo](#demo)
    - [切换代码执行的线程](#切换代码执行的线程)
      - [代码具体在哪个线程执行](#代码具体在哪个线程执行)

> [Android消息处理机制](https://www.jianshu.com/p/e6b00dc02e10)<br/>
> [深入Android消息处理机制](https://juejin.cn/post/6885541019379564558)<br>
> [Android全面解析之Handler机制（一）：认知Handler](https://juejin.cn/post/6887918066043191304)<br/>
> [Android全面解析之Handler机制（二）：ThreadLocal](https://juejin.cn/post/6887921188622827533)<br/>

Android 的消息处理机制（handler机制）主要是指 Handler 的运行机制以及 。

## handler机制是什么

Handler机制是Android中基于**单线**消息队列模式的一套线程消息机制。工作流程使用Handler、Message、MessageQueue 和 Looper。
<!-- 在消息处理机制 Android 中，Handler 是一种，用于在不同的线程之间进行通信和任务调度。通过使用 Handler，您可以将消息发送到消息队列中，并在需要时处理这些消息。具体来说，Handler 机制主要包含Handler、Message、MessageQueue和Looper。
Handler是异步通信的类，主要接受子线程发送的数据, 并用此数据配合主线程更新UI。Handler主要通过Looper和MessageQueue来完成更新UI, -->

## handler机制背景

- 不能在非UI创建线程去操作UI
- 不能在主线程执行耗时任务

## MessageQueue
<!-- TODO_230407_1： LinkQueue -->
一个单链表的数据结构消息队列，像“修改版的LinkQueue”先进先出管理Message，在初始化[Looper](#looper)对象时会创建一个与之关联的MessageQueue

### dome

```java
public class MyMessageQueue {
    private Handler mHandler;

    public MyMessageQueue() {
        Looper looper = Looper.myLooper();
        if (looper == null) {
            Looper.prepare();
            looper = Looper.myLooper();
        }
        mHandler = new Handler(looper) {
           
            @Override
            public void handleMessage(Message msg) {
                // 在后台线程中处理消息
                // ...
            }
        };
    }

    public void sendMessage(Message msg) {
        MessageQueue queue = mHandler.getLooper().getQueue();
        queue.addMessage(msg, 0);
    }
}

// 在主线程中使用 MyMessageQueue 处理消息
MyMessageQueue myQueue = new MyMessageQueue();
myQueue.prepareHandler();

// 发送消息到 MyMessageQueue 中处理
Message msg = Message.obtain();
myQueue.sendMessage(msg);

```

### 创建

在主线程(系统控制)中，通过调用Looper类的静态成员函数prepareMainLooper()来创建（应用启动时）消息队列。在其他子线程中，通过调用静态成员函数prepare()来创建。

```java
public class MyLooperThread extends Thread {
    private Handler mHandler;

    public void run() {
        Looper.prepare();
        mHandler = new Handler() {
            @Override
            public void handleMessage(Message msg) {
                // 在后台线程中处理消息
                // ...
            }
        };
        Looper.loop();
    }

    public Handler getHandler() {
        return mHandler;
    }
}

// 在主线程中使用 MyLooperThread 处理消息
MyLooperThread myThread = new MyLooperThread();
myThread.start();

// 发送消息到 MyLooperThread 中处理
myThread.getHandler().sendMessage(Message.obtain());
```

如果在同一个子线程中多次调用 Looper.prepare() 方法，会出现异常提示“Only one Looper may be created per thread”，表示同一个线程只能创建一个消息循环。

### 关键概念：线程休眠

- 当MessageQueue中没有消息或者都在等待中，则会将线程休眠，让出cpu资源，提高cpu的利用效率。进入休眠后，如果需要继续执行代码则需要将线程唤醒。
- 当方法暂时无法直接返回需要等待的时候，则可以将线程阻塞。

### 关键方法

- 出队 -- next()
  next方法主要是做消息出队工作。获取MessageQueue中的一个Message，如果队列中没有消息的话，就会把方法休眠，等待新的消息来唤醒。主要步骤如下：
  - 如果Looper已经退出了，直接返回null进入死循环，
  - 进入死循环，直到获取到Message或者退出
  - 循环中先判断是否需要进行阻塞，阻塞结束后，对MessageQueue进行加锁，获取Message
  - 循环中先判断是否需要进行阻塞，阻塞结束后，对MessageQueue进行加锁，获取Message
  - 如果MessageQueue中没有消息，则直接把线程无限阻塞等待唤醒；
  - 如果MessageQueue中有消息，则判断是否需要等待，否则则直接返回对应的message。

- 入队 -- enqueueMessage()
  - 首先判断message的目标handler不能为空且不能正在使用中
  - 对MessageQueue进行加锁
  - 判断目标线程是否已经死亡，死亡则直接返回false
  - 初始化Message的执行时间以及标记正在执行中
  - 然后根据Message的执行时间，找到在链表中的插入位置进行插入
  - 同时判断是否需要唤醒MessageQueue。有两种情况需要唤醒：当新插入的Message在链表头时，如果messageQueue是空的或者正在等待下个任务的延迟时间执行，这个时候就需要唤醒MessageQueue。

## Looper

主线程的Looper的初始化是在[Native层](../Native%E5%B1%82.md)进行。Looper 是一个消息循环处理器，它负责管理一个线程的消息队列，并不断地从队列中取出消息并进行处理。每个线程只能够有一个Looper，Looper负责创建并管理当前线程中的MessageQueue，调用loop方法后就会在一个无限循环体中不断地从MessageQueue中取出Message并分发给对应的Handler，最后回调handleMessage()方法处理此消息。Looper才是整个机制的核心！

## Handler

通过Handler类向线程的消息队列发送消息。在每个Handler对象中持有一个Looper对象和MessageQueue对象。

**注意：**Android 11（即API 30:Android R）弃用了Handler默认的无参构造方法

```java
// Android 11以下
Handler handler = new Handler();
// Android 11
Handler handler = new Handler(Looper.getMainLooper());
```

### demo

```java
  public class MyHandlerThread extends HandlerThread {
    private Handler mHandler;

    public MyHandlerThread(String name) {
        super(name);
    }

    public void prepareHandler() {
        mHandler = new Handler(getLooper()) {
            @Override
            public void handleMessage(Message msg) {
                // 在后台线程中处理消息
                // ...
            }
        };
    }

    public Handler getHandler() {
        return mHandler;
    }
}

// 在主线程中使用 MyHandlerThread 处理消息
MyHandlerThread myThread = new MyHandlerThread("MyHandlerThread");
myThread.start();
myThread.prepareHandler();

// 发送消息到 MyHandlerThread 中处理
myThread.getHandler().sendMessage(Message.obtain());

```

### 切换代码执行的线程

Handler可以用来在不同的线程之间进行通信和切换执行的代码线程。Handler的主要作用是将消息或Runnable对象发送到Handler所绑定的线程的消息队列中，以便在该线程中执行。

#### 代码具体在哪个线程执行

代码执行的线程取决于具体的程序和代码实现。在单线程应用程序中，所有代码都在同一个线程上执行，而在多线程应用程序中，不同的线程可以同时执行不同的代码。当启动一个新的线程时，代码将在新线程上执行，而不是在主线程或任何其他线程上执行。然而，在某些情况下，代码可能会在主线程或其他线程上执行，这取决于代码的**实现方式和调用方式**。
