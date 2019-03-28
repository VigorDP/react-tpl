import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';
import store from 'store';
import './styles/reset.scss';
import P from 'utils/routePath';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={P.default} component={App} />
        <Redirect to={P.default} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
  // module.hot.accept('./store/reducers', () => {
  //     const nextRootReducer = require('./store/reducers/index');
  //     store.replaceReducer(nextRootReducer);
  //   });
}
