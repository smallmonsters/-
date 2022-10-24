function LearnCompilation() { }

LearnCompilation.prototype.apply = function (compiler) {
  compiler.hooks.compile.tap("LearnCompilation", (compilation) => {
    debugger
  })
  compiler.hooks.compilation.tap("LearnCompilation", (compilation, compilationParams) => {
    debugger
  })
}

module.exports = { LearnCompilation }