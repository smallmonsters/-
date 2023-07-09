FROM mysql
# 设置 LANG 环境变量为 C.UTF-8
ENV LANG C.UTF-8

LABEL version="0.1" description="Mysql服务器" by="don"

#将所需文件放到容器中
COPY /mysql/setup.sh /mysql/setup.sh
COPY /mysql/create_data_db.sql /mysql/create_data_db.sql
COPY /mysql/create_data_db.sql /mysql/create_constraint_db.sql



# #设置容器启动时执行的命令 
# todo: 会报错 ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock'  
# CMD ["sh", "/mysql/setup.sh"]
