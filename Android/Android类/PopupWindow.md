# PopupWindow

- 构造方法
- 设置PopupWindow的属性
  ```setWidth```(int width)、```setHeight```(int height)、```setContentView```(View contentView)等，用于设置PopupWindow的大小、内容视图等属性。

- 设置PopupWindow的背景
  ```setBackgroundDrawable```(Drawable background)、```setElevation```(float elevation)等，用于设置PopupWindow的背景和阴影效果。

- 显示和隐藏PopupWindow
  ```showAsDropDown```(View anchor)、```showAtLocation```(View parent, int gravity, int x, int y)等，用于将PopupWindow显示在指定的位置，以及隐藏PopupWindow。

- 设置PopupWindow的动画
 ```setAnimationStyle```(int animationStyle)等，用于设置PopupWindow的进入和退出动画。

- PopupWindow的监听器
  ```setOnDismissListener```(PopupWindow.OnDismissListener listener)用于监听PopupWindow的隐藏事件。

- PopupWindow.```showAsDropDown```(View anchor)是一个用于将PopupWindow显示在指定锚点下方的方法。

```java
Button button = findViewById(R.id.button);
TextView textView = new TextView(this);
textView.setText("Hello, PopupWindow!");
PopupWindow popupWindow = new PopupWindow(textView, ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
// 由于我们没有提供x和y偏移量，因此PopupWindow将默认显示在Button的下方，与Button左对齐
popupWindow.showAsDropDown(button);

```

## demo

```java
public class MainActivity extends AppCompatActivity {

    private PopupWindow popupWindow;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // 创建一个只包含TextView的PopupWindow实例
        TextView textView = new TextView(this);
        textView.setText("Hello, PopupWindow!");
        // ViewGroup.LayoutParams.WRAP_CONTENT是一个常量，表示View的宽度或高度应该根据其内容自适应。
        popupWindow = new PopupWindow(textView, ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);

        // 设置PopupWindow的背景为红色矩形
        Drawable drawable = new ColorDrawable(Color.RED);
        popupWindow.setBackgroundDrawable(drawable);

        // 设置PopupWindow的阴影效果
        popupWindow.setElevation(10);

        // 设置PopupWindow的进入和退出动画
        popupWindow.setAnimationStyle(R.style.PopupWindowAnimation);

        // 监听PopupWindow的隐藏事件
        popupWindow.setOnDismissListener(new PopupWindow.OnDismissListener() {
            @Override
            public void onDismiss() {
                Toast.makeText(MainActivity.this, "PopupWindow has been dismissed.", Toast.LENGTH_SHORT).show();
            }
        });

        // 在背景视图上设置触摸监听器，用于监听PopupWindow的触摸事件
        popupWindow.getContentView().setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                // 在PopupWindow被触摸后隐藏PopupWindow
                popupWindow.dismiss();
                return false;
            }
        });


        // 在按钮上点击显示PopupWindow
        Button showButton = findViewById(R.id.show_button);
        showButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                popupWindow.showAsDropDown(v);
            }
        });
    }
}


```
