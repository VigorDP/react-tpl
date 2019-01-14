import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppLayout from 'layouts/AppLayout';
import LoginLayout from 'layouts/LoginLayout';
import store from 'store';
import './styles/reset.scss';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={LoginLayout} />
        <Route path="/app" component={AppLayout} />
        <Redirect to="/app" />
      </Switch>
    </HashRouter>
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
