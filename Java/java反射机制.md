# java反射机制

> [大白话说Java反射：入门、使用、原理](https://www.cnblogs.com/chanshuyi/p/head_first_of_reflection.html)

它允许程序在**运行时动态地获取类的信息**并操作类的属性、方法、构造函数等，而不需要提前知道这些信息。这使得Java程序具有更大的灵活性和可扩展性。需要注意的是，反射机制会带来一定的性能损失，并且会破坏Java程序的封装性。

```java
// 正常使用
Apple apple = new Apple(); //直接初始化，「正射」
apple.setPrice(4);
// 反射
Class clz = Class.forName("com.chenshuyi.reflect.Apple");
Method method = clz.getMethod("setPrice", int.class);
Constructor constructor = clz.getConstructor();
Object object = constructor.newInstance();
method.invoke(object, 4);
```

java 使用Field 类、Constructor 类、Method 类、Class 类和Object 类实现反射机制

## Method类

Method类是Java反射机制中的一部分，Method类表示一个类的方法，它提供了许多操作方法的相关信息和进行方法调用的方法。

```java
public class MyClass {
    public void myMethod(String arg1, int arg2) {
        System.out.println("arg1: " + arg1 + ", arg2: " + arg2);
    }
}

// 获取MyClass类的Class对象
Class clazz = MyClass.class;

// 获取myMethod方法
Method method = clazz.getMethod("myMethod", String.class, int.class);

// 创建MyClass的实例对象
MyClass obj = new MyClass();

// 调用myMethod方法
method.invoke(obj, "hello", 123);
```

### Method类的常用方法包括

- getName()：返回方法的名称。
- getDeclaringClass()：返回定义该方法的类的Class对象。
- getParameterTypes()：返回方法参数的类型的Class数组。
- getReturnType()：返回方法的返回类型的Class对象。
invoke(Object obj, Object... args)：调用该方法，第一个参数为该方法所属的对象，如果该方法是静态方法则可以传递null作为该参数，第二个参数为该方法的参数。
- isAnnotationPresent(Class<? extends Annotation> annotationClass)：判断该方法是否包含指定的注解。
- getAnnotations()：返回该方法声明的所有注解。
- getAnnotation(Class<T> annotationClass)：返回指定类型的注解。
- getModifiers()：返回该方法的修饰符，修饰符以整数形式返回，可以使用Modifier类的静态方法进行解析。

## Constructor 类

一个描述构**造函数**信息的对象，可以用于创建和操作对象。可以通过类对象的getConstructor()或getDeclaredConstructor()方法获取构造函数对象，然后使用newInstance()方法创建对象

```java
// 获取String类的构造函数
Constructor<?> constructor = String.class.getConstructor(String.class);

// 使用构造函数创建对象
String str = (String) constructor.newInstance("Hello, World!");

System.out.println(str);  // "Hello, World!"

```

### Constructor类的常用方法包括

- newInstance(Object... args)：使用构造函数创建一个新的对象，传入初始化参数args，返回新创建的对象。
- getParameterTypes()：获取构造函数的参数类型列表，返回一个Class对象数组，每个Class对象表示一个参数类型。
- getModifiers()：获取构造函数的修饰符信息，返回一个int值，表示构造函数的修饰符。
- getName()：获取构造函数的名称，返回一个String值，表示构造函数的名称。
- getDeclaringClass()：获取构造函数所属的类，返回一个Class对象，表示构造函数所属的类。
- setAccessible(boolean flag)：设置构造函数的访问权限，flag为true表示打破访问限制，可以访问私有构造函数。

## Object 类

一个描述类信息的对象，可以用于获取和操作类的属性和方法。在Java中，可以通过对象的getClass()方法、类名.class语法或Class.forName()方法获取类对象。

```java
// 通过对象的getClass()方法获取类对象
Object obj = new Object();
Class<?> cls1 = obj.getClass();

// 使用类名.class语法获取类对象
Class<?> cls2 = String.class;

// 使用Class.forName()方法获取类对象
Class<?> cls3 = Class.forName("java.lang.Integer");

```

## Field 类

提供有关类的属性信息，以及对它的动态访问权限。它是一个封装反射类的属性的类。

### Field 类 常用方法

- get(Object obj)：获取对象的属性值，obj为要获取属性值的对象，返回属性值。
- set(Object obj, Object value)：设置对象的属性值，obj为要设置属性值的对象，value为要设置的属性值，无返回值。
- getType()：获取属性的类型，返回一个Class对象，表示属性的类型。
- getName()：获取属性的名称，返回一个String值，表示属性的名称。
- getModifiers()：获取属性的修饰符信息，返回一个int值，表示属性的修饰符。
- isAccessible()：判断属性的访问权限，返回一个boolean值，表示属性是否可访问。
- setAccessible(boolean flag)：设置属性的访问权限，flag为true表示打破访问限制，可以访问私有属性。

```java
import java.lang.reflect.Field;

public class FieldDemo {
    public static void main(String[] args) {
        try {
            // 获取Person类的age属性
            Field field = Person.class.getDeclaredField("age");

            // 创建Person对象
            Person person = new Person("John", 20);

            // 获取属性值
            int age = (int) field.get(person);
            System.out.println("Age: " + age);

            // 设置属性值
            field.set(person, 30);
            System.out.println("New Age: " + person.getAge());

            // 设置访问权限
            field.setAccessible(true);

            // 获取私有属性值
            String name = (String) field.get(person);
            System.out.println("Name: " + name);

            // 设置私有属性值
            field.set(person, "Mary");
            System.out.println("New Name: " + person.getName());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

class Person {
    private String name;
    public int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

```
