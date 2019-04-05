import { LOAD_JOKE } from '../actionType'
import { handleActions } from 'redux-actions'

// 语法：handleActions({actionCreator},initialState)
const defaultJoke = {
  content: '1',
  hashId: '',
  unixtime: 1,
  updatetime: '2018-12-12 20:23:52'
}
type IJoke = typeof defaultJoke[]

interface IAction {
  payload: any
}

export default handleActions<IJoke, IAction>(
  {
    [LOAD_JOKE](state: IJoke, action: IAction) {
      return state.concat(action.payload)
    }
  },
  [defaultJoke]
)
