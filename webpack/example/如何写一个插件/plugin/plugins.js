//plugins.js
const webpack = require('webpack');

class OnePlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('OnePlugin', (compilation) => {
      compilation.hooks.processAssets.tapAsync({
        name: 'OnePlugin',
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_PRE_PROCESS,
        additionalAssets: true,
      }, (_, callback) => {
        console.log('OnePlugin PROCESS_ASSETS_STAGE_PRE_PROCESS');
        callback();
      });

      compilation.hooks.processAssets.tapAsync({
        name: 'OnePlugin',
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_DERIVED,
        // additionalAssets: (_, callback) => {
        //   console.log('OnePlugin PROCESS_ASSETS_STAGE_DERIVED11 additionalAssets callback')
        //   callback();
        // },
        additionalAssets: true,
      }, (_, callback) => {
        //  additionalAssets: true,
        console.log('OnePlugin PROCESS_ASSETS_STAGE_DERIVED');
        callback();
      });


      compilation.hooks.processAssets.tapAsync({
        name: 'OnePlugin',
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        additionalAssets: true,
        // additionalAssets: (_, callback) => {
        // additionalAssets: 函数,TwoPlugin 调用compilation.emitAsset 就会走这里
        //   console.log('OnePlugin PROCESS_ASSETS_STAGE_ADDITIONAL additionalAssets callback')
        //   callback();
        // },
      }, (_, callback) => {
        // additionalAssets: true,TwoPlugin 调用compilation.emitAsset 就会走这里
        console.log('OnePlugin PROCESS_ASSETS_STAGE_ADDITIONAL');
        callback();
      });

      compilation.hooks.processAssets.tapAsync({
        name: 'OnePlugin',
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
      }, (_, callback) => {
        console.log('OnePlugin PROCESS_ASSETS_STAGE_ADDITIONS');
        callback();
      });
    });
  }
}

class TwoPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('TwoPlugin', (compilation) => {
      compilation.hooks.processAssets.tapAsync({
        name: 'TwoPlugin',
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_DERIVED,
      }, (_, callback) => {
        console.log('TwoPlugin PROCESS_ASSETS_STAGE_DERIVED');
        compilation.emitAsset('hello.txt', new webpack.sources.RawSource('Hello World'));
        callback();
      });
    });
  }
}

module.exports = {
  OnePlugin,
  TwoPlugin,
};
