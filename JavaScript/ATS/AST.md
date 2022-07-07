- [AST抽象语法树](#ast抽象语法树)
  - [AST 有什么用](#ast-有什么用)
  - [ESTree](#estree)
  - [编译流程](#编译流程)
    - [parse](#parse)
      - [词法分析](#词法分析)
      - [语法分析](#语法分析)
      - [常见的 Parser](#常见的-parser)
        - [uglify-js](#uglify-js)
        - [Esprima](#esprima)
        - [acorn](#acorn)
        - [@babel/parser(babylon)](#babelparserbabylon)
        - [espree](#espree)
    - [transform](#transform)
    - [generate](#generate)

# AST抽象语法树

## AST 有什么用

> 1、编辑器的错误提示、代码格式化、代码高亮、代码自动补全；  
> 2、elint、pretiier 对代码错误或风格的检查；  
> 3、webpack 通过 babel 转译 javascript 语法；  

## [ESTree](https://github.com/estree/estree)
<!-- TODO: ESTree有什么中文资料 -->

**js AST解析规范**。这个项目的初衷通过社区的力量，保证和es规范的一致性，通过自定义的语法结构来表述JavaScript的AST，后来随着知名度越来越高，多位知名工程师的参与，使得变成了事实意义上的规范，目前这个库是Mozilla和社区一起维护的。

如果没有AST规范，那么也就意味着根本无法造出对应的解析器，而如果AST规范不统一，一些相应的工具库就不能很好的互通有无，比如webpack就无法正常的使用babel相关插件。

正是因为EsTree的定义的规范，所以现在所有的js解析器或者编译器，基本上都绕不开它，如果你有志于自己写一个js解析器，那它的文档你一定需要读一遍。

## 编译流程

整体编译流程分为三步：

- parse
- transform
- generate

### parse

parse(转换)阶段的目的是把源码字符串转换成机器能够理解的 AST，这个过程分为```词法分析```、```语法分析```。

#### 词法分析

词法分析，也称之为扫描（scanner），简单来说就是调用 next() 方法，一个一个字母的来读取字符，然后与定义好的 JavaScript 关键字符做比较，生成对应的Token。Token 是一个不可分割的最小单元

> 例如 var 这三个字符，它只能作为一个整体，语义上不能再被分解，因此它是一个 Token。

eg:  
[babel/parser实现](https://github.com/babel/babel/blob/master/packages/babel-parser/src/tokenizer/types.js)

#### 语法分析

语法分析会将词法分析出来的 Token 转化成有语法含义的抽象语法树结构。同时，验证语法，语法如果有错的话，抛出语法错误

#### 常见的 Parser

- uglify-js
- Esprima
- acorn
- @babel/parser(babylon)
- espree

##### uglify-js

用于混淆和压缩代码，因为一些原因，uglify-js自己内部实现了一套AST规范[1]，也正是因为它的AST是自创的，不是标准的ESTree，es6以后新语法的AST，都不支持，所以没有办法压缩最新的es6的代码，如果需要压缩，可以用类似babel这样的工具先转换成ES5。

uglify-js已经进行到3版本了，前两个版本都是Mihai Bazon维护，但现在最新的3版本是alexlamsl维护，原作者已经不怎么维护了

##### Esprima

这是第一个用JavaScript编写的符合EsTree规范的JavaScript的解析器

##### acorn

acorn和Esprima很类似，输出的ast都是符合EsTree规范的，目前webpack的AST解析器用的就是acorn，和Esprima一样，也是也不直接支持JSX

##### @babel/parser(babylon)

babel官方的解析器，最初fork于acorn，后来完全走向了自己的道路，从babylon改名之后，其构建的插件体系非常强大。

##### espree

eslint、prettier的默认解析器，最初fork于Esprima的一个分支（v1.2.2），后来因为ES6的快速发展，但Esprima短时间内又不支持，后面就基于acorn开发了

### transform

遍历 AST，调用各种 transform 插件对 AST 进行增删改。比如注入一些代码，对结构做转换

### generate

把转换后的 AST 打印成目标代码，并生成 目标代码
