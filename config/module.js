const resolve = require('path').resolve;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              [
                require.resolve('babel-plugin-import'),
                { libraryName: 'antd', style: 'css' }
              ]
            ]
          }
        }
      ],
      include: [resolve('src'), resolve('test')],
      exclude: [resolve('node_modules')]
    },
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader/url', options: { attrs: { id: 'antd' } } },
        'file-loader'
      ],
      include: [resolve('src'), resolve('node_modules')]
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader'
        },
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              importLoaders: 0,
              modules: true, // css-modules 开关
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['> 1%', 'last 2 versions']
                })
              ]
            }
          },
          'sass-loader'
        ]
      }),

      include: [resolve('src')]
    },
    {
      test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    },
    {
      test: /\.(mp4|ogg)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }
  ]
};
