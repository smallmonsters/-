# Toast

- [Toast](#toast)
  - [Toast.makeText](#toastmaketext)
    - [自定义Toast 的持续时间](#自定义toast-的持续时间)
    - [取消自动消失](#取消自动消失)

## Toast.makeText

它接受三个参数：

- Context 对象：指定 Toast 的上下文，通常传入当前 Activity 或 Application 的上下文，例如 MainActivity.this 或 getApplicationContext()。
- CharSequence 对象或资源 ID：指定 Toast 的文本内容，可以传入一个字符串或字符串资源的 ID。
- int 值：指定 Toast 的持续时间，可以传入 Toast.LENGTH_SHORT（短时间）或 Toast.LENGTH_LONG（长时间），这两个常量分别对应 2 秒和 3.5 秒的持续时间。

```java
Toast.makeText(MainActivity.this, "Hello, World!", Toast.LENGTH_SHORT).show();

```

**注意:** 从 Android 11（API 级别 30）开始，为了提高应用的安全性，Google 对 Toast 做出了一些限制，具体表现为：

- 如果应用处于后台或被销毁，将无法显示 Toast。
- 如果应用没有获得焦点或正在前台运行但不可见，将无法显示 Toast。
- 如果 Toast 显示的频率过高，可能会被系统忽略。

### 自定义Toast 的持续时间

使用 Toast.setDuration(int duration) 方法设置 Toast 的持续时间，传入一个整数值，表示 Toast 的持续时间（单位是毫秒）。例如，以下代码将 Toast 的持续时间设置为 5 秒：

```java
Toast toast = Toast.makeText(getApplicationContext(), "Hello, World!", Toast.LENGTH_SHORT);
toast.setDuration(5000);
toast.show();
```

### 取消自动消失

使用 Toast.cancel() 方法取消 Toast 的自动消失。例如，以下代码创建了一个 Toast，不会自动消失，而是需要手动取消：

```java
Toast toast = Toast.makeText(getApplicationContext(), "Hello, World!", Toast.LENGTH_LONG);
toast.show();
// Android API Level 30（即 Android 11）以下
Handler handler = new Handler();
handler.postDelayed(new Runnable() {
    @Override
    public void run() {
        toast.cancel();
    }
}, 1000); // 1 秒后手动取消 Toast
// Android API Level 30（即 Android 11）
Handler handler = new Handler(Looper.getMainLooper());
  handler.postDelayed(new Runnable() {
      @Override
      public void run() {
          toast.cancel();
      }
  }, 1000); // 1 秒后手动取消 Toast
<!-- TODO_230407_2： Handler改成timer应该也是可以的吧？二者有什么区别 -->

```
