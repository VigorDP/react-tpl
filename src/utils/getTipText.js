const map = {
  login: { success: '登录成功', error: '登录失败' },
  register: { success: '注册成功，请完善企业信息', error: '注册失败' },
  default: '参数有误'
};

const getTipTextByPath = ({ path } = { path: 'default' }) => {
  return map[path];
};

export default getTipTextByPath;
