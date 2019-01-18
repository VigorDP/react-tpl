module.exports = {
  splitChunks: {
    cacheGroups: {
      // 其次: 打包业务中公共代码(通过priority属性确定打包顺序)
      common: {
        name: 'common',
        chunks: 'all',
        minSize: 1,
        priority: 0
      },
      // 首先: 打包node_modules中的文件
      vendor: {
        name: 'framework',
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        priority: 10
      }
    }
  }
};
