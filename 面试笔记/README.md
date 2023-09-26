- [Daily-Interview-Question](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues)
- [2019前端面试系列——JS高频手写代码题](https://www.cnblogs.com/chenwenhao/p/11294541.html#_label12)
- [每天五分钟，半年大厂中](https://q.shanyue.tech/)
- [Daily-Question](https://github.com/shfshanyue/Daily-Question)
- [web-interview](https://vue3js.cn/interview/)

**想做面试题就看看Daily-Interview-Question**

```jsx
import { useState, useEffect } from 'react' 
const Component = () => {
const [count, setCount] = useState(0) 
 if (count) { 
 useEffect(() => console.log('开始计数'), [])
 }
 const onClick = useCallback(() => { 
 console.log(count) 
 setCount(count + 1) 
 },[count]) 
 
 return ( 
 <span>{count}</span> 
 <button onClick={onClick}>+1</button> 
 ) 
} 

export default Component

```
