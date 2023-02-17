# data-structure开发笔记

<!-- 
TODO:
  类库需要支持按需加载吗？
  rollup好像没有打包成功？
  如何测试引入第三方包的大小
  
 -->

> 资料一：[基于rollup实现按需加载的前端组件库](https://www.cnblogs.com/mate-ui/p/15733083.html)

- [data-structure开发笔记](#data-structure开发笔记)
  - [相关构建工具](#相关构建工具)
    - [rollup](#rollup)
    - [grunt](#grunt)
  - [rollup使用](#rollup使用)
    - [安装](#安装)
    - [rollup指定配置文件build（rollup --config），ES模块无法解析](#rollup指定配置文件buildrollup---configes模块无法解析)
    - [问题](#问题)
      - [使用官方案例，打包直接引入了第三方库](#使用官方案例打包直接引入了第三方库)

## 相关构建工具

### rollup

### grunt

## rollup使用

> 官网：<https://www.rollupjs.com/>  

### 安装

> brew install rollup  
> npm install --global rollup  

### rollup指定配置文件build（rollup --config），ES模块无法解析

```json
// package.json
{
  "type": "module",
}
```

### 问题

#### 使用官方[案例](https://www.rollupjs.com/guide/tutorial#%E5%88%9B%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AA-bundle)，打包直接引入了第三方库

```js
// bundle.js
'use strict';
// why: 为什么直接引用了
var lodash = require('lodash');

var foo = 'hello world!';

function index () {
  console.log(foo, lodash.isNull(123));
}

module.exports = index;

```

需要引入
