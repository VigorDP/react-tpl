module.exports = {
  mode: process.env.ENV,
  entry: require('./entry'),
  output: require('./output'),
  module: require('./module'),
  resolve: require('./resolve'),
  externals: require('./externals'),
  plugins: require('./plugins'),
  devServer: require('./devServer')
}

// console.log(module.exports)
