/**
 * 如何改变一个函数的形状
 * 期望 add或者subtract函数能接受多个参数
 * expect  add or subtract called accept multiple parament
 * */
function add(arr) {
  return arr.reduce((a, b) => a + b, 0)
}

function subtract(arr) {
  return arr.reduce((a, b) => a - b, 0)
}
// my idea
function a(...args) {
  return add(args)
}
function b(...args) {
  return subtract(args)
}
console.log(a(1, 2, 3, 10));
console.log(b(1, 2, 3, 10));

// create functional adapter is  better 
function unspread(fn) {
  return function (...args) {
    return fn(args);
  }
}
let g = unspread(add)
let f = unspread(subtract)

console.log(g(1, 2, 3, 10));
console.log(f(1, 2, 3, 10));
