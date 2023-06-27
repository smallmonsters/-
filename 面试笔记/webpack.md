# webpack 构建过程

- 从 entry 里配置的 module 开始递归解析 entry 依赖的所有 module
- 每找到一个 module，就会根据配置的 loader 去找对应的转换规则
- 对 module 进行转换后，再解析出当前 module 依赖的 module
- 这些模块会以 entry 为单位分组，一个 entry 和其所有依赖的 module 被分到一个组 Chunk
- 最后 webpack 会把所有 Chunk 转换成文件输出
- 在整个流程中 webpack 会在恰当的时机执行 plugin 里定义的逻辑
