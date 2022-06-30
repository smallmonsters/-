## getopts和getopt

```getopts``` 出现的目的是为了代替 ```getopt``` 较快捷的执行参数分析工作

### getopts

#### 语法

```bash
getopts opt_string  var_name [参数args]
# eg
# getopts ":o:p::v" 和 getopts ":o::p:v"等同的
while getopts ":o:p::v" opt; do
  echo $opt
  case "$opt" in
  "o")
    echo $OPTARG
    ;;
  "p")
    echo $OPTARG
    ;;
  "v")
    # 没有值，v后面没有冒号
    echo $OPTARG
    ;;
  esac
done
```

> opt_string：告诉getopts会有哪些选项和参数（用选项后面加“：”来表示选项后面需要加参数）,
> var_name：保存getopts获取到的选项  

#### 错误报告模式

在opt_string之前加冒号是**抑制错误报告模式** (:opt_string); 不加是**详细错误报告模式**。

| 错误                    | 抑制错误报告模式(:opt_string)                      | 详细错误报告模式  (opt_string)     |
| :------------------------------- | :------------------------------------------------------- | :--------------------- |
| 检测到一个无效的选项      |  var_name的值也会被设置为(?)，变量OPTARG会被设置为这个无效的选项      |var_name的值也会被设置为(?) |
| 检测到一个后面需要跟参数的选项，后面没有参数 |var_name的值会被设置为(:)，变量OPTARG会被设置为这个无效的选项 | var_name的值会被设置为(?)|

opt_string可以使多个选项，eg：:a:b:c表示 抑制错误报告模式，-a需要参数；-b需要参数；-c不需要参数。

#### $OPTARG

### getopts与getopt的区别

| getopts                                                     | getopt                        |
| :---------------------------------------------------------- | :---------------------------- |
| bash内建命令的                                              | 外部命令需要安装                      |
| 不支持长选项， 比如： --date , -open                             | 支持长选项                    |
| 只需要在最后使用shift $(($OPTIND - 1))来跳到parameter的位置 | 需要自己shift来跳到下一个位置 |
| 语法简单                                                    | 语法较复杂                      |
| 不会重排所有参数的顺序                                      | 会重排参数顺序                |
