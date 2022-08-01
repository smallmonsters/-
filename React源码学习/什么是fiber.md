# 什么是fiber

fiber是一个链表数据， fiber 和 dom tree 中间存在映射关系。

* fiber tree 中存在三种类型的指针 child、sibling、return。其中，child 指向第一个子节点，sibling 指向兄弟节点，return 指针指向父节点；
* fiber tree 采用的深度优先遍历，如果节点有子节点，先遍历子节点；子节点遍历结束以后，再遍历兄弟节点；没有子节点、兄弟节点，就返回父节点，遍历父节点的兄弟节点；
* 当节点的 return 指针返回 null 时，fiber tree 的遍历结束；

## fiber和虚拟dom

两种不同的数据结构。

* 虚拟dom
在 react16 引入 Fiber 架构之前，react 会采用```递归对比```虚拟DOM树，找出需要变动的节点，然后同步更新它们，这个过程 react 称为reconcilation（协调）。在reconcilation期间，react 会一直占用浏览器资源，会导致用户触发的事件得不到响应。

* fiber
对diff算法的优化。react 会先把 vdom 转 fiber，也就是 reconcile 的过程，因为 fiber 是链表，就可以打断，用 schedule 来空闲时调度（requestIdleCallback）就行，最后全部转完之后，再一次性 render，这个过程叫做 commit。react17中fiber是同步的即Legacy 模式。react18中fiber是可中断的即Concurrnt模式(react 推荐使用)。

## FiberRoot和rootFiber

* FiberRoot
  FiberRoot是整个项目的根节点，包含应用挂载的目标节点，记录整个应用更新过程的各种信息，由FiberRootNode函数构造
* rootFiber
  rootFiber是当前应用挂载的节点，即ReactDOM.render调用后的根节点，由FiberNode函数构造
* 关系图
  [!关系图](./asset/1.png)

## 资料

[走进 React Fiber 的世界](https://developer.aliyun.com/article/782946)
[手写简易版 React 来彻底搞懂 fiber 架构](https://juejin.cn/post/7063321486135656479)
