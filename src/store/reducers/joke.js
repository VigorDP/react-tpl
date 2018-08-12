import { FETCH_FAIL, FETCH_SUCCEED, FETCH_REQUESTED } from '../actionType'
import { handleActions } from 'redux-actions'
// 语法：handleActions({actionCreator},initialState)

export default handleActions(
  {
    [FETCH_REQUESTED](state, action) {
      return state
    },
    [FETCH_SUCCEED](state, action) {
      console.log(state)
      // action { payload:{mobile: "159263307"}, type:"GET_MOBILE" }
      return action.payload.mobile
    },
    [FETCH_FAIL](state, action) {
      return action.error
    }
  },
  'loading'
)
