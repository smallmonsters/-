# Stream

## IntStream.boxed

这个方法的作用就是对 Stream 中的原始类型数据进行[装箱](./Java%E7%9B%B8%E5%85%B3%E7%9F%A5%E8%AF%86.md#装箱)，从而将其转换为对应的包装类型。在某些情况下，我们需要将原始类型的数据转换为包装类型的数据，例如在使用 Collectors 类的一些方法时，由于这些方法只能操作包装类型的数据，因此需要将原始类型的数据进行装箱。

```java
  List b = IntStream.range(0, 2).boxed().collect(Collectors.toList());
    for (int i = 0; i < b.size(); i++) {
      b.get(i);
//      todo
    }
```

## collect

是 Stream API 中的一个终止操作，用于将 Stream 中的元素收集到一个容器中，例如 List、Set、Map 等。它接受一个 Collector 参数，用于指定如何收集元素。

```java
List<String> list = Stream.of("apple", "banana", "cherry")
    .collect(Collectors.toList());
System.out.println(list); // 输出 [apple, banana, cherry]

```
