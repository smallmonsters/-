# TextView

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:orientation="vertical"
  tools:context=".TextViewCaseActivity">

    <LinearLayout
      android:layout_width="match_parent"
      android:layout_height="300dp"
      android:background="@color/red">
      <!--
         layout_gravity：相对于父元素的位置
         gravity： 元素内部元素的位置
       -->
      <TextView
        android:layout_width="200dp"
        android:layout_height="200dp"
        android:layout_gravity="center"
        android:background="@color/purple_200"
        android:gravity="bottom"
        android:text="@string/text_view_case_content" />
    </LinearLayout>

  <LinearLayout
    android:layout_width="match_parent"
    android:layout_height="wrap_content">
    <!--
       文字阴影
         文字大小一般用sp
         shadowRadius：模糊度
         textStyle: italic-斜体
    -->
    <TextView
      android:id="@+id/textView"
      android:layout_width="match_parent"
      android:layout_height="100dp"
      android:shadowColor="@color/red"
      android:shadowDx="10"
      android:shadowDy="10"
      android:shadowRadius="10.0"
      android:textStyle="italic"
      android:text="@string/text_view_case_content"
      android:textColor="@color/black"
      android:textSize="30sp" />

  </LinearLayout>

  <!--
    跑马灯
      singleLine: 内容单行显示
      ellipsize: 超出屏幕...的位置，marquee-跑马灯：需要聚焦才能动
      <requestFocus/>：强制聚焦
      marqueeRepeatLimit: 滚动的次数
      https://blog.csdn.net/IT666DHW/article/details/80765481
      focusable：在键盘下操作的情况，如果设置为true，则键盘上下左右选中，焦点会随之移动，类似web的tab键能选中
      focusableInTouchMode：针对触屏情况下的，点击屏幕的上的某个控件时，不是执行点击而是执行聚焦，需要二次点击才会触发点击
    -->
  <TextView
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:text="这个是一个跑马灯这个是一个跑马灯这个是一个跑马灯这个是一个跑马灯这个是一个跑马灯"
    android:textSize="30sp"
    android:focusable="true"
    android:focusableInTouchMode="true"
    android:singleLine="true"
    android:ellipsize="marquee"
    android:marqueeRepeatLimit="marquee_forever"
    >
    <requestFocus/>
  </TextView>

</LinearLayout>

```
