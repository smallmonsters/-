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

  <androidx.recyclerview.widget.RecyclerView
    android:id="@+id/recyclerView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />


</androidx.constraintlayout.widget.ConstraintLayout>
```

```xml
<!-- list_text.xml -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  android:id="@+id/list_item_custom"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:orientation="horizontal"
  android:padding="16dp">

  <TextView
    android:id="@+id/textViewTitle"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Title"
    android:textSize="20sp" />

  <TextView
    android:id="@+id/textViewDescription"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Title"
    android:textSize="20sp" />

</LinearLayout>

```

```java
// MainActivity
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    RecyclerView recyclerView = findViewById(R.id.recyclerView);
    recyclerView.setLayoutManager(new LinearLayoutManager(this));

    ArrayList<MyData> myDataList = new ArrayList<>();
    myDataList.add(new MyData("Item 1", "Description 1"));
    myDataList.add(new MyData("Item 2", "Description 2"));
    myDataList.add(new MyData("Item 3", "Description 3"));

    MyListAdapter adapter = new MyListAdapter(this, R.layout.list_text, myDataList, new MyData.OnItemClickListener() {
      @Override
      public void onItemClick(MyData myData) {
        Toast.makeText(MainActivity.this, myData.getTitle() + ": " + myData.getDescription(), Toast.LENGTH_SHORT).show();
        // 在这里根据 myData 的不同属性实现不同的点击事件
      }
    });

    recyclerView.setAdapter(adapter);
  }
}

```

```java
// MyData.java
public class MyData {
  private final String title;
  private final String description;

  public MyData(String title, String description) {
    this.title = title;
    this.description = description;
  }

  public String getTitle() {
    return title;
  }

  public String getDescription() {
    return description;
  }

  public interface OnItemClickListener {
    void onItemClick(MyData myData);
  }
}
```

```java
// MyListAdapter.java
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class MyListAdapter extends RecyclerView.Adapter<MyListAdapter.ViewHolder> {

  private final Context context;
  private final int layoutResourceId;
  private final ArrayList<MyData> data;
  private final MyData.OnItemClickListener listener;

  public MyListAdapter(Context context, int layoutResourceId, ArrayList<MyData> data, MyData.OnItemClickListener listener) {
    this.context = context;
    this.layoutResourceId = layoutResourceId;
    this.data = data;
    this.listener = listener;
  }

  @NonNull
  @Override
  public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    View view = LayoutInflater.from(context).inflate(layoutResourceId, parent, false);
    return new ViewHolder(view);
  }

  @Override
  public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
    MyData myData = data.get(position);
    holder.textViewTitle.setText(myData.getTitle());
    holder.textViewDescription.setText(myData.getDescription());
    holder.textViewDescription.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        listener.onItemClick(myData);
      }
    });
  }

  @Override
  public int getItemCount() {
    return data.size();
  }

  public static class ViewHolder extends RecyclerView.ViewHolder {
    public TextView textViewTitle;
    public TextView textViewDescription;

    public ViewHolder(@NonNull View itemView) {
      super(itemView);
      textViewTitle = itemView.findViewById(R.id.textViewTitle);
      textViewDescription = itemView.findViewById(R.id.textViewDescription);
    }
  }
}

```
