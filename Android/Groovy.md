# Groovy

<!-- TODO: 想要看懂android配置，还是要先了解下基本语法，以看懂配置为主 -->
## 导入包

```Groovy
java.io.*
java.lang.*
java.math.BigDecimal
java.math.BigInteger
java.net.*
java.util.*
groovy.lang.*
groovy.util.*
```

## 语法糖

### groovy允许省略语句结尾的分号，并允许在方法调用时省略括号

```groovy
include ':app', ':mylibrary'
// 等同
include(':app', ':mylibrary');
```

## def 关键字

Groovy 定义变量的方式和 Java 是类似的，区别在于 Groovy 提供了def关键字供使用，它可以省略变量类型的定义，根据变量的值进行类型推导。

## 资料

[Groovy 语言快速入门](https://www.jianshu.com/p/e8dec95c4326)
