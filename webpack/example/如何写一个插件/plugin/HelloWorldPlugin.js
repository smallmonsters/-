function HelloWorld() {
  console.log("helloWorld");
}

HelloWorld.prototype.apply = function (compiler) { }

module.exports = { HelloWorld }