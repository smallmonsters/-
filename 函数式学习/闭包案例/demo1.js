const strBuild = (str) => {
  return function next(nextStr) {
    if (typeof nextStr == "string") {
      return strBuild(str + nextStr);
    } else {
      return str
    }
  }
}

const sayHello = strBuild("Hello ")
const helloWorld = sayHello("World")
const helloBob = sayHello("Bob")
console.log(helloWorld(), helloBob()) //"Hello World