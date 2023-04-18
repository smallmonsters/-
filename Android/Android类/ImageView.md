# ImageView

ImageView 是 Android 中一个常用的 UI 控件，用于在应用程序中显示图像。以下是 ImageView 常用的 API：

- setImageResource(int resId)：设置 ImageView 的图像资源。

- setImageDrawable(Drawable drawable)：设置 ImageView 的 Drawable 对象。

- setScaleType(ScaleType scaleType)：设置 ImageView 中图像的缩放类型。
  - center：将图像缩放到与视图大小相同，然后在视图中居中显示。
  - centerCrop：将图像缩放到填充整个视图并裁剪图像以适应视图的宽高比例。
  - centerInside：将图像缩放到足够小以适应视图，并在视图中居中显示。
  - fitCenter：将图像缩放到适合视图并居中显示，保留其宽高比例。
  - fitEnd：将图像缩放到适合视图并在视图底部对齐，保留其宽高比例。
  - fitStart：将图像缩放到适合视图并在视图顶部对齐，保留其宽高比例。
  - fitXY：将图像拉伸或压缩以填充视图的整个区域。
  -
- setAdjustViewBounds(boolean adjustViewBounds)：设置 ImageView 的边界是否根据图像大小自动调整。

- getDrawable()：获取 ImageView 的 Drawable 对象。

- setColorFilter(int color, PorterDuff.Mode mode)：设置 ImageView 显示的颜色过滤器。

- setAlpha(int alpha)：设置 ImageView 中图像的透明度级别。

- setOnClickListener(View.OnClickListener listener)：为 ImageView 设置单击事件监听器。

- setOnLongClickListener(View.OnLongClickListener listener)：为 ImageView 设置长按事件监听器。

- setPadding(int left, int top, int right, int bottom)：设置 ImageView 的内部填充。
