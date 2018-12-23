import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from 'containers/App';
import Login from 'containers/Login';
import store from 'store';
import createHashHistory from 'history/createHashHistory';
import './styles/reset.scss';
let history = createHashHistory();
// syncHistoryWithStore(history, store, {
//   selectLocationState(state) {
//     return state.get('routing');
//   }
// });

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/" component={App} exact={true} />
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
