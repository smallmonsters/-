# babel插件

babel版本7.x。  

## 前置知识

[AST](https://github.com/smallmonsters/my-growth/blob/master/JavaScript/ATS/AST.md)
[babelAST类型定义](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md)

## babel编译器和转译器

### parse

@babel/parser 基于acorn把源码字符串转换成机器能够理解的AST。实际与acorn转换的AST不一样。

#### 插件

@babel/parser 可以通过插件支持除js的其他语法的转换。[语言扩展](https://www.babeljs.cn/docs/babel-parser#language-extensions)

### transform

@babel/traverse 会对 parse 生成的 AST 的处理，会进行 AST 的遍历，遍历的过程中处理到不同的 AST 节点会调用注册的相应的 visitor 函数，visitor 函数里可以 对 AST 节点进行增删改，返回新的 AST（可以指定是否继续遍历新生成的 AST）。这样遍历完一遍 AST 之后就完成了对代码的修改

### generate

@babel/generate 会把 AST 打印成目标代码字符串，并且会生成 sourcemap。不同的 AST 对应的不同结构的字符串
