# ubuntu开发问题

- [ubuntu开发问题](#ubuntu开发问题)
  - [ubuntu开启22端口](#ubuntu开启22端口)
    - [安装软件](#安装软件)
    - [报错 Permission denied (publickey,password)](#报错-permission-denied-publickeypassword)
  - [ubuntu如何以root登录](#ubuntu如何以root登录)
  - [固定内网ip](#固定内网ip)
  - [链接frps](#链接frps)

## ubuntu开启22端口

### 安装软件

> sudo apt install net-tools  
> sudo apt-get install openssh-server
> sudo apt-get install ufw
> sudo ufw enable
> sudo ufw allow 22

### 报错 Permission denied (publickey,password)

1、 修改/etc/ssh/sshd_config文件中将PermitRootLogin 改为yes  
2、 重启ssh服务sudo /etc/init.d/ssh restar  
3、 sudo username@ip

> 资料一：cnblogs.com/cherishsakura/p/12992737.html

## ubuntu如何以root登录

1、重新设置root密码
Terminal中输入sudo passwd root，在提示信息后输入root密码两次

2、配置登录信息
打开配置文件
sudo vi /usr/share/lightdm/lightdm.conf.d/50-ubuntu.conf
在配置中添加
greeter-show-manual-login=true

3、登录
重启后在登录选项中选择login，一次填入用户名（也就是root）和密码即可以root身份登录系统

## 固定内网ip

## 链接frps
