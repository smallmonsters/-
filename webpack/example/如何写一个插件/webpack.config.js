const { HelloWorld } = require("./plugin/helloWorldPlugin");
const { LearnCompilation } = require("./plugin/LearnCompilation");
const { WLBPlugin } = require("./plugin/WLBPlugin");
const { OnePlugin, TwoPlugin } = require("./plugin/plugins");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new MiniCssExtractPlugin(),
    // new WLBPlugin(),
    new OnePlugin(),
    new TwoPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
}