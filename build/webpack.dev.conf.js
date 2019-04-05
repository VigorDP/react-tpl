const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require('webpack')
const config = require('./config')

module.exports = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    port: config.dev.port,
    proxy: config.dev.proxyTable
  }
})
