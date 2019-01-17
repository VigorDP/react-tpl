import { LOGIN, REGISTER, GET_USER_INFO, RESET } from '../actionType';
import { Record, Map } from 'immutable';
import { handleActions } from 'redux-actions';
// 语法：handleActions({actionCreator},initialState)

const localUserInfo = window.localStorage.getItem('userInfo');
const userInfo =
  localUserInfo && localUserInfo !== 'undefined' && JSON.parse(localUserInfo);

const UserInfoRecord = Record(
  userInfo || {
    token: '',
    user: {
      id: 'testID',
      createdAt: '',
      email: '',
      mobile: '', // 手机号
      name: '', // 企业名称
      contact: '', // 企业联系人
      industry: '', // 所在行业
      createdAt: '', // 注册时间
      lastSignInAt: '', // 上次登录时间
      configs: [
        {
          id: '', // 企业ID
          secret: 'MockSecret', // 企业 Secret
          stages: 'sandbox', // sandbox表示测试环境; production 表示正式环境
          createdAt: '',
          clientID: '',
          expireTime: '2019-02-09T15:37:26.246001+08:00' // 过期时间
        }
      ]
    }
  }
);

const defaultUserInfo = new UserInfoRecord();

export default handleActions(
  {
    [LOGIN](state, action) {
      if (action.payload && action.payload.user && action.payload.token) {
        state = state
          .set('token', action.payload.token)
          .set('user', action.payload.user);
      }
      window.localStorage.setItem('userInfo', JSON.stringify(state.toJS()));
      return state;
    },
    [REGISTER](state, action) {
      if (action.payload && action.payload.user && action.payload.token) {
        state = state
          .set('token', action.payload.token)
          .set('user', action.payload.user);
      }
      return state;
    },
    [GET_USER_INFO](state, action) {
      if (action.payload && action.payload.id) {
        state = state.set('user', action.payload);
        window.localStorage.setItem('userInfo', JSON.stringify(state.toJS()));
      }
      return state;
    },
    [RESET](state, action) {
      state = state.set('token', '');
      return state;
    }
  },
  Map(defaultUserInfo)
);
