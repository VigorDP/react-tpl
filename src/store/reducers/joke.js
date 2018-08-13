import { LOAD_JOKE } from '../actionType'
import { handleActions } from 'redux-actions'
// 语法：handleActions({actionCreator},initialState)

export default handleActions(
  {
    [LOAD_JOKE](state, action) {
      // action { payload:{result: {data:[{content:''},...]}, type:"GET_MOBILE" }
      return [...state, ...action.payload.result.data]
    }
  },
  []
)
