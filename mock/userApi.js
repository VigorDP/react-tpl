const mock = {
  // 登录
  [`PATCH /login`](req, res) {
    setTimeout(_ => {
      // mock loading
      res.status(200).json({
        user: {
          mobile: '15926339107', // 手机号
          name: '武汉初心科技有限公司', // 企业名称
          contact: 'FYC', // 企业联系人
          industry: '互联网', // 所在行业
          createdAt: '2014', // 注册时间
          lastSignInAt: '2017', // 上次登录时间
          config: {
            ID: '123', // 企业ID
            secret: 'MockSecret', // 企业 Secret
            expireTime: '2019-02-09T15:37:26.246001+08:00' // 过期时间
          }
        }
      });
    }, 0);
  },
  [`POST /user`](req, res) {
    setTimeout(_ => {
      // mock loading
      res.status(200).json({
        token: 'abcToken',
        user: {
          id: 1,
          name: '',
          mobile: ''
        }
      });
    }, 0);
  },
  [`POST /sms`](req, res) {
    setTimeout(_ => {
      // mock loading
      res.status(200).json({});
    }, 0);
  },
  [`PATCH /user`](req, res) {
    setTimeout(_ => {
      // mock loading
      res.status(200).json({});
    }, 0);
  }
};
module.exports = mock;
