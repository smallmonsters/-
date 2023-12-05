- [BFC](#bfc)
- [\[回流跟重绘\]](#回流跟重绘)
- [设备像素、css像素、设备独立像素、dpr、ppi 之间的区别](#设备像素css像素设备独立像素dprppi-之间的区别)
- [水平垂直居中](#水平垂直居中)
  - [方法一：利用定位+margin:auto](#方法一利用定位marginauto)
  - [方法二、用定位+margin:负值](#方法二用定位margin负值)
  - [方法三、定位+transform](#方法三定位transform)
  - [方法四、使用 display: table; 和 vertical-align: middle](#方法四使用-display-table-和-vertical-align-middle)
  - [使用 line-height 和 vertical-align 对图片进行垂直居中](#使用-line-height-和-vertical-align-对图片进行垂直居中)
- [css优先级计算规则](#css优先级计算规则)
- [子元素只有三个时，第三个元素背景改变](#子元素只有三个时第三个元素背景改变)
- [根元素display:flex;flex-direction: column;子元素display:flex;flex:1;孙子元素heigth:100%无效](#根元素displayflexflex-direction-column子元素displayflexflex1孙子元素heigth100无效)
- [block和line-block区别](#block和line-block区别)

# BFC

BFC（Block Formatting Context），即块级格式化上下文，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则：

- 内部的盒子会在垂直方向上一个接一个的放置
- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
- BFC目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素

触发BFC的条件包含不限于：

- 根元素，即HTML元素
- 浮动元素：float值为left、right
- overflow值不为 visible，为 auto、scroll、hidden
- display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
- position的值为absolute或fixed

# [回流跟重绘]

<https://vue3js.cn/interview/css/layout_painting.html>

# 设备像素、css像素、设备独立像素、dpr、ppi 之间的区别

 <https://github.com/febobo/web-interview/issues/97>

# 水平垂直居中

```html
 <div id="box">
    <div id="child">test vertical align</div>
  </div>
```

## 方法一：利用定位+margin:auto

```css
 #box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
  }

  #child {
    width: 200px;
    height: 100px;
    background: orange;
    position: absolute;
    /* 垂直：定高 */
    top: 0;    
    bottom: 0;
    /* 水平：定宽 */
    right:0;
    left:0;
    margin: auto;
    line-height: 100px;
  }
```

## 方法二、用定位+margin:负值

```css
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
}
#child {
    width: 50%;
    height: 30%;
    background: orange;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -15% 0 0 -25%;
}
```

## 方法三、定位+transform

```css
  #box {
    width: 300px;
    height: 300px;
    background: #ddd;
    position: relative;
  }

  #child {
    width: 50%;
    height: 30%;
    background: orange;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
```

## 方法四、使用 display: table; 和 vertical-align: middle

```css
  #box {
    width: 300px;
    height: 300px;
    background: #ddd;
    display: table;
  }

  #child {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
```

## 使用 line-height 和 vertical-align 对图片进行垂直居中

```html
 <div id="box">
    <img
      src="https://i2.hdslb.com/bfs/face/5ab927b2a13eee5fc0d9336730a5c313c9ccc2ac.jpg@240w_240h_1c_1s_!web-avatar-nav.avif">
  </div>
```

```css
  #box {
    width: 300px;
    height: 300px;
    background: #ddd;
    line-height: 300px;
    text-align: center;
  }

  #box img {
    width: 200px;
    height: 200px;
    vertical-align: middle;
  }
```

# css优先级计算规则

- 行间样式的特殊性是1,0,0,0
- ID选择器的特殊性值，加0,1,0,0。
- 类选择器、属性选择器或伪类，加0,0,1,0。
- 元素和伪元素，加0,0,0,1。
- 通配选择器*对特殊性没有贡献，即0,0,0,0。
- 最后比较特殊的一个标志!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为1,0,0,0,0。

# 子元素只有三个时，第三个元素背景改变

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  .container {
    display: flex;
    align-items: center;
    ;
    gap: 1em;
    padding: 1em;
    height: 200px;
  }

  .container>div {
    height: 80%;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: auto;
  }
  .container div:nth-child(-n+3):last-child{
    background-color: aqua;
    flex: 1.2;
    height: 100%;
  }
</style>

<body>
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>

  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</body>

</html>
```

:nth-child(an+b)

- 1、a,b可为正值也可为负值；  
- 2、-b为负值及减法；  
- 3、-a为负值表示，从b开始（包括b）往前匹配a的倍数；  

# 根元素display:flex;flex-direction: column;子元素display:flex;flex:1;孙子元素heigth:100%无效

# block和line-block区别
