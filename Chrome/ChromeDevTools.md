### Chrome Dev Tools[视频](bilibili.com/video/BV1KM4y1G7EF)

* 在控制台中 command（ctrl） + shift 打开命令菜单（01：41）

* 查找元素除了用文本还可以用css选择器，[xPath语法](https://www.runoob.com/xpath/xpath-syntax.html)(08:44)，还可以在控制台出入inspect(DOM)(10:35)

* 可以通过 .cls 改变指定元素的css（16：00）

* Elements右边的computed，可以查看应用在元素上的所有样式

* Elements右边的layout，可以查看页面中所有grid和flex布局

* Elements右边的Properties，可以查看当前DOM对象的属性

* 在控制台中输入
  >$_: 返回上次执行的结果
  >$0:上次选中的DOM

* 可以通过Sources右边的Call Stack忽略debugger的文件（39:45）

* Network中的Preserve log打开可以保留历史请求

* Network中的WiFi图标 可以更改浏览器 user agent字段

* Network中的可以下载请求，再导入，模拟用户的请求，复现用户的网络请求bug

### Chrome Dev Tools[官方文档](https://developer.chrome.com/docs/devtools/)

* 对DOM进行断点调试[文档](https://developer.chrome.com/docs/devtools/javascript/breakpoints/#dom)

#### [命令菜单](https://developer.chrome.com/docs/devtools/command-menu)

* [控制台的一些快捷键](https://developer.chrome.com/docs/devtools/shortcuts/)

* 常用命令

>Enabled code folding: debugger 函数可以折叠  
>Show Coverage: 查看css和js覆盖率
>
>
>

#### [Elements](https://developer.chrome.com/docs/devtools/dom/)

* 可以直接拖拽DOM元素

* 可以右键将DOM元素设置成全局变量（[文档](https://developer.chrome.com/docs/devtools/dom/#global)）

#### [console](https://developer.chrome.com/docs/devtools/console/)  

* 比较实用的[Api](https://developer.chrome.com/docs/devtools/console/api)  

  >[table](<https://developer.chrome.com/docs/devtools/console/api/#table>):显示list更好看  
  >[group](<https://developer.chrome.com/docs/devtools/console/api/#group>):显示多个值更好看  
  >[assert](<https://developer.chrome.com/docs/devtools/console/api/#assert>):断言打印

* [live-expressions](https://developer.chrome.com/docs/devtools/console/live-expressions/)  
  可以在控制台实时观看某个表达式（变量）的值
