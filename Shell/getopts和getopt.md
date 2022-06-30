- [getopts和getopt](#getopts和getopt)
  - [getopts](#getopts)
    - [语法](#语法)
    - [错误报告模式](#错误报告模式)
    - [案例](#案例)
    - [问题](#问题)
      - [1、OPTARG和opt变量怎么得到的](#1optarg和opt变量怎么得到的)
      - [2、 shift $((OPTIND-1))作用](#2-shift-optind-1作用)
  - [getopts与getopt的区别](#getopts与getopt的区别)

## getopts和getopt

```getopts``` 出现的目的是为了代替 ```getopt``` 较快捷的执行参数分析工作

### getopts

#### 语法

getopts是一个函数 opt_string opt_string，都是参数

```bash
getopts opt_string  opt_string [参数args]
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

#### 案例

```bash
#!/bin/bash

# 处理脚本参数
# -u 用户名
# -p 密码
# -v 是否显示详情
# -n 端口
while getopts ":u:p:n:v" opt_name # 通过循环，使用 getopts，按照指定参数列表进行解析，参数名存入 opt_name
do
    case "$opt_name" in # 根据参数名判断处理分支
        'u') # -u
            CONN_USERNAME="$OPTARG" # 从 $OPTARG 中获取参数值
            ;;
        'p') # -p
            CONN_PASSWORD="$OPTARG"
            ;;
        'v') # -v
            CONN_SHOW_DETAIL=true
            ;;
        'n') # -n
            CONN_PORT="$OPTARG"
            ;;
        ?) # 其它未指定名称参数
            echo "Unknown argument(s)."
            exit 2
            ;;
    esac
done

# 删除已解析的参数
shift $((OPTIND-1))

# 通过第一个无名称参数获取 主机
CONN_HOST="$1"

# 显示获取参数结果
echo 用户名      "$CONN_USERNAME"
echo 密码        "$CONN_PASSWORD"
echo 主机        "$CONN_HOST"
echo 端口        "$CONN_PORT"
echo 显示详情     "$CONN_SHOW_DETAIL"
```

#### 问题

##### 1、OPTARG和opt变量怎么得到的

> OPTARG：是一个局部变量  
> opt：是在函数外定义的一个变量，然后在getopts函数中赋值

```bash
test() {
  a=123
}
test a
echo $a # 123
```

##### 2、 shift $((OPTIND-1))作用

  变量OPTIND是getopts函数内的定义的，用来保存参数下标。shifts 命令来重命名位置参数。  
  [资料1](https://segmentfault.com/a/1190000021616802)  
  [资料2](https://qastack.cn/unix/214141/explain-the-shell-command-shift-optind-1)

### getopts与getopt的区别

| getopts                                                     | getopt                        |
| :---------------------------------------------------------- | :---------------------------- |
| bash内建命令的                                              | 外部命令需要安装                      |
| 不支持长选项， 比如： --date , -open                             | 支持长选项                    |
| 只需要在最后使用shift $(($OPTIND - 1))来跳到parameter的位置 | 需要自己shift来跳到下一个位置 |
| 语法简单                                                    | 语法较复杂                      |
| 不会重排所有参数的顺序                                      | 会重排参数顺序                |
