const mock = {
  // 查询手机号
  [`/mobile`](req, res) {
    setTimeout(_ => {
      // mock loading
      res.status(200).json({
        mobile: '159263307'
      })
    }, 500)
  }
}
module.exports = mock
