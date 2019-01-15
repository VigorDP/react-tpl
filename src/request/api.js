import { get, post, patch } from './http';

// 注册，返回 token
const register = ({ mobile, password, code }) => {
  return post('/user', { mobile, password, code });
};

// 登录
const login = ({ mobile, password }) => {
  return patch('/login', { mobile, password });
};

// 获取当前用户信息
const getUser = ({ token }) => {
  return get('/user', { token });
};

// 更新企业信息
const updateUserInfo = ({ name, contact, industry }) => {
  return patch('/user', { name, contact, industry });
};

// 发送验证码
const sendCode = ({ mobile }) => {
  return post('/sms', { mobile });
};

export { register, login, sendCode, getUser, updateUserInfo };
