const { HelloWorld } = require("./plugin/helloWorldPlugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [new HelloWorld()],
}