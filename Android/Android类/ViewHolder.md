# ViewHolder

ViewHolder 是 Android RecyclerView 的一个重要概念，它负责缓存列表中的每个 Item View 的子视图，并提供对这些视图的访问。使用 ViewHolder 可以避免频繁地调用 findViewById() 方法和创建新的视图对象，从而提高了列表的渲染效率。在 onCreateViewHolder() 方法中创建 ViewHolder，并在 onBindViewHolder() 方法中将数据绑定到 ViewHolder 中的视图。这样可以减少创建视图的数量，提高列表的滚动流畅度和性能。

ViewHolder 类通常包含需要展示的 Item View 中所需的所有控件的引用，这些控件的初始化是在 onCreateViewHolder() 回调方法中完成的。当 onBindViewHolder() 方法被调用时，ViewHolder 类通过相应的 setter 方法将 Item View 中的数据绑定到控件上。

```java
public class MyViewHolder extends RecyclerView.ViewHolder {
    public TextView title;
    public ImageView icon;

    public MyViewHolder(View itemView) {
        super(itemView);
        title = itemView.findViewById(R.id.title);
        icon = itemView.findViewById(R.id.icon);
    }
}
```
