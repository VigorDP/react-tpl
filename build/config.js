const resolve = require('path').resolve

module.exports = {
  entry: './src/index.tsx',
  path: resolve(__dirname, '../dist'),
  template: resolve('./src/index.html'),
  filename: 'index.html',
  prod: {
    assetDir: 'static',
    publicPath: './' // 指定存放 JavaScript 文件的 CDN 目录 URL
  },
  dev: {
    port: 8080,
    assetDir: 'static',
    publicPath: '/',
    proxyTable: {}
  }
}