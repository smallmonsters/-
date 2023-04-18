# GridLayout

## xml中的属性

android:rowCount：设置GridLayout的行数。

android:columnCount：设置GridLayout的列数。

android:orientation：设置GridLayout的方向，可选值为"horizontal"和"vertical"，默认值为"horizontal"。

android:alignmentMode：设置子View的对齐方式，可选值为"alignBounds"、"alignMargins"和"pack"，默认值为"alignBounds"。

android:useDefaultMargins：设置是否使用默认的边距值，属性值为"true"或"false"，默认为"false"。

android:rowOrderPreserved：设置是否按行优先显示，属性值为"true"或"false"，默认为"true"。

android:columnOrderPreserved：设置是否按列优先显示，属性值为"true"或"false"，默认为"true"。

android:layout_row：设置当前View所在的行索引。

android:layout_column：设置当前View所在的列索引。

android:layout_rowSpan：设置当前View所跨越的行数。

android:layout_columnSpan：设置当前View所跨越的列数。

android:layout_gravity：设置当前View的对齐方式，例如：android:layout_gravity="center" 表示居中对齐。

android:layout_margin：设置当前View的外边距，属性值为像素值或dp值。

android:layout_marginLeft、android:layout_marginTop、android:layout_marginRight、android:layout_marginBottom：设置当前View的左、上、右、下外边距，属性值为像素值或dp值。

## API

setRowCount(int rowCount)：设置GridLayout的行数。

setColumnCount(int columnCount)：设置GridLayout的列数。

setOrientation(int orientation)：设置GridLayout的方向，可选值为GridLayout.HORIZONTAL和GridLayout.VERTICAL。

setAlignmentMode(int alignmentMode)：设置子View的对齐方式，可选值为GridLayout.ALIGN_BOUNDS、GridLayout.ALIGN_MARGINS和GridLayout.CENTER。

setUseDefaultMargins(boolean useDefaultMargins)：设置是否使用默认的边距值。

setRowOrderPreserved(boolean rowOrderPreserved)：设置是否按行优先显示。

setColumnOrderPreserved(boolean columnOrderPreserved)：设置是否按列优先显示。

addView(View child, int rowSpec, int columnSpec)：向GridLayout中添加子View，并指定该View所在的行列位置。

addView(View child, GridLayout.LayoutParams params)：向GridLayout中添加子View，并指定该View的布局参数。

getRowCount()：获取GridLayout的行数。

getColumnCount()：获取GridLayout的列数。

getOrientation()：获取GridLayout的方向。

getAlignmentMode()：获取子View的对齐方式。

isUseDefaultMargins()：获取是否使用默认的边距值。

isRowOrderPreserved()：获取是否按行优先显示。

isColumnOrderPreserved()：获取是否按列优先显示。
