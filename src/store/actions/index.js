import {
  REGISTER,
  LOGIN,
  UPDATE_USER_INFO,
  GET_USER_INFO,
  RESET
} from '../actionType';
import { register, login, updateUserInfo, getUserInfo } from 'api';
import { createAction } from 'redux-actions';
// 语法：createAction(type, payloadCreator)

export const registerAction = createAction(REGISTER, params =>
  register(params)
);

export const loginAction = createAction(LOGIN, params => login(params));

export const updateUserInfoAction = createAction(UPDATE_USER_INFO, params =>
  updateUserInfo(params)
);

export const getUserInfoAction = createAction(GET_USER_INFO, () =>
  getUserInfo()
);

export const resetAction = createAction(RESET);
