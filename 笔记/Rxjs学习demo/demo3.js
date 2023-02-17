// 案例一
var myObservable = rxjs.Observable.create((observer) => {
  observer.next('1');
  observer.next('2');
  observer.next('3');
  // 这里没有参数，传了也无法获取
  observer.complete('complete');
});

myObservable.subscribe({
  next: x => console.log(x),
  error: err => console.error('something wrong occurred: ' + err),
  // undefined
  complete: (x) => console.log(x),
});

// // complete了这里就报错了
// myObservable.subscribe(value => {
//   console.log("subscribe2:" + value);
// });


// 案例二
let count = 0
// subscribe 不要使用ansyc函数，subscription.unsubscribe回报错
const observable = rxjs.Observable.create(function subscribe(subscriber) {
  const intervalId = setInterval(() => {
    subscriber.next('hi');
    count++;
  }, 1000);
  // 当我们使用 create() 方法创建 Observable 时，Observable 必须定义如何清理执行的资源
  return function unsubscribe() {
    clearInterval(intervalId);
  };
});
const subscription = observable.subscribe({ next: (x) => console.log(x) });

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);

// subscribe 没有返回函数，unsubscribe候count会一直自增
setTimeout(() => {
  console.log(count);
}, 6000);

