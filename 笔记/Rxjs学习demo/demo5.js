var subject = new rxjs.BehaviorSubject(0); // 0是初始值11

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
// 虽然2被消费了，但是仍可以可以获取到最近一次更新的值
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

setTimeout(() => {
  subject.subscribe((value) => console.log('setTimeout：' + value));
}, 1000)

subject.next(3);
subject.next(4);

const subject1 = new rxjs.Subject();
subject1.subscribe((value) => console.log('A ' + value))
subject1.next(11);
subject1.next(22);
// 消费了的值，不会再消费了
subject1.subscribe((value) => console.log('B ' + value))
subject1.next(33);

