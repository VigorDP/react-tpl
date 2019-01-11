import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from 'store/reducers'
import Immutable from 'immutable'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = Immutable.Map()

let store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(promiseMiddleware))
)

export default store
