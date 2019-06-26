import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '@containers/App'
import store from '@store/index'
import P from '@utils/routePath'

import './assets/imgs/favicon.ico'
import './styles/reset.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={P.default} component={App} />
        <Redirect to={P.default} />
      </Switch>
    </Router>,
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
  // module.hot.accept('./store/reducers', () => {
  //     const nextRootReducer = require('./store/reducers/index');
  //     store.replaceReducer(nextRootReducer);
  //   });
}
