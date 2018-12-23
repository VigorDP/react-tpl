module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  entry: require('./entry'),
  output: require('./output'),
  module: require('./module'),
  resolve: require('./resolve'),
  externals: require('./externals'),
  plugins: require('./plugins'),
  devServer: require('./devServer')
};
