function WLBPlugin() { }

const htmlTemplate = (slogan) => {
  return `<div><h1>${slogan}</h1><a href=\\"https://github.com/shadowings-zy/wlb-webpack-plugin\\">由「wlb-webpack-plugin 反内卷 & 代码防沉迷 webpack 插件」支持</a></div>`;
};

const generateCode = () => {
  const slogan = {
    introduction:
      '[work-life-balance-webpack-plugin] 反内卷 & 防沉迷插件提醒您: ',
    content: '需求千万条，反卷第一条，非要搞内卷，加班两行泪',
  };
  return `
    (function() {
      window.onload = function() {
        const introduction = '${slogan.introduction}';
        const content = '${slogan.content}';
        console.log(introduction + content);
        if (typeof window!=='undefined' && !window.showWLBPluginInfo) {
          document.body.setAttribute('style', 'display:flex;flex-direction:column;width:100vw;height:100vh;padding:0;margin:0;justify-content:center;text-align:center;')
          window.setInterval(function() {
            document.body.innerHTML="${htmlTemplate(slogan.content)}";
          }, 1000)
          window.showWLBPluginInfo=true
        }
      }
    })()
  `;
};


WLBPlugin.prototype.apply = function (compiler) {
  compiler.hooks.compilation.tap("WLBPlugin", (compilation) => {
    // （不要直接 require/import webpack）
    const { webpack } = compiler;
    compilation.hooks.processAssets.tap(
      {
        name: "WLBPlugin",
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
      },
      (assets) => {
        Object.keys(assets).forEach((item) => {
          //NOTE: 这里应该判断文件是不是js，不然css也会注入脚本
          let content = assets[item].source();
          content = content + generateCode();
          // 更新构建产物对象
          assets[item] = {
            source: () => content,
            size: () => content.length,
          };
        });
      })
  })
}

module.exports = { WLBPlugin }