# Arrays

## Arrays.stream

## Arrays.asList

Arrays.asList() 方法是将数组转换为列表的常用方法，它的作用是将数组转换为一个固定大小的列表。这意味着该列表的大小不能改变，也不能进行添加或删除元素的操作，否则会导致 UnsupportedOperationException 异常。如果需要对列表进行增加或删除元素的操作，需要将该列表转换为可变的列表，比如通过 new ArrayList<>(Arrays.asList(array)) 来创建一个可变的 ArrayList 对象。

```java
Set<Integer> set = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9))



List list1 = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
list1.add(11); // error
System.out.println(list1);
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));
list.add(22);
System.out.println(list); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 22]
```
