const HOST = require('../src/request/env').HOST;
const env = require('../src/request/env').ENV;
const proxyPath = require('../src/request/env').PROXYPATH;
const path = require('path');
const express = require('express');

module.exports = {
  hot: true,
  contentBase: path.join(__dirname, '../src/assets'), // 静态资源目录，不能跟index.html同级
  proxy: {
    [proxyPath]: {
      target: HOST[env],
      changeOrigin: true,
      pathRewrite: { [proxyPath]: '/' }
    }
  }
};
