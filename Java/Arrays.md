# Arrays

- [Arrays](#arrays)
  - [数组父子类型](#数组父子类型)
  - [为什么不能在Java中创建泛型数组](#为什么不能在java中创建泛型数组)
  - [Arrays.stream](#arraysstream)
  - [Arrays.asList](#arraysaslist)

## 数组父子类型

```java
  private static void testSubArr() {
    //    ---------demo1--------
    Parent[] parents1 = new Parent[2];
    parents1[0] = new Sub();
    //    ---------demo2--------
    Parent[] parents2 = new Sub[2];  //  可以将子类型的对象存储在父类型的数组中
    parents2[0] = new Sub();
    parents2[1] = new Sub();
    //    parents2[1] = new Parent(); // 编译时报错 finished with non-zero exit value 1
    for (int i = 0; i < parents2.length; i++) {
      // parents2[i].speak();  //parents2 的类型是Parent，没有speak方法
      ((Sub) parents2[i]).speak(); // 强制转化
    }
    //    ---------demo3--------
    //    Sub[] sub1 = new Parent[2]; // 不能这么写
    //    ---------demo4--------
    Sub[] sub1 = new Sub[2];
    //    sub1[0] = new Parent(); // 不能这么写
  }

```

## 为什么不能在Java中创建泛型数组

> <https://juejin.cn/post/6844903748699947021>

  在Java的早期版本中，由于没有泛型，而为了能够复用数组的实现，就将数组设计为[协变](./Java%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86.md#协变)的。可能会引发一个问题：类型安全性。为了避免出现这种情况，Java为数组引入了第二个特性：数组能够记住元素的类型，并且要进行运行期类型检查。而Java的泛型是通过[类型擦除](./Java%E6%B3%9B%E5%9E%8B.md#类型擦除)(type erasure)来实现的。使用泛型数组数组的类被擦除了，无法在运行时确认数组类，故不能使用泛型数组型。

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
