## 实现TODO List

```xml
 <ListView
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
  android:id="@+id/lvItems"
  android:layout_alignParentTop="true"
  android:layout_alignParentLeft="true"
  android:layout_alignParentStart="true"
  android:layout_above="@+id/btnAddItem"
  android:gravity="center"
  />

  <EditText
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:id="@+id/etNewItem"
    android:layout_alignTop="@+id/btnAddItem"
    android:hint="Enter a new item"
    android:layout_alignParentLeft="true"
    android:layout_alignParentStart="true"
    android:layout_toLeftOf="@+id/btnAddItem"
    android:layout_toStartOf="@+id/btnAddItem"
    android:layout_alignParentBottom="true"
    />

  <Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Add Item"
    android:id="@+id/btnAddItem"
    android:layout_alignParentBottom="true"
    android:layout_alignParentRight="true"
    android:layout_alignParentEnd="true"
    android:onClick="onAddItem"
    />
```

```java
// java文件
public class MainActivity extends AppCompatActivity {

    ArrayList<String> items;
    ArrayAdapter<String> itemsAdapter;
    ListView lvItems;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
      lvItems = (ListView) findViewById(R.id.lvItems);
      readItems();
      itemsAdapter = new ArrayAdapter<String>(this,android.R.layout.simple_list_item_1, items);
      lvItems.setAdapter(itemsAdapter);
      // Setup remove listener method call
      setupListViewListener();
    }

    // Attaches a long click listener to the listview
    private void setupListViewListener() {
        lvItems.setOnItemLongClickListener(
          new AdapterView.OnItemLongClickListener() {
              @Override
              public boolean onItemLongClick(AdapterView<?> adapter, View item, int pos, long id) {
                  // Remove the item within array at position
                  items.remove(pos);
                  // Refresh the adapter
                  itemsAdapter.notifyDataSetChanged();
                  writeItems();
                  // Return true consumes the long click event (marks it handled)
                  return true;
              }
          });
    }

    public void onAddItem(View v) {
        EditText etNewItem = (EditText) findViewById(R.id.etNewItem);
        String itemText = etNewItem.getText().toString();
        itemsAdapter.add(itemText);
        etNewItem.setText("");
        writeItems();
    }

}

```
