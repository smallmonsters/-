#### 一、Shift+Ctrl+P打开输出入弹框，输入Configure user snippets，确定

#### 二、点击new Snippets新建一个代码片段

``` javascript
// demo
"console": {
    "prefix": "log",
    "body": [
        "console.log( `$1` )"
    ],
    "description": "Log output to console"
},
```

#### 三、配置

|key|desc|type|eg|
|---|---|---|---|
|prefix|指定输入快捷键|Array\|String| "prefix": "log", "prefix": ["log", "cl"]|
|description|指定输入提示语|String| "description": "description" |
|key|当未指定description时，输入提示语显示内容|String|"console":{...prefix:"log"...}|
|body|指定输出内容|Array|"body": ["console.log( '\$1' )", "console.log( '\$2')"]|
|$num|指定光标位置, |String|"body": [<br>"console.log( '\$1' )", <br>\\\\设置选择可选值 <br>"console.log('\${2\|one, two, three\|}' )"]|
|scope|指定使用范围|String|"scope":"scss, scss", |

#### 四、变量，使用$name形式能插入一个变量的值

|name|desc|
|---|---|
|TM_CURRENT_LINE |获取当前行的内容|
|TM_CURRENT_WORD |光标下单词的内容或空字符串|
|TM_LINE_INDEX |获取当前行号-1|
|TM_LINE_NUMBER |获取当前行号|
|TM_FILENAME |当前文档的文件名|
|TM_FILENAME_BASE  |不带扩展名的当前文档的文件名|
|TM_DIRECTORY |当前文档的目录|
|TM_FILEPATH |当前文档的完整文件路径|
|CLIPBOARD |剪贴板的内容|
|WORKSPACE_NAME  |打开的工作区或文件夹的名称|
|CURRENT_YEAR|获取当前年|
|CURRENT_YEAR_SHORT |获取当前年最后两位数字|
|CURRENT_MONTH |获取当前月(eg:03)|
|CURRENT_MONTH_NAME | 获取当前月(eg: July)|
|CURRENT_MONTH_NAME_SHORT  | 获取当前月的简称(eg: Jul)|
|CURRENT_DAY_NAME   | 获取当前日期名称(eg: Monday)|
|CURRENT_DAY_NAME_SHORT  | 获取当前日期简称(eg: Mon)|
|CURRENT_HOUR | 获取当前小时24制(eg:14)|
|CURRENT_MINUTE  | 获取当前分(eg:14)|
|CURRENT_SECOND  | 获取当前秒(eg:14)|
|CURRENT_SECONDS_UNIX | 获取当前时间戳|

#### 五、为代码片段设置快捷键

Shift+Ctrl+P打开输出入弹框，输入open keyboard shortcuts(json)

```
{
  "key": "cmd+k 1",
  "command": "editor.action.insertSnippet",
  "when": "editorTextFocus",
  "args": {
    "snippet": "console.log($1)$0"
  }
}
```

参考：<https://code.visualstudio.com/docs/editor/userdefinedsnippets>
