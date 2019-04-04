const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const resolve = require('path').resolve
const config = require('./config')

module.exports = {
  entry: {
    app: config.entry
  },
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: config.path, // 必须是绝对路径
    publicPath:
      process.env.NODE_ENV === 'development'
        ? config.dev.publicPath
        : config.prod.publicPath, // 打包后静态资源根路径
    chunkFilename: '[id].js' // 代码分割的块（chunk）的名字
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [resolve('src'), resolve('test')],
        exclude: [resolve('node_modules')]
      },

      {
        test: /\.css$/,
        use: ['css-loader']
      },

      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ],
        include: resolve(__dirname, '../node_modules')
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader'
          ]
        }),
        include: [resolve('src')]
      },
      {
        test: /\.(png|jpg|gif|eot|svg|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'imgs/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgs/[name].[ext]',
              context: ''
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
      '.scss',
      '.less',
      '.css'
    ], // 该扩展名类型文件在引入时可省略扩展名
    modules: [
      // 告诉 webpack 解析模块时应该搜索的目录
      resolve('src'), // 实际返回了src的路径，会优先于node_modules搜索
      resolve('node_modules')
    ],
    alias: {
      // 创建 import 或 require 的别名，来确保模块引入变得更简单
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // 定义客户端代码中的全局变量
    }),
    new ExtractTextPlugin('css/[name].[contenthash:8].css'),
    new HtmlWebpackPlugin({
      template: config.template,
      filename: config.filename
    })
  ]
}
