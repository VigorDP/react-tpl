const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpack = require('webpack');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // 定义客户端代码中的全局变量
  }),
  new HtmlWebpackPlugin({
    template: resolve('src/index.html'),
    filename: resolve('dist/index.html')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new CopyWebpackPlugin([{ context: 'src/assets', from: '**/*', to: 'assets' }])
];

process.env.NODE_ENV === 'production' &&
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  );

module.exports = plugins;
