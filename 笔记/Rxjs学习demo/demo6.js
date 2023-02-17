// https://cn.rx.js.org/manual/overview.html#h38
var myObservable = rxjs.interval(1000).pipe(rxjs.take(3))

var subject = new rxjs.BehaviorSubject();

var multicasted = myObservable.pipe(rxjs.multicast(subject)).refCount()
var subscription1, subscription2, subscriptionConnect;

subscription1 = multicasted.subscribe((value) => {
  console.log("A:" + value);
})

setTimeout(() => {
  subscription2 = multicasted.subscribe((value) => {
    console.log("B:" + value);
  })
  subscription1.unsubscribe()
}, 2000)

setTimeout(() => {
  subscription2.unsubscribe()
}, 3500)

setTimeout(() => {
  console.log("----------Subject------");
  var myObservable = rxjs.interval(1000).pipe(rxjs.take(3))
  var subject = new rxjs.Subject();
  var multicasted = myObservable.pipe(rxjs.multicast(subject)).refCount()
  var subscription1, subscription2, subscriptionConnect;

  subscription1 = multicasted.subscribe((value) => {
    console.log("A:" + value);
  })

  setTimeout(() => {
    subscription2 = multicasted.subscribe((value) => {
      console.log("B:" + value);
    })
    subscription1.unsubscribe()
  }, 2000)

  setTimeout(() => {
    subscription2.unsubscribe()
  }, 3500)
}, 4000)

