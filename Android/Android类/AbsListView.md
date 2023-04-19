# AbsListView

AbsListView 是 Android 中 ListView、GridView 等列表控件的基类，它继承自 View 和 ViewGroup 类。AbsListView 提供了一些常用的列表功能，例如滚动、选中和布局等。

AbsListView 的主要特点包括：

- 支持单选和多选功能，并提供了相应的事件接口。
- 支持分页加载数据功能。
- 支持滚动监听和滚动状态改变监听。
- 支持列表项的缓存和复用机制，以提高性能。

除此之外，AbsListView 还提供了一些常用的方法和属性，例如 setAdapter() 方法用于设置数据源适配器；setOnItemClickListener() 方法用于设置列表项点击事件监听器；setChoiceMode() 方法用于设置选择模式等等。
