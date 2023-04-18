# FrameLayout

FrameLayout 是一种简单的布局，用于在屏幕上堆叠视图。以下是 Android FrameLayout 的一些常用的 API：

- addView(View child)：将一个 View 添加到 FrameLayout 中。
- removeAllViews()：从 FrameLayout 中移除所有子视图。
- removeView(View view)：从 FrameLayout 中移除指定的 View。
- getChildAt(int index)：获取在 FrameLayout 中指定位置的子视图。
- indexOfChild(View child)：获取指定子视图在 FrameLayout 中的位置。
- getChildCount()：获取 FrameLayout 中子视图的数量。
- bringChildToFront(View child)：将指定的子视图置于 FrameLayout 前面。
- setForeground(Drawable drawable)：设置前景 Drawable。
- setForegroundGravity(int gravity)：设置前景 Gravity。
- setMeasureAllChildren(boolean measureAll)：设置是否测量所有子视图。
- setPadding(int left, int top, int right, int bottom)：设置 FrameLayout 的 padding。

```java
<FrameLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <ImageView
        android:id="@+id/imageView1"
        android:layout_width="200dp"
        android:layout_height="200dp"
        android:src="@drawable/image1"
        android:scaleType="centerCrop"
        android:layout_gravity="center" />

    <ImageView
        android:id="@+id/imageView2"
        android:layout_width="150dp"
        android:layout_height="150dp"
        android:src="@drawable/image2"
        android:scaleType="centerCrop"
        android:layout_gravity="bottom|right" />

</FrameLayout>

```
