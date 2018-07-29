
module.exports = {
    mode: process.env.ENV,
    entry: require('./config/entry'),
    output: require('./config/output'),
    module: require('./config/module'),
    resolve: require('./config/resolve'),
    externals: require('./config/externals'),
    plugins: require('./config/plugins'),
    devServer: require('./config/devServer')
}

// console.log(module.exports)
