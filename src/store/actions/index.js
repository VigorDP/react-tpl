import { REGISTER, LOGIN, UPDATE_USER_INFO } from '../actionType';
import { register, login, updateUserInfo } from 'api';
import { createAction } from 'redux-actions';
// 语法：createAction(type, payloadCreator)

export const registerAction = createAction(REGISTER, params =>
  register(params)
);

export const loginAction = createAction(LOGIN, params => login(params));

export const updateUserInfoAction = createAction(UPDATE_USER_INFO, params =>
  updateUserInfo(params)
);
