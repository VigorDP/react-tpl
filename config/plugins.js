const resolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new HtmlWebpackPlugin({
    template: resolve('src/index.html'),
    filename: resolve('dist/index.html')
  }),
  new ExtractTextPlugin('[name].[contenthash].css')
]
