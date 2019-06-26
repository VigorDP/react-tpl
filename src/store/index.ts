import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from 'store/reducers'
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = Object.create(null)

let store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(promiseMiddleware)))

export default store
