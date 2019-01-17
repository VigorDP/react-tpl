import { get, post, patch } from './http';

// 注册，返回 token
const register = ({ mobile, password, code }) => {
  return post('/user', { mobile, password, code });
};

// 登录
const login = ({ mobile, password }) => {
  return post('/login', { mobile, password });
};

// 获取当前用户信息
const getUserInfo = () => {
  return get('/user');
};

// 更新企业信息
const updateUserInfo = ({ name, contact, industry, email } = {}) => {
  return patch('/user', { name, contact, industry, email });
};

// 发送验证码
const sendCode = ({ mobile }) => {
  return post('/sms', { mobile });
};

export { register, login, sendCode, getUserInfo, updateUserInfo };
