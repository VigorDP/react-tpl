import { LOAD_JOKE } from '../actionType'
import { handleActions } from 'redux-actions'
// 语法：handleActions({actionCreator},initialState)

export default handleActions(
  {
    [LOAD_JOKE](state, action) {
      return [...state, ...(action.payload || [])]
    }
  },
  []
)
