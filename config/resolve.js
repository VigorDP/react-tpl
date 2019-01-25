const resolve = require('path').resolve;

module.exports = {
  extensions: ['.js', '.jsx', '.json', '.scss', '.less', '.css'], // 该扩展名类型文件在引入时可省略扩展名
  modules: [
    // 告诉 webpack 解析模块时应该搜索的目录
    resolve('src'), // 实际返回了src的路径，会优先于node_modules搜索
    resolve('node_modules')
  ],
  alias: {
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    vue$: 'vue/dist/vue.common.js',
    src: resolve('src'),
    store: resolve('src/store'),
    assets: resolve('src/assets'),
    api: resolve('src/request/api'),
    components: resolve('src/components'),
    containers: resolve('src/containers'),
    pages: resolve('src/containers/pages'),
    styles: resolve('src/styles'),
    utils: resolve('src/utils')
  }
};
