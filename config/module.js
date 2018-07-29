const resolve = require('path').resolve;

module.exports = {
    rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory=true', //当使用多个loader时，请用use而不是loaders代替loader
        include: [resolve('src'), resolve('test')],
        exclude: [resolve('node_modules')]
    }]
}
