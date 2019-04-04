const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require('webpack')
const HOST = require('../src/request/env').HOST
const env = require('../src/request/env').ENV
const proxyPath = require('../src/request/env').PROXYPATH

module.exports = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    proxy: {
      [proxyPath]: {
        target: HOST[env],
        changeOrigin: true,
        pathRewrite: {
          [proxyPath]: '/'
        }
      }
    }
  }
})
