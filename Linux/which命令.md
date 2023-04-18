# which命令

which 是一个用于在Unix-like系统中查找给定命令的位置的命令行工具。当您在终端上键入 which [command] 时，它会搜索系统的 $PATH 环境变量中列出的所有目录，并返回该命令的完整路径（如果找到）。

例如，在Mac OS X上，如果您想要查找 nginx 命令的位置，可以运行以下命令：

> which nginx

输出可能是 /usr/local/bin/nginx 或 /opt/homebrew/bin/nginx，具体取决于系统和您使用的软件包管理器。通过查找命令所在的完整路径，您就可以知道系统将在哪里找到并执行该命令。
