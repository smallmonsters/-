# recyclerView动态渲染item

```xml
<!-- activity_main -->
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
  xmlns:app="http://schemas.android.com/apk/res-auto"
  xmlns:tools="http://schemas.android.com/tools"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  tools:context=".MainActivity"
  tools:ignore="MissingClass">

  <ListView
    android:id="@+id/myListView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />


</androidx.constraintlayout.widget.ConstraintLayout>
```

```xml
<!-- list_text.xml -->
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:orientation="vertical">

  <TextView
    android:id="@+id/textViewTitle"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:padding="10dp"
    android:textColor="#000000"
    android:textSize="18sp"
    android:textStyle="bold" />

  <TextView
    android:id="@+id/textViewDescription"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:paddingLeft="10dp"
    android:paddingRight="10dp"
    android:paddingBottom="10dp"
    android:textColor="#888888"
    android:textSize="14sp" />

</LinearLayout>


```

```java
// MainActivity
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.processbarcase.ProcessBarMainActivity;

import java.util.ArrayList;


public class MainActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    //setContentView 应该在所有视图相关的操作之前调用
    setContentView(R.layout.activity_main);
    ListView myListView = (ListView) findViewById(R.id.myListView);
    // 创建一个包含列表项数据的ArrayList
    ArrayList<MyData> myDataList = new ArrayList<>();
    myDataList.add(new MyData("Item 1"));
    myDataList.add(new MyData("Item 2"));
    myDataList.add(new MyData("Item 3"));
    // 创建一个自定义适配器对象，将数据与ListView关联起来
    MyListAdapter adapter = new MyListAdapter(this, R.layout.list_text, myDataList);
    // 为整个item设置点击监听器
    myListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
      @Override
      public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        MyData myData = (MyData) parent.getItemAtPosition(position);
        // 在这里根据 myData 的不同属性实现不同的点击事件
        Toast.makeText(MainActivity.this, myData.getTitle(), Toast.LENGTH_SHORT).show();
      }
    });

    // 将适配器对象设置给ListView控件
    myListView.setAdapter(adapter);

  }

}


```

```java
// MyData.java

public class MyData {

  private final String mTitle;
  // private OnItemClickListener listener;

  public MyData(String title) {
    mTitle = title;
  }

  public String getTitle() {
    return mTitle;
  }

}

```

```java
// MyListAdapter.java
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;


// public class MyListAdapter extends ArrayAdapter<MyData> {
//   private final int layoutResource;
//
//   public MyListAdapter(Context context, int layoutResource, List<MyData> myDataList) {
//     super(context, 0, myDataList);
//     this.layoutResource = layoutResource;
//   }
//
//   @NonNull
//   @Override
//   public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
//     if (convertView == null) {
//       convertView = LayoutInflater.from(getContext()).inflate(layoutResource, parent, false);
//     }
//
//     TextView textViewTitle = convertView.findViewById(R.id.textViewTitle);
//     TextView textViewDescription = convertView.findViewById(R.id.textViewDescription);
//     MyData myData = getItem(position);
//
//     if (myData != null) {
//       textViewTitle.setText(myData.getTitle());
//     }
//
//     return convertView;
//   }
// }


public class MyListAdapter extends ArrayAdapter<MyData> {

  private final ArrayList<MyData> mDataList;
  private final LayoutInflater mInflater;
  private final int _resource;

  public MyListAdapter(Context context, int resource, ArrayList<MyData> dataList) {
    super(context, resource, dataList);
    mDataList = dataList;
    _resource = resource;
    //获取当前应用程序的上下文环境
    mInflater = LayoutInflater.from(context);
  }

  @Override
  public View getView(int position, View convertView, ViewGroup parent) {
    // 获取当前位置的数据对象
    MyData data = mDataList.get(position);

    // 解析自定义布局文件为一个View对象
    View itemView = mInflater.inflate(_resource, parent, false);

    // 获取标题和描述TextView控件的引用
    TextView titleTextView = (TextView) itemView.findViewById(R.id.textViewTitle);

    // 填充数据到TextView控件
    titleTextView.setText(data.getTitle());

    return itemView;
  }

}



```
