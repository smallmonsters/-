# clean-file开发笔记

- [clean-file开发笔记](#clean-file开发笔记)
  - [package.json配置](#packagejson配置)
    - [bin字段](#bin字段)
    - [Select a new version如何选择](#select-a-new-version如何选择)
  - [安装一个本地包到全局中](#安装一个本地包到全局中)

clean-file node脚本开发笔记

## package.json配置

### bin字段

许多软件包都具有一个或多个要安装到 PATH 中的可执行文件。bin 字段是命令名到本地文件名的映射。

```json
{
  "bin": {
    "test": "./index.js",
  }
}
```

test就是终端中使用的命令，./index.js就是执行的文件

### Select a new version如何选择

> 资料一：[超详细 如何发布自己的 npm 包](https://juejin.cn/post/7039140144250617887)
> 资料一：[@lerna/publish](http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/publish.html)

## 安装一个本地包到全局中

npm install <folder>
