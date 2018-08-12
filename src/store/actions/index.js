import { LOAD_JOKE, TOGGLE_TODO } from '../actionType'
import { createAction } from 'redux-actions'
// 语法：createAction(type, payloadCreator)
export const loadJoke = createAction(LOAD_JOKE, data => data.result.data)
