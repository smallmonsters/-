# Nginx常用命令

- [Nginx常用命令](#nginx常用命令)
  - [测试nginx配置文件的语法和结构是否正确](#测试nginx配置文件的语法和结构是否正确)
  - [nginx指定配置文件启动](#nginx指定配置文件启动)
    - [nginx多实例和nginx -c区别](#nginx多实例和nginx--c区别)
    - [在mac中创建nginx多实例](#在mac中创建nginx多实例)
  - [查看Nginx进程](#查看nginx进程)
  - [查看端口被哪个PID占用](#查看端口被哪个pid占用)

## 测试nginx配置文件的语法和结构是否正确

> nginx -t

## nginx指定配置文件启动

> nginx -c /usr/local/nginx/conf/nginx.conf

### nginx多实例和nginx -c区别

在单个服务器上运行多个nginx实例和使用 nginx -c 命令在同一时间内更改默认配置文件之间有一些区别。

当在单个服务器上运行多个nginx实例时，每个实例都有自己独立的二进制文件、配置文件和资源，可以使用不同的端口号、日志文件路径和其他设置。这些实例可以同时运行，并且彼此之间相互独立。这种方法适用于需要同时处理多个不同站点或应用程序的情况。

而使用 nginx -c 命令可以覆盖默认配置文件并指定一个新的配置文件来启动nginx。这种方法适用于需要更改默认配置文件，但在同一时间只需要运行一个nginx实例的情况。

需要注意的是，无论您选择哪种方法，都需要确保各个服务之间的端口和资源不会发生冲突，以避免出现意外行为和安全问题。

### 在mac中创建nginx多实例

- 1、查看/opt/homebrew/bin/nginx原项目
- 2、在原项目bin目录中复制二进制文件到path/to/nginx
- 3、创建一个path/to/conf/nginx.conf文件
- 4、path/to/nginx -c path/to/conf/nginx.conf
<!-- TODO: 1、如何创建一个软连接 到 /opt/homebrew/bin；2、怎么修改path/to/nginx 启动默认的配置文件，使启动不用再加-c参数-->

## 查看Nginx进程

> ps -ef | grep nginx(进程名) or ps aux | grep nginx

## 查看端口被哪个PID占用

> lsof -i :端口
