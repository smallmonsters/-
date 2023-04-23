# RecyclerView

> [官网](https://developer.android.google.cn/guide/topics/ui/layout/recyclerview?hl=zh-cn)

Android 中的 RecyclerView 组件是一个可重用的列表控件，它可以展示大量数据并支持各种交互操作。RecyclerView 采用了 ViewHolder 模式和回收机制来优化列表项的创建和复用过程，从而提高了性能和内存利用率。

在 RecyclerView 中，每个列表项都由一个 [ViewHolder](./ViewHolder.md) 对象来表示，ViewHolder 对象包含了列表项中所有的视图控件，并缓存了这些控件的引用。当列表需要展示一个新的列表项时，会调用 Adapter 的 onCreateViewHolder() 方法来创建 ViewHolder 对象，并通过 onBindViewHolder() 方法将列表项的数据绑定到 ViewHolder 中对应的视图控件上。当用户滚动列表时，RecyclerView 会自动回收不再可见的列表项的 ViewHolder 对象，并将它们加入到一个可重用的 ViewHolder 池中，以便后续再次使用，从而避免了频繁创建和销毁列表项视图的开销。

RecyclerView 组件还支持各种布局管理器（LayoutManager），如线性布局、网格布局、瀑布流布局等，可以根据具体需求选择不同的布局方式。此外，RecyclerView 还支持动画效果、拖拽排序、滑动删除等常见的列表交互操作。

## 什么是RecyclerView

A flexible view for providing a limited window into a large data set.
一个灵活的视图，为大型数据集提供一个有限的窗口

## RecyclerView.Adapter
