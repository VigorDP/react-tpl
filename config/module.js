const resolve = require('path').resolve;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        plugins: [
          [
            require.resolve('babel-plugin-import'),
            { libraryName: 'antd', style: 'css' }
          ]
        ]
      },
      include: [resolve('src'), resolve('test')],
      exclude: [resolve('node_modules')]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: [resolve('src'), resolve('node_modules')]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')({ browsers: ['> 1%', 'last 2 versions'] })
            ]
          }
        },
        'sass-loader'
      ],
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
