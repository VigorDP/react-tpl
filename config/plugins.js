const resolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // 定义客户端代码中的全局变量
  }),
  new HtmlWebpackPlugin({
    template: resolve('src/index.html'),
    filename: resolve('dist/index.html')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('[name].[contenthash].css')
]
