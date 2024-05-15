#### mac webstorm快捷键

- [mac webstorm快捷键](#mac-webstorm快捷键)
  - [跳转下\\上一个标签](#跳转下上一个标签)
  - [格式化](#格式化)
  - [快速修复](#快速修复)
  - [查看错误信息](#查看错误信息)
  - [定位到当前文件](#定位到当前文件)
  - [删除行](#删除行)
  - [聚焦到上次的工具窗口](#聚焦到上次的工具窗口)
  - [搜索目录结构，类似面包屑的查询](#搜索目录结构类似面包屑的查询)
  - [下\\上一个tab(改)](#下上一个tab改)
  - [打开项目(add)](#打开项目add)
  - [打开最近项目](#打开最近项目)
  - [文件内替换](#文件内替换)
  - [全局替换](#全局替换)
  - [聚焦到面包屑](#聚焦到面包屑)
  - [选择单词(改)](#选择单词改)
  - [选择所有的单词](#选择所有的单词)
  - [整个括弧里的代码移动](#整个括弧里的代码移动)
  - [跳转到括号标签开头和结尾](#跳转到括号标签开头和结尾)
  - [展开\\折叠 代码](#展开折叠-代码)
  - [添加书签](#添加书签)
  - [上、下一个书签](#上下一个书签)
  - [搜索便签](#搜索便签)
  - [光标跳转本页的top/bottom](#光标跳转本页的topbottom)
  - [快速选择括号里的数据](#快速选择括号里的数据)
  - [跳转页面的顶、底部](#跳转页面的顶底部)
  - [上\\下一个单词](#上下一个单词)
  - [选中行后面加光标](#选中行后面加光标)
  - [代码上下移动一行](#代码上下移动一行)
  - [向上换行](#向上换行)
  - [向下换行](#向下换行)
  - [光标后换行](#光标后换行)
  - [复制行](#复制行)
  - [跳到变量申明处](#跳到变量申明处)
  - [大小写转换](#大小写转换)
  - [配置别名](#配置别名)

##### 跳转下\上一个标签

ctrl + Command + down\up

##### 格式化

Option + Command + L

##### 快速修复

Option + Enter

##### 查看错误信息

Command + F1

##### 定位到当前文件

Option + F1,1

##### 删除行

Command + del

##### 聚焦到上次的工具窗口

F12

##### 搜索目录结构，类似面包屑的查询

Command + F12

##### 下\上一个tab(改)

Command + ] 、Command + [

##### 打开项目(add)

ctrl + Command + Option + o

##### 打开最近项目

Shift + Command + Option + o

##### 文件内替换

Command + r

##### 全局替换

Command + Shift + r

##### 聚焦到面包屑

Command + up

##### 选择单词(改)

Command + Option + g

##### 选择所有的单词

ctrl + Shift + g

##### 整个括弧里的代码移动

Shift + Command + up/down

##### 跳转到括号标签开头和结尾

Option + Command + [\\]

##### 展开\折叠 代码

Command + .

##### 添加书签

F3

##### 上、下一个书签

Option + Command + up\down

##### 搜索便签

Command + F3

##### 光标跳转本页的top/bottom

fn + Command + up/down

##### 快速选择括号里的数据

ctrl + Shift + p

##### 跳转页面的顶、底部

fn + Command + left/right

##### 上\下一个单词

ctrl + Option + up\down

##### 选中行后面加光标

Option + Shift + g

##### 代码上下移动一行

Shift + Option + up\down

##### 向上换行

Option + Command +Enter

##### 向下换行

Shift + Command + Enter

##### 光标后换行

Command + Enter

##### 复制行

Comand + D

##### 跳到变量申明处

Comand + B

##### 大小写转换

command + shift + u

##### 配置别名

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "target": "ES6",
    "allowSyntheticDefaultImports": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}

```
