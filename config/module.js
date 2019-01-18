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
      use: [
        'style-loader',
        { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('autoprefixer')({ browsers: ['last 2 versions'] })
            ]
          }
        }
      ],
      include: [resolve('src'), resolve('node_modules')]
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
};
