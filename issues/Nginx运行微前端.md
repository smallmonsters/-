# Nginx运行微前端

## 安装

```bash
brew install nginx
```

### 默认配置

> 1、Docroot is: /opt/homebrew/var/www  
> 2、The default port has been set in /opt/homebrew/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.  
> 3、nginx will load all files in /opt/homebrew/etc/nginx/servers/.  
> 4、To restart nginx after an upgrade:
  brew services restart nginx.
  Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/nginx/bin/nginx -g daemon off

可以通过brew info nginx 查看

### 运行

> sudo nginx
> 浏览器中访问 <http://localhost:8080>

### 关闭

> sudo nginx -s stop

## 配置 nginx

nginx的所有配置文件在 /opt/homebrew/etc/nginx 下
nginx默认html在 /opt/homebrew/var/www 下，软连接在 /opt/homebrew/Cellar/nginx/1.23.0/html

```bash
#  /opt/homebrew/etc/nginx/nginx.conf

 server{
        listen       9001;
        server_name  localhost;

        location / {
            # 文件根目录，通常放前端build文件，可以自己修改路径
            root   html/child/zhsd;
            index  index.html index.htm;
        }
    }
   server{
        listen       9000;
        server_name  localhost;
        location / {
            root   html/child/build;
            index  index.html index.htm;
        }
    }

```

### Nginx代理history路由刷新404

```bash
...
   server{
        listen       9000;
        server_name  localhost;
        location / {
            ...
            # 解决 刷新 404
            try_files $uri $uri/ /index.html;
            error_page 404 /index.html;
        }
    }
...
```
