const resolve = require('path').resolve

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
      include: [resolve('src'), resolve('test')],
      exclude: [resolve('node_modules')]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: [resolve('src')]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
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
}
