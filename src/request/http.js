/** axios封装
 *  请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import store from 'store';
import { PROXYPATH } from './env';
import { resetAction } from 'store/actions';

// 环境的切换
axios.defaults.baseURL = PROXYPATH;

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.getState().getIn(['userInfo', 'token']);
    token && (config.headers.Authorization = `Bearer ${token}`);
    return config;
  },
  error => {}
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 会执行两次
    if (response && (response.status === 200 || response.status === 201)) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    const status = error && error.response.status;
    if (status) {
      switch (status) {
        // 400
        case 400:
        // 401 未登录
        case 401:
          window.localStorage.removeItem('userInfo');
          store.dispatch(resetAction());
          window.location.hash = '#/login';
          break;
        default:
          return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        url,
        {
          params
        },
        config
      )
      .then(res => {
        resolve(res && res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(res => {
        resolve(res && res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * patch方法，对应patch请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function patch(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, QS.stringify(params))
      .then(res => {
        resolve(res && res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
