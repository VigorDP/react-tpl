import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import promiseMiddleware from 'redux-promise'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'store/reducers'
import mySaga from '../sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)

export default store
