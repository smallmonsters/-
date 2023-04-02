# ArrayList

## 二维ArrayList

```java
ArrayList<ArrayList<String>> array = new ArrayList<>();
ArrayList<String> row1 = new ArrayList<>();
row1.add("A1");
row1.add("A2");
row1.add("A3"); 
array.add(row1);

ArrayList<String> row2 = new ArrayList<>();
row2.add("B1");
row2.add("B2");
row2.add("B3");
array.add(row2);

String element = array.get(0).get(1); // 获取第一行第二个元素 "A2"
// 您还可以使用嵌套的循环来遍历二维 ArrayList，例如：
for (ArrayList<String> row : array) {
    for (String element : row) {
        System.out.println(element);
    }
}

```

## ArrayList可以动态地增长，怎么防止内存溢出

```java
//指定 ArrayList 的初始容量
ArrayList<String> list = new ArrayList<>(10); // 初始容量为 10

//可以使用 ensureCapacity 方法预先为 ArrayList 分配足够的空间

ArrayList<String> list = new ArrayList<>();
list.ensureCapacity(1000); // 预先为 1000 个元素分配空间
for (int i = 0; i < 1000; i++) {
    list.add("element" + i);
}

```

### 初始容量

初始容量只是为 ArrayList 分配一定的空间，用于存储元素。如果添加的元素数量超过了初始容量，则 ArrayList 会自动扩容，以容纳更多的元素。每次扩容都需要重新分配内存和复制数组，因此频繁扩容会影响性能

### ensureCapacity

ensureCapacity方法则是用于预先为 ArrayList 分配足够的空间，以减少重新分配内存和复制数组的次数，并不会改变 ArrayList 的大小。如果 ArrayList 当前的容量小于指定的最小容量，则 ArrayList 会自动扩容，以满足最小容量的要求

## ArrayList.addAll

ArrayList.addAll 是一个方法，用于将指定集合中的所有元素添加到调用该方法的 ArrayList 中。该方法的语法如下：

```java
public boolean addAll(Collection<? extends E> c)

```

addAll 方法会将集合 c 中的元素依次添加到 ArrayList 的末尾。如果添加成功，该方法将返回 true，否则返回 false。

```java
ArrayList<String> list1 = new ArrayList<String>();
ArrayList<String> list2 = new ArrayList<String>();
list2.add("one");
list2.add("two");
list2.add("three");
list1.addAll(list2);  // 将 list2 中的元素添加到 list1 中
System.out.println(list1);  // 输出 [one, two, three]

```
