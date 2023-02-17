var myObservable = rxjs.interval(1000).pipe(rxjs.take(3))

const subscription1 = myObservable.subscribe({
  next: x => console.log("Observable实例一" + x),
});

setTimeout(() => {
  console.log("Observable实例一清除了，不会再输出")
  subscription1.unsubscribe()
}, [2000])

const subscription2 = myObservable.subscribe({
  next: x => console.log("Observable实例二" + x),
});

let subscription3

setTimeout(() => {
  myObservable.subscribe({
    next: x => console.log("Observable实例三" + x),
  });
}, 3000);


setTimeout(() => {
  console.log("Observable实例二清除了，不会再输出")
}, [3000])
// 单播不共享observable。subscription1和subscription2输出的x的值是不同的，没有共享，

const source = rxjs.interval(1000).pipe(rxjs.take(3));
const subject = new rxjs.Subject();
source.subscribe(subject);
subject.subscribe((value) => console.log('A ' + value))
setTimeout(() => {
  subject.subscribe((value) => console.log('B ' + value))
}, 1000)

// 多播播共享observable。A、B的value是一样的111，
