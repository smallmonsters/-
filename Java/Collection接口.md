# Collection 接口

## groupingBy

Collectors.groupingBy是一个收集器，用于将流中的元素按照指定的分类函数进行分组，并返回一个 Map 对象，其中键为分类结果，值为对应的元素列表。**Collectors.groupingBy 方法要求分类函数返回一个对象**。如果我们想要按照流中的基本类型数据进行分组，就需要先将它们转换为**包装类型数据**。这时就可以使用 boxed() 方法来实

```java
IntStream stream = IntStream.of(1, 2, 3);
Map<Integer, List<Integer>> groups = stream.boxed()
        .collect(Collectors.groupingBy(n -> n % 2));
```

## counting

Collectors.counting() 是一个收集器，用于统计流中元素的数量，并返回一个 long 类型的值。例如，给定一个 Student 类型的流，我们可以使用 Collectors.counting() 统计其中的学生人数：

```java
List<Student> students = ... // 假设已经有一个 Student 类型的流
long count = students.stream().collect(Collectors.counting());
```
