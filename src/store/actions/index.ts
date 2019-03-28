import { LOAD_JOKE } from '../actionType';
import { loadJokeList } from 'request/api';
import { createAction } from 'redux-actions';
// 语法：createAction(type, payloadCreator)
export const loadJokeListAction = createAction(LOAD_JOKE, () => loadJokeList());
