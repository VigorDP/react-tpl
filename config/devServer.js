const HOST = require('../src/utils/env').HOST
const env = require('../src/utils/env').ENV
const proxyPath = getProxyPath(env)

module.exports = {
  // port: 3000,
  // contentBase: './src',
  hot: true,
  proxy: {
    // [proxyPath]: {
    //   target: HOST[env],
    //   changeOrigin: true
    // }
    '/mobile/*': {
      target: 'http://localhost:8227/',
      changeOrigin: true
    }
  }
}

function getProxyPath(env) {
  let proxyPath = 'devApi'
  if (env === 'test') {
    proxyPath = 'testApi'
  } else if (env === 'production') {
    proxyPath = 'prodApi'
  }
  return proxyPath
}
