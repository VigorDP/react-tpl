module.exports = {
  port: 3000,
  contentBase: './src',
  proxy: {
    '/backend': {
      target: 'http://ink-h5share-test.sce.sohuno.com', // 公开文章列表页服务 && H5分享文章详情数据
      changeOrigin: true,
      pathRewrite: {
        '^/backend3': '/'
      }
    }
  }
}
