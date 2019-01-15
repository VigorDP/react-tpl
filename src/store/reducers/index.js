import { combineReducers } from 'redux-immutable';

import token from './token';
import user from './user';

const rootReducer = combineReducers({
  token,
  user
});

export default rootReducer;
