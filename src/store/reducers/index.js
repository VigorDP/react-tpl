import { combineReducers } from 'redux-immutable';

import userInfo from './userInfo';

const rootReducer = combineReducers({
  userInfo
});

export default rootReducer;
