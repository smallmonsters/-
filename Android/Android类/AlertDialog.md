# AlertDialog

## 常用方法

- setMessage
设置 AlertDialog 显示的信息 可以传递一个字符串作为参数。例如：

```java
builder.setMessage("This is an Alert Dialog");

```

- setTitle
这个方法用来设置 AlertDialog 的标题。可以传递一个字符串作为参数。例如：

```java
builder.setTitle("Alert");
```

- setCancelable()
这个方法用来设置用户是否可以通过点击返回键或者屏幕上其他区域来关闭 AlertDialog。默认情况下，该属性的值为 true。例如：

```java
builder.setCancelable(false);
```

- setPositiveButton()
这个方法用来添加 AlertDialog 上的“确认”按钮。可以传递一个字符串作为按钮的文本，以及一个 DialogInterface.OnClickListener 接口作为按钮的点击事件处理程序。例如：

```java
builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        // 点击“确认”按钮的处理逻辑
    }
});
```

- setNegativeButton()
这个方法用来添加 AlertDialog 上的“取消”按钮。可以传递一个字符串作为按钮的文本，以及一个 DialogInterface.OnClickListener 接口作为按钮的点击事件处理程序。例如：

```java
builder.setNegativeButton ("Cancel", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        // 点击“取消”按钮的处理逻辑
    }
});
```

- setNeutralButton()
这个方法用来添加 AlertDialog 上的“中性”按钮。可以传递一个字符串作为按钮的文本，以及一个 DialogInterface.OnClickListener 接口作为按钮的点击事件处理程序。例如：

```java

builder.setNeutralButton("Skip", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        // 点击“中性”按钮的处理逻辑
    }
});
```

Android AlertDialog 中的“中性”按钮（Neutral Button）通常用于表示一些其他选项，而不是“确认”或“取消”两种标准选项。例如，可以在 AlertDialog 中添加一个“跳过”选项，用于跳过某个流程，而不是选择“确认”或“取消”

- setIcon()
这个方法可以设置 AlertDialog 显示的图标。可以传递一个 Drawable 对象作为参数。例如：

```java

builder.setIcon(R.drawable.alert_icon);
```

- setAdapter()

这个方法用来显示一个列表对话框。可以传递一个 ListAdapter 对象作为参数。例如：

```java
builder.setAdapter(adapter, new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        // 列表项的点击事件处理
    }
});
```

- setMultiChoiceItems
果需要处理多个选择，你可以使用 setMultiChoiceItems() 方法。具体实现方式可参考以下代码：

```java
final CharSequence[] items = {"Android", "iOS", "Windows"};
final boolean[] checkedItems = {false, false, false};
AlertDialog.Builder builder = new AlertDialog.Builder(context);
builder.setTitle("Which platform would you like to develop for?");
builder.setMultiChoiceItems(items, checkedItems, new DialogInterface.OnMultiChoiceClickListener() {
    public void onClick(DialogInterface dialog, int which, boolean isChecked) {
        checkedItems[which] = isChecked;
    }
});
builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
    public void onClick(DialogInterface dialog, int id) {
        // 处理用户的选择
    }
});
AlertDialog dialog = builder.create();

```

- setView
setView 方法用于在 AlertDialog 中设置自定义的布局视图，具体用法如下：

```java
public AlertDialog.Builder setView(View view)

AlertDialog.Builder builder = new AlertDialog.Builder(this);
builder.setTitle("Custom View Example");

LayoutInflater inflater = getLayoutInflater();
View dialogView = inflater.inflate(R.layout.dialog_custom_view, null);
builder.setView(dialogView);

AlertDialog alertDialog = builder.create();
alertDialog.show();


```
