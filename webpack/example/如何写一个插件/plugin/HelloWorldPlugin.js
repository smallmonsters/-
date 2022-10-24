function HelloWorld() {
  console.log("helloWorld");
}

HelloWorld.prototype.apply = function (compiler) {
  debugger
  console.log("compiler");
}

module.exports = { HelloWorld }