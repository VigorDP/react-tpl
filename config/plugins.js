const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // 定义客户端代码中的全局变量
  }),
  new HtmlWebpackPlugin({
    template: resolve('src/index.html'),
    filename: resolve('dist/index.html'),
    favicon: resolve('src/assets/imgs/favicon.ico')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('[name].[contenthash].css'),
  new CompressionPlugin(),
  () => process.env.NODE_ENV === 'production' && new BundleAnalyzerPlugin()
];
