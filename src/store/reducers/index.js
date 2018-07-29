import { combineReducers } from 'redux'
import todos from './todos123'
import visibilityFilter from './visibilityFilter'
console.log('visibilityFilter:', visibilityFilter)
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
