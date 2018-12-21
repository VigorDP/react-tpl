const resolve = require('path').resolve;

module.exports = {
  filename: 'bundle.js',
  path: resolve(__dirname, '../dist/'), // 必须是绝对路径
  publicPath: './', // 打包后静态资源根路径
  chunkFilename: '[id].js' // 代码分割的块（chunk）的名字
};
