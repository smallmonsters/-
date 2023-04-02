# Set

- [Set](#set)
  - [Set.of 和 HashSet 区别](#setof-和-hashset-区别)
  - [LinkedHashSet 和 HashSet 区别](#linkedhashset-和-hashset-区别)
    - [获取Set中的元素](#获取set中的元素)
    - [哈希表](#哈希表)

## Set.of 和 HashSet 区别

Set.of() 是 Java 9 中引入的一个新方法，用于创建不可变的集合。如果你的 Java 版本低于 9，就无法使用这个方法。

- 可变性：Set.of() 方法创建的是一个不可变集合，即该集合中的元素不允许被修改，而 HashSet 是一个可变集合，即可以随时向其中添加或删除元素。
- 元素顺序：Set.of() 方法创建的集合不保证元素的顺序，而 HashSet 是一种无序的集合，即其中的元素没有特定的顺序。

```java
// 在不能使用set.of 的版本中，创建一个不可变集合
Set<Integer> originalSet = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
Set<Integer> immutableSet = Collections.unmodifiableSet(originalSet);
originalSet.add(51);
System.out.println(immutableSet); // [1, 2, 3, 51, 4, 5]

```

Collections.unmodifiableSet() 方法会返回一个视图，该视图会将指定的集合包装起来，并且阻止对该集合进行修改操作。由于该方法返回的是一个包装了原始集合的视图，**因此对原始集合进行修改仍然会影响到该视图**。

## LinkedHashSet 和 HashSet 区别

- 顺序不同：LinkedHashSet 会保留插入顺序，而 HashSet 不保证元素的顺序。也就是说，如果我们按照一定顺序向 LinkedHashSet 中添加元素，那么迭代集合时将会按照该顺序返回元素；而 HashSet 则会按照一种哈希算法将元素存储在不同的桶中，因此其迭代顺序并不是插入顺序。
- 存储结构不同：HashSet 内部是通过一个哈希表来实现的，而 LinkedHashSet 则是基于哈希表和链表来实现的。HashSet 内部是通过计算哈希值将元素存储在不同的桶中，因此访问元素的效率比较高；而 LinkedHashSet 则是通过链表来维护元素的插入顺序，因此访问元素的效率比较低，但是可以保证元素的顺序。

### 获取Set中的元素

### 哈希表

<!-- TODO -->
