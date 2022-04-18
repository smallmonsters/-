### 用useRef(value)自动推导类型

* useLatest hook

```Typescript
// 写法一
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

// 写法二
function useLatest<T>(value: T) {
  const ref = useRef<T>();
  ref.current = value;

  return ref;
}
```

写法一  
ref: React.MutableRefObject\<T\>

写法二  
ref: React.MutableRefObject\<T | undefined\>
