- [JS 正则迷你书学习](#js-正则迷你书学习)
  - [下载](#下载)
  - [总结](#总结)
    - [1、优先弄清楚匹配的是**位置**还是**字符**](#1优先弄清楚匹配的是位置还是字符)
    - [2、弄清楚匹配的模式，也就是修饰符](#2弄清楚匹配的模式也就是修饰符)
    - [3、是否需要匹配开头和结尾](#3是否需要匹配开头和结尾)
    - [4、确认匹配的规则](#4确认匹配的规则)
    - [例子](#例子)
  - [术语中英文对照表](#术语中英文对照表)

## JS 正则迷你书学习

正则是匹配模式，要么匹配字符，要么匹配位置。  
位置就是""  

### [下载](https://github.com/qdlaoyao/js-regex-mini-book)

### 总结

#### 1、优先弄清楚匹配的是**位置**还是**字符**

  匹配字符：无非就是字符组、量词和分支结构的组合使用  
  匹配位置：无非就是 (非)单词边界、断言的组合使用  

#### 2、弄清楚匹配的模式，也就是修饰符

#### 3、是否需要匹配开头和结尾

#### 4、确认匹配的规则

- 对于较长的规则，可以拆分成多个小规则

#### 例子

- 数字的千位分隔符表示法
  
  "12345679987654321" ==> "12,345,679,987,654,321"。
  
  1、匹配的是位置，应该使用匹配位置的正则 ==>(?=p)、(?!=p)
  2、需要多次匹配，修饰符用g ==>/reg/g
  3、需要以数字结尾 ==>/\d$/
  4、确认 p 的规则：数字每三个一组。开头不需要匹配 ==> /(?!^)(?=(\d{3})+)/
  5、得到正则：/(?!^)(?=(\d{3})+$)/g

### 术语中英文对照表

|正则表达式 |   regular expressions    |
|------|--------------------------|
| 字符组  |    character classes     |
|反义字符组 |negated character classes |
|范围表达式法|    range expressions     |
| 元字符  |      metacharacters      |
| 通配符  |    wildcard character    |
| 换行符  |    newline charactor     |
| 回车符  |carriage return character |
|水平制表符 |      tab character       |
|垂直制表符 |  vertical tab charecter  |
| 换页符  |   form feed character    |
| 空白符  |        whitespace        |
| 段终止符 |   paragraph terminator   |
| 行终止符 |     line terminator      |
| 单词字符 |     word characters      |
|非单词字符 |   non-word characters    |
| 数字字符 |          digits          |
|非数字字符 |        non-digits        |
|字母数字字符| alphanumeric characters  |
|  量词  |       quantifiers        |
| 贪婪量词 |    greedy quantifiers    |
| 惰性量词 |     lazy quantifiers     |
|  位置  |        positions         |
|  锚   |         anchors          |
| 行开头  |   beginning of a line    |
| 行结尾  |      end of a line       |
| 单词边界 |     word boundaries      |
|非单词边界 |   non-word boundaries    |
| 向前查找 |        lookahead         |
|正向向前查找|    positive lookahead    |
|负向向前查找|    negative lookahead    |
| 向后查找 |        lookbehind        |
|正向向后查找|   positive lookbehind    |
|负向向后查找|   negative lookbehind    |
|  分组  |          groups          |
| 捕获分组 |     capturing groups     |
|非捕获分组 |   non-capturing groups   |
| 分支结构 |       alternations       |
| 反向引用 |     back references      |
|  回溯  |        backtracks        |
| 运算符  |        operators         |
|  优先级   | priority level  |
|  修饰符   |      flags      |
|全局匹配修饰符 |   global flag   |
|忽略大小写修饰符|ingnoreCase flag |
|多行匹配修饰符 | multiline flag  |
