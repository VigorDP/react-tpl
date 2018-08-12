import { LOAD_JOKE, GET_MOBILE } from '../actionType'
import { loadJokeList, getMobile } from 'api'
import { createAction } from 'redux-actions'
// 语法：createAction(type, payloadCreator)
export const getMobileAction = createAction(GET_MOBILE, () => getMobile())
