import { LOGIN, UPDATE_USER_INFO } from '../actionType';
import { Record, Map } from 'immutable';
import { handleActions } from 'redux-actions';
// 语法：handleActions({actionCreator},initialState)

const localUserInfo = window.localStorage.getItem('userInfo');
const userInfo = localUserInfo !== 'undefined' && JSON.parse(localUserInfo);

const UserInfoRecord = Record(
  userInfo || {
    mobile: '', // 手机号
    name: '', // 企业名称
    contact: '', // 企业联系人
    industry: '', // 所在行业
    createdAt: '', // 注册时间
    lastSignInAt: '', // 上次登录时间
    config: {
      ID: '', // 企业ID
      secret: 'MockSecret', // 企业 Secret
      expireTime: '2019-02-09T15:37:26.246001+08:00' // 过期时间
    }
  }
);

const defaultUserInfo = new UserInfoRecord();

export default handleActions(
  {
    [LOGIN](state, action) {
      state = state.merge(action.payload.user);
      window.localStorage.setItem('userInfo', JSON.stringify(state.toJS()));
      return state;
    },
    [UPDATE_USER_INFO](state, action) {
      state = state.set(state.user, action.payload.user);
      window.localStorage.setItem('userInfo', JSON.stringify(state.toJS()));
    }
  },
  Map(defaultUserInfo)
);