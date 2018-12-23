import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';

import styles from 'styles/App.scss';
import leftLogo from 'assets/imgs/logo.jpg';

const centerMenu = [
  { text: '明式家具之美' },
  { text: '明式家具之美' },
  { text: '明式家具之美' }
];

const rightMenu = [
  { text: '明式家具之美' },
  { text: '明式家具之美' },
  { text: '明式家具之美' }
];
export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className="header">
          <Header
            leftLogo={leftLogo}
            centerMenu={centerMenu}
            rightMenu={rightMenu}
          />
        </div>
        <Switch>
          <Route path="/" component={Screen1} exact={true} />
          <Route path="/path2" component={Screen2} exact={true} />
          <Route path="/path3" component={Screen3} exact={true} />
          <Route path="/path4" component={Screen4} exact={true} />
          <Route path="/path5" component={Screen5} exact={true} />
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
