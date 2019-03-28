import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'

import joke from './joke'

const rootReducer = combineReducers({
  joke,
  routing: routerReducer
})

export default rootReducer