# npm实用包

- [npm实用包](#npm实用包)
  - [React](#react)
    - [react编辑器：react-monaco-editor](#react编辑器react-monaco-editor)
    - [react弹簧动画库：react-spring](#react弹簧动画库react-spring)
  - [Vue](#vue)
    - [代码在线编辑：vue-codemirror](#代码在线编辑vue-codemirror)
    - [vue 拖拽：vuedraggable](#vue-拖拽vuedraggable)
  - [Helper](#helper)
    - [路径字符转换正则：path-to-regexp](#路径字符转换正则path-to-regexp)
    - [fetch 封装：isomorphic-fetch](#fetch-封装isomorphic-fetch)
    - [阿里巴巴前端规约及配套工具：F2ELint](#阿里巴巴前端规约及配套工具f2elint)
  - [css](#css)
    - [css reset：normalize.css](#css-resetnormalizecss)
    - [纯css动画库animate.css](#纯css动画库animatecss)
    - [绿袜子css动画库](#绿袜子css动画库)
  - [工具](#工具)
    - [echarts水球图：echarts-liquidfill](#echarts水球图echarts-liquidfill)
    - [echarts词云图：echarts-wordcloud](#echarts词云图echarts-wordcloud)
    - [页面全屏：screenfull](#页面全屏screenfull)
    - [浏览器顶部的进度条：NProgress](#浏览器顶部的进度条nprogress)
    - [阿里巴巴统一前端表单解决方案：formily](#阿里巴巴统一前端表单解决方案formily)
    - [HTML转换为markdown：turndown](#html转换为markdownturndown)
    - [拖拽工具：Sortable](#拖拽工具sortable)
    - [水印：watermark-dom](#水印watermark-dom)
    - [根据注释生成文档：jsDoc](#根据注释生成文档jsdoc)
  - [Nodejs](#nodejs)
    - [node命令行接口简单操作：commander](#node命令行接口简单操作commander)
    - [析Semantic Version（语义化版本）的工具：Semver](#析semantic-version语义化版本的工具semver)
    - [测量两个字符串之间的差异的个数：leven](#测量两个字符串之间的差异的个数leven)

## React

### [react编辑器](https://github.com/react-monaco-editor/react-monaco-editor)：react-monaco-editor

### [react弹簧动画库](https://github.com/pmndrs/react-spring)：react-spring

## Vue

### [代码在线编辑](https://github.com/surmon-china/vue-codemirror)：vue-codemirror

### [vue 拖拽](https://github.com/SortableJS/Vue.Draggable)：vuedraggable

Vue.Draggable是一款基于Sortable.js实现的vue拖拽插件。
>资料一：<https://www.itxst.com/vue-draggable/tutorial.html>  

## Helper

### [路径字符转换正则](https://github.com/pillarjs/path-to-regexp)：path-to-regexp

### [fetch 封装](https://github.com/matthew-andrews/isomorphic-fetch)：isomorphic-fetch

### [阿里巴巴前端规约及配套工具](https://github.com/alibaba/f2e-spec/blob/main/README.md)：F2ELint

## css

### [css reset](https://github.com/necolas/normalize.css)：normalize.css

### [纯css动画库](https://github.com/animate-css/animate.css)animate.css

> 官网：<https://animate.style/>

### [绿袜子css动画库](https://greensock.com/)

## 工具

### [echarts水球图](https://github.com/ecomfe/echarts-liquidfill)：echarts-liquidfill

![水球图](../../static/笔记/liquidfill.png)  
> 资料一：<https://www.jianshu.com/p/330b7e0f389e>  

### [echarts词云图](https://github.com/ecomfe/echarts-wordcloud)：echarts-wordcloud

> 资料一：<https://www.jianshu.com/p/94279368b6f9>  
![词云图](../../static/笔记/wordcloud.png)  

### [页面全屏](https://github.com/sindresorhus/screenfull)：screenfull
  
>react使用：<https://blog.csdn.net/weixin_46030044/article/details/105853575>  
>vue使用：<https://blog.csdn.net/qq_39009348/article/details/81144121>  

### [浏览器顶部的进度条](https://github.com/rstacruz/nprogress)：NProgress

>react使用：<https://blog.csdn.net/m0_37890289/article/details/109739783>  
>vue使用：<https://juejin.cn/post/6987555633683759134>  

### [阿里巴巴统一前端表单解决方案](https://github.com/alibaba/formily)：formily

> 官网：<https://formilyjs.org/zh-CN>，支持vue和react

### [HTML转换为markdown](https://github.com/mixmark-io/turndown)：turndown

> 资料一：<https://zhuanlan.zhihu.com/p/355121017>  
> 资料二：<https://www.srcmini.com/61706.html>  

### [拖拽工具](https://github.com/SortableJS/Sortable)：Sortable

>dome：<https://jsbin.com/fogujiv/edit?js,output>  

### [水印](https://gitee.com/ADgirl/watermark-dom)：watermark-dom

### [根据注释生成文档](https://github.com/jsdoc/jsdoc)：jsDoc

> 资料一：[jsdoc通过注解生成HTML API文档](https://blog.csdn.net/xdhc304/article/details/95216722)

## Nodejs

### [node命令行接口简单操作](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)：commander

- [commander问题记录](./commander%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95.md)

### [析Semantic Version（语义化版本）的工具](https://github.com/npm/node-semver#readme)：Semver

> 资料一：[Semver](https://www.jianshu.com/p/2d4ff5c94560)
> 资料二：[semver：语义版本号标准 + npm的版本控制器](https://juejin.cn/post/7122240572491825160)

```js
const { semver } = require('semver')
const { chalk } = require('chalk')
const requiredVersion = require('../package.json').engines.node

function checkNodeVersion (wanted, id) {
  if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
    console.log(chalk.red(
      'You are using Node ' + process.version + ', but this version of ' + id +
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
    ))
    process.exit(1)
  }
}

checkNodeVersion(requiredVersion, '@vue/cli')
```

### [测量两个字符串之间的差异的个数](https://github.com/sindresorhus/leven)：leven

命令输入错误用来提示正确的命令

```js
function suggestCommands (unknownCommand) {
  const availableCommands = program.commands.map(cmd => cmd._name)

  let suggestion

  availableCommands.forEach(cmd => {
    const isBestMatch = leven(cmd, unknownCommand) < leven(suggestion || '', unknownCommand)
    if (leven(cmd, unknownCommand) < 3 && isBestMatch) {
      suggestion = cmd
    }
  })

  if (suggestion) {
    console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`))
  }
}
```

> 资料一：[脚手架系列-minimist、leven、slash](https://juejin.cn/post/6975687741761650695)
> 资料二：[编辑距离算法详解](https://blog.csdn.net/www_helloworld_com/article/details/83871056)
