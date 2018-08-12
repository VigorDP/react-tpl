import { createStore } from 'redux'
import todoApp from 'store/reducers'

const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL_aaa'
}

let store = createStore(todoApp, initialState)

export default store
