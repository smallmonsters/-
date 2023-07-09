CREATE DATABASE IF NOT EXISTS test;

USE test;

SET
  NAMES utf8mb4;

SET
  FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS user;

create table user(
  id int primary key auto_increment comment '主键',
  name varchar(10) not null unique comment '姓名',
  age int check(age > 0 && age <= 120) comment '年龄',
  status char(1) default '1' comment '状态',
  gender char(1) comment '性别'
) comment '用户表';