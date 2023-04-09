# Toolbar

## demo

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  tools:context=".ToolBarCase">

  <androidx.appcompat.widget.Toolbar 
    android:id="@+id/my_toolbar"
    android:layout_width="match_parent"
    android:layout_height="?attr/actionBarSize"
    android:layout_marginTop="8dp"
    android:layout_marginBottom="8dp"
    android:background="#ffff00"
    app:contentInsetStart="0dp"
    app:contentInsetLeft="0dp"
    app:contentInsetEnd="0dp"
    app:contentInsetRight="0dp"
    android:elevation="4dp"
    app:buttonGravity="center_vertical"
    app:navigationIcon="@drawable/ic_baseline_arrow_back_ios_new_24"
    app:subtitle="子标题"
    app:subtitleTextColor="@color/black"
    app:title="自定义Toolbar"
    app:titleTextColor="@color/purple_200" />
</LinearLayout>
```

## 常用属性

- android:id: Toolbar 的 ID，用于在代码中获取 Toolbar 实例。
- android:layout_width 和 android:layout_height: Toolbar 的宽度和高度，通常使用 match_parent 和 ?attr/actionBarSize，分别代表与父容器相同的宽度和默认的 ActionBar 高度。
- android:background: Toolbar 的背景颜色。
- app:title: Toolbar 的标题文本。
- app:titleTextColor: Toolbar 标题文本的颜色。
- app:subtitle: Toolbar 的副标题文本。
- app:subtitleTextColor: Toolbar 副标题文本的颜色。
- android:contentInsetStart 和 android:contentInsetEnd: Toolbar 左右两侧的内边距，通常设置为 0dp。
- android:contentInsetLeft 和 android:contentInsetRight: 同上。
- android:elevation: Toolbar 的高度，用于实现 Material Design 中的阴影效果。
- android:layout_marginTop 和 android:layout_marginBottom: Toolbar 的上下外边距。
- android:theme: Toolbar 的主题，用于设置 Toolbar 的样式。

## 为什么Toolbar的空间命名是app

ToolBar是Android 5.0推出的一个新的导航控件用于取代之前的ActionBar，一个独立的控件，它不是 Activity 的一部分，需要作为一个单独的视图（View）添加到 Activity 的布局中。在使用 Toolbar 时，需要为 Toolbar 声明一个独立的命名空间`xmlns:app="http://schemas.android.com/apk/res-auto"`，以避免与其他控件的属性名发生冲突。
