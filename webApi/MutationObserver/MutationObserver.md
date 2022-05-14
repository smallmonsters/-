### MutationObserver

* [MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)接口提供了监视对DOM树所做更改的能力

* 使用

```Typescript
// 选择需要观察变动的节点
const targetNode = document.getElementById('some-id');

/** 
 * 观察器的配置（需要观察什么变动）
 * false权重：attributes>subtree
*/
const config = {
   attributeFilter?: string[];
   attributeOldValue?: boolean;
   attributes?: boolean;// 是否观察属性变动，也包含了子元素的属性
   characterData?: boolean;
   characterDataOldValue?: boolean;
   childList?: boolean;//  观察目标子节点的变化，是否有添加或者删除
   subtree?: boolean; // 观察后代节点，默认为 false，当attributes=false，忽略改配置
   };


// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
  // 一次改变多个属性，mutation是每个改变属性的信息
  for(let mutation of mutationsList) {
    switch (mutation.type) {
      case "attributes":
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
        break;
      case "childList":
        console.log('The ' + mutation.attributeName + ' attribute was modified.');
        break;
    
      default:
        break;
    }
  }
};

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);

// 以以上配置开始观察目标节点，可以执行多次,传入不同的targetNode，config，通过mutation.target区分
observer.observe(targetNode, config);

// 之后，停止所有被观察的元素
observer.disconnect();
```

* 注意

>当attributes=false，忽略subtree的配置  
>父子元素都被观察时，父元素改变的属性影响子元素的属性时，不会触发子元素的观察回调函数  
>childList=true, 忽略subtree和attributes的配置  
>takeRecords方法要在属性改变了立即执行，才不会调用回调函数  
>  

* 第三方库
  [resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)
