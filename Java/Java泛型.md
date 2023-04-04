# java泛型

- [java泛型](#java泛型)
  - [权限模式](#权限模式)
  - [类型擦除](#类型擦除)
  - [上界](#上界)
  - [通配符类型](#通配符类型)

Java 泛型是 Java 5 中引入的一种编程机制，它允许在编写 Java 代码时使用类型参数，从而实现代码的通用性和重用性。

```java
public class MyClass<T> {
    private T data;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}

MyClass<String> stringObj = new MyClass<>();
stringObj.setData("Hello, world!");

MyClass<Integer> intObj = new MyClass<>();
intObj.setData(123);

```

## 权限模式
<!-- TODO: -->

## 类型擦除

Java 泛型x`是在编译时进行类型检查的，在运行时类型信息会被擦除（Type Erasure）。这意味着泛型的类型参数会被擦除成它们的[上界](#上界)（通常是 Object），并且在运行时无法访问泛型类型的具体信息。因此，Java 泛型不能支持**运行时类型的检查和转换**

## 上界

在 Java 泛型中，可以使用 extends 关键字来指定类型参数的上界（Upper Bounds）。上界表示类型参数必须是指定的类型或其子类型。例如，以下代码中的类型参数 T 的上界是 Comparable 接口，表示类型参数 T 必须实现 Comparable 接口：

```java
public class MyClass<T extends Comparable> {
    // ...
}
```

上界只能是一个类或接口类型，不能是一个具体的对象。

```java
public class MyClass<T extends new Object()> {  // 错误：无法使用具体的对象作为上界
    // ...
}
```

如果不指定上界，则默认上界为 Object 类型，表示类型参数可以是任何类型。

## 通配符类型
<!-- todo -->
```java

ArrayList<?>[] boxData = new ArrayList<?>[9];
```
