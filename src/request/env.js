const HOST = {
  development: 'http://v.juhe.cn/',
  test: 'http://v.juheTest.cn/',
  production: 'http://v.juheProd.cn/'
};

const ENV = process.env.NODE_ENV;
// const ENV = 'test';
// const ENV = 'production';

const PROXYPATH = getProxyPath(ENV);

module.exports = {
  HOST,
  ENV,
  PROXYPATH
};

function getProxyPath(env) {
  let proxyPath = '/devApi';
  if (env === 'test') {
    proxyPath = '/testApi';
  } else if (env === 'production') {
    proxyPath = '/prodApi';
  }
  return proxyPath;
}
