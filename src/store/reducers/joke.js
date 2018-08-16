import { LOAD_JOKE } from '../actionType'
import { Record, List } from 'immutable'
import { handleActions } from 'redux-actions'
// 语法：handleActions({actionCreator},initialState)
const JokeRecord = Record({
  content: '1',
  hashId: '',
  unixtime: 1,
  updatetime: '2018-12-12 20:23:52'
})
const defaultJoke = new JokeRecord()

export default handleActions(
  {
    [LOAD_JOKE](state, action) {
      return state.concat(action.payload)
    }
  },
  List([defaultJoke])
)
