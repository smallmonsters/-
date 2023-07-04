#!/bin/bash
# 挂载数据卷
docker run -d -v ~/docker-space/docker_mysql/conf/my.cnf:/etc/mysql/my.cnf -v ~/docker-space/docker_mysql/logs:/logs -v ~/docker-space/docker_mysql/data/mysql:/var/lib/mysql -p 3306:3306 --name mysqll -e MYSQL_ROOT_PASSWORD=123456 mysql_dockerfile
