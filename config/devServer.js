const HOST = require('../src/request/env').HOST;
const env = require('../src/request/env').ENV;
const proxyPath = require('../src/request/env').PROXYPATH;
console.log(proxyPath,HOST[env])
module.exports = {
  // port: 3000,
  // contentBase: './src',
  hot: true,
  proxy: {
    [proxyPath]: {
      target: HOST[env],
      changeOrigin: true,
      pathRewrite: { [proxyPath]: '/es-console' }
    }
  }
};
