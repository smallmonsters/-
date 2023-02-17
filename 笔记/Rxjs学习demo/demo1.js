const promise = async () => {
  return "async函数返回值"
}

// Observables 可以使用 create 来创建, 但通常我们使用所谓的创建操作符, 像 of、from、interval、等等。
var myObservable = rxjs.Observable.create(async (observer) => {
  observer.next('正常值');
  const res = await promise()
  observer.next(res)
});

myObservable.subscribe(value => {
  console.log(value);
});



var myObservable1 = rxjs.Observable.create(async (observer) => {
  observer.next(1)
});

myObservable1.next(2)

myObservable1.subscribe(value => {
  console.log(value);
});