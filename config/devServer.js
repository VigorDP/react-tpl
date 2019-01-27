const HOST = require('../src/request/env').HOST;
const env = require('../src/request/env').ENV;
const proxyPath = require('../src/request/env').PROXYPATH;
const path = require('path');
const express = require('express');

module.exports = {
  hot: true,
  proxy: {
    [proxyPath]: {
      target: HOST[env],
      changeOrigin: true,
      pathRewrite: { [proxyPath]: '/' }
    }
  }
};
