const source = rxjs.of(1, 2).pipe(rxjs.publish());
source.subscribe((value) => console.log('A：' + value));
setTimeout(() => {
  source.subscribe((value) => console.log('B：' + value));
}, 1000);
source.connect();

const source1 = rxjs.of(1, 2).pipe(rxjs.publish());
source1.subscribe((value) => console.log('setTimeoutA：' + value));
setTimeout(() => {
  source1.subscribe((value) => console.log('setTimeoutB：' + value));
  source1.connect();
}, 1000);
// 使用publish可以实现多播不共享observabel