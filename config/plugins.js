const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:resolve('./index.html')
    })
]
