const resolve = require('path').resolve;

module.exports = {
  filename: 'bundle.js',
  path: resolve(__dirname, '../dist/'), // 必须是绝对路径
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './', // 打包后静态资源根路径
  chunkFilename: '[name].chunk.js' // 代码分割的块（chunk）的名字
};
