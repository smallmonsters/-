rxjs.of(
  { age: 4, name: 'Foo' },
  { age: 7, name: 'Bar' },
  { age: 7, name: 'Bar' },
  { age: 5, name: 'Foo' },
  { age: 6, name: 'Foo' })
  .pipe(rxjs.distinctUntilChanged((p, q) => p.name === q.name))
  .subscribe(x => console.log(JSON.stringify(x)));