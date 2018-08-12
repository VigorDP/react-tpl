import { GET_MOBILE } from '../actionType'
import { handleActions } from 'redux-actions'
// 语法：handleActions({actionCreator},initialState)

export default handleActions(
  {
    [GET_MOBILE](state, action) {
      // action { payload:{mobile: "159263307"}, type:"GET_MOBILE" }
      return action.payload.mobile
    }
  },
  ''
)
