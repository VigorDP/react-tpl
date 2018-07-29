import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import todoApp from './store/reducers'
import { Provider } from 'react-redux'
import App from './container/Main/App'

const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL_aaa'
}

let store = createStore(todoApp, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
