# Android适配器

[适配器模式](../Java/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/适配器模式.md)就是将两个不兼容的类融合在一起。通过转换使他们可以兼容的工作。Android代码中最常见的适配器就是Adapter了。ListView、GridView、RecyclerView都使用Adapter,Adapter的作用都一样，把高度定制化的item view和ListView分开。item view通过一个Adapter和ListView联系到一起。解耦而不失高度可定制。

在 Android 中，适配器（Adapter）是一种用于绑定数据和视图的桥梁。它将数据源中的每一项数据都绑定到一个视图（list_item.xml）中，并提供了用户与这些视图进行交互的接口。

Android不使用适配器，实现一个列表

```java
// 在布局文件中定义一个 ScrollView 控件
<ScrollView
    android:id="@+id/scrollView"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <LinearLayout
        android:id="@+id/container"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"/>

</ScrollView>

// 在 Activity 或 Fragment 中获取该控件，并添加子 View
ScrollView scrollView = findViewById(R.id.scrollView);
LinearLayout container = findViewById(R.id.container);

// 通过代码创建需要展示的数据项的视图，并将其添加到 ScrollView 中进行展示
for (int i = 0; i < data.size(); i++) {
    TextView textView = new TextView(this);
    textView.setText(data.get(i));
    container.addView(textView);
}
```

上述代码只是实现了一个简单的列表控件，其性能和灵活性都比不上使用适配器实现的列表控件。如果需要实现更加高效和灵活的列表控件，最好还是使用适配器。

## 常用的实现适配器的类

> [Carson带你学Android：ListView与AdapterView全面解析](https://www.jianshu.com/p/4e8e4fd13cf7)

- BaseAdapter：所有 Adapter 的基类(是一个抽象类)，通常我们需要实现自定义 Adapter 时，需要实现此抽象类，在实际开发中使用的最多的类型。

- ArrayAdapter：适用于一个单项列表，并且数据可以以数据形式存放的场景。
  
  在布局文件中定义一个 ListView 控件：

  ```xml
  <ListView
    android:id="@+id/listView"
    android:layout_width="match_parent"
    android:layout_height="match_parent"/>
  ```

  定义一个自定义的 Adapter 类，继承自 ArrayAdapter 并实现相应的方法：

  ```java
  public class MyAdapter extends ArrayAdapter {
    private String[] mData; // 数据源
    private LayoutInflater mInflater; // 布局加载器

    public MyAdapter(Context context, String[] data) {
        mData = data;
        mInflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return mData.length;
    }

    @Override
    public Object getItem(int position) {
        return mData[position];
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView == null) {
            convertView = mInflater.inflate(R.layout.list_item, null);
        }
        TextView textView = convertView.findViewById(R.id.text_view);
        textView.setText(mData[position]);
        return convertView;
    }
  }

  ```

  在 Activity 或 Fragment 中获取该控件，并创建 ArrayAdapter 对象：

  ```java
  ListView listView = findViewById(R.id.listView);
  String[] data = {"Apple", "Banana", "Orange"}; // 字符串数组
  MyAdapter adapter = new MyAdapter(this, data);
  listView.setAdapter(adapter);
  ```
  
- SimpleAdapter：适用于一个列表项中有多个数据的场景，它可以将一个 map 里的数据映射到 xml 布局文件中的各个控件上。
- SimpleCursorAdapter：针对数据库使用的 Adapter，使用场景很少。
