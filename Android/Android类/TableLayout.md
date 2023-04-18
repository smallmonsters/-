# TableLayout

## api

addView(View view)：向TableLayout中添加一个视图，可以是TableRow或其他任何视图

addView(View view, int index)：向TableLayout中指定位置添加一个视图，index是要添加的位置。

addView(View view, LayoutParams params)：向TableLayout中添加一个视图，并指定布局参数。

addView(View view, int index, LayoutParams params)：向TableLayout中指定位置添加一个视图，并指定布局参数和位置。

getColumnCollapsed(int columnIndex)：获取指定列是否被折叠。

getColumnStretchable(int columnIndex)：获取指定列是否可拉伸。

getStretchAllColumns()：获取是否所有列都可拉伸。

setColumnCollapsed(int columnIndex, boolean isCollapsed)：设置指定列是否折叠，isCollapsed为true表示折叠。

setColumnStretchable(int columnIndex, boolean isStretchable)：设置指定列是否可拉伸，isStretchable为true表示可拉伸。

setStretchAllColumns(boolean stretchAllColumns)：设置是否所有列都可拉伸。

removeAllViews()：从TableLayout中删除所有视图。

removeView(View view)：从TableLayout中删除指定视图。

removeViewAt(int index)：从TableLayout中删除指定位置的视图。

setColumnShrinkable(int columnIndex, boolean isShrinkable)：设置指定列是否可收缩，isShrinkable为true表示可收缩。

getColumnShrinkable(int columnIndex)：获取指定列是否可收缩。

setColumnCollapsed(int columnIndex, boolean isCollapsed)：设置指定列是否折叠，isCollapsed为true表示折叠。

getColumnCount()：获取TableLayout中的列数。

getRowCount()：获取TableLayout中的行数。

## xml中的属性

android:stretchColumns：设置可拉伸的列，属性值为列的索引，多列用逗号分隔。例如：android:stretchColumns="1,2" 表示第2、3列可拉伸。

android:shrinkColumns：设置可收缩的列，属性值为列的索引，多列用逗号分隔。例如：android:shrinkColumns="1,2" 表示第2、3列可收缩。

android:collapseColumns：设置可折叠的列，属性值为列的索引，多列用逗号分隔。例如：android:collapseColumns="1,2" 表示第2、3列可折叠。

android:layout_column：设置当前View所在的列索引。

android:layout_span：设置当前View所跨越的列数。

android:layout_columnWeight：设置当前View在所在列中的权重，用于拉伸或收缩列。

android:layout_gravity：设置当前View的对齐方式，例如：android:layout_gravity="center" 表示居中对齐。

android:padding：设置当前View的内边距，属性值为像素值或dp值。

android:background：设置当前View的背景，属性值为颜色值或图片资源ID。
