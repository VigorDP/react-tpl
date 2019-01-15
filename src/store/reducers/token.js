import { REGISTER } from '../actionType';
import { Record, Map } from 'immutable';
import { handleActions } from 'redux-actions';
// 语法：handleActions({actionCreator},initialState)
const localToken = window.localStorage.getItem('token');
const token = localToken !== 'undefined' && JSON.parse(localToken);
const TokenRecord = Record(
  token || {
    token: '123',
    user: {}
  }
);
const defaultUserInfo = new TokenRecord();

export default handleActions(
  {
    [REGISTER](state, action) {
      window.localStorage.setItem('token', JSON.stringify(action.payload));
      return state.merge(action.payload);
    }
  },
  Map(defaultUserInfo)
);
