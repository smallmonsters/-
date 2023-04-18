# mime.types文件

mime.types 是nginx配置文件中的一个重要文件，用于指定HTTP响应内容的MIME类型。在该文件中，每一行都表示一种MIME类型及其对应的文件扩展名。例如：

```conf
types {
    text/html                             html htm shtml;
    text/css                              css;
    text/xml                              xml;
    image/gif                             gif;
    image/jpeg                            jpeg jpg;
    application/javascript               js;
    application/atom+xml                  atom;
    application/rss+xml                   rss;
}
```

上述示例定义了一些常见的MIME类型及其对应的文件扩展名。当nginx处理HTTP请求时，它将检查请求URL或其他指令中设置的文件扩展名，并使用 mime.types 文件中定义的MIME类型来确定如何处理该响应。

需要注意的是，mime.types 文件中的MIME类型不是固定的，您可以根据需要进行修改和自定义。如果您的应用程序需要支持新的MIME类型，请确保将其添加到 mime.types 文件中以便nginx能够识别并正确处理。
