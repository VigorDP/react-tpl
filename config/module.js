const resolve = require('path').resolve

module.exports = {
  rules: [
    { test: /\.(ts|tsx)?$/, loader: 'awesome-typescript-loader' },

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    {
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
      include: [resolve('src'), resolve('test')],
      exclude: [resolve('node_modules')]
    },

    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },

    {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'less-loader', options: { javascriptEnabled: true } }
      ],
      include: resolve(__dirname, '../node_modules')
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
      test: /\.(mp4|ogg)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }
  ]
}
