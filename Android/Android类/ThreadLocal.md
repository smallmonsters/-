# ThreadLocal

ThreadLocal 是 Java 中一个用于线程内部存储数据的工具类，它提供了一种让每个线程保持变量独立的机制，即每个线程都可以独立地改变自己的变量副本(保存在 ThreadLocalMap 对象)，而不会影响到其他线程的副本ThreadLocal是用来存储数据的，但是每个线程只能访问到各自线程的数据。

ThreadLocal 类提供了以下方法：

- get()：获取当前线程的变量副本。
- set(T value)：设置当前线程的变量副本。
- initialValue()：返回当前线程的初始变量值。这个方法可以被子类重写，以提供自定义的初始值。
- remove()：移除当前线程的变量副本。

```java
ThreadLocal<Integer> threadLocal = new ThreadLocal<>();

// 在主线程中设置变量值
threadLocal.set(1);

// 开启一个子线程，在子线程中获取变量值
new Thread(() -> {
    int value = threadLocal.get();
    System.out.println("ThreadLocal value in child thread: " + value);
}).start();

// 在主线程中获取变量值
int value = threadLocal.get();
System.out.println("ThreadLocal value in main thread: " + value);

```

## 源码分析

- new ThreadLocal<>()

```java
public class ThreadLocal<T> {
  // 实例化时什么都没有做
 public ThreadLocal() { }
}
```

- threadLocal.get()

```java
// ThreadLocal类
public class ThreadLocal<T> {
  // 执行get方法
 public T get() {
    Thread t = Thread.currentThread(); // 返回当前正在执行的线程对象的引用
    ThreadLocalMap map = getMap(t);
    // 当前线程是否初始化
    if (map != null) {
        ThreadLocalMap.Entry e = map.getEntry(this);
        if (e != null) {
            @SuppressWarnings("unchecked")
            T result = (T)e.value;
            return result;
        }
    }
    return setInitialValue();
  }
  private T setInitialValue() {
    T value = initialValue(); // initialValue 返回null
    Thread t = Thread.currentThread();
    ThreadLocalMap map = getMap(t);
    if (map != null)
        map.set(this, value);
    else
        createMap(t, value);
    return value;
  }

  ThreadLocalMap getMap(Thread t) {
    return t.threadLocals;
  }
  void createMap(Thread t, T firstValue) {
    t.threadLocals = new ThreadLocalMap(this, firstValue);
  }
  // ThreadLocalMap内部类
  static class ThreadLocalMap {
    private Entry[] table;
    ThreadLocalMap(ThreadLocal<?> firstKey, Object firstValue) {
      table = new Entry[INITIAL_CAPACITY];
      int i = firstKey.threadLocalHashCode & (INITIAL_CAPACITY - 1);
      table[i] = new Entry(firstKey, firstValue);
      size = 1;
      setThreshold(INITIAL_CAPACITY);
    }
  }
}
```
