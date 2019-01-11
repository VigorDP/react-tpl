import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import BasicInfoPage from 'pages/BasicInfoPage';
import ConfigInfoPage from 'pages/ConfigInfoPage';

import styles from 'styles/App.scss';
import leftLogo from 'assets/imgs/logo.png';

export default class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className={styles.appContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <img src={leftLogo} />
            <span>SDK企业后台</span>
          </div>
          <div className={styles.right}>
            <span>退出登录</span>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.leftMenu}>
            <NavLink to={`${match.path}/ent-info`}>企业信息</NavLink>
            <NavLink to={`${match.path}/ent-conf`}>企业配置</NavLink>
          </div>

          <div className={styles.rightContent}>
            <Switch>
              <Route
                path={`${match.path}/ent-info`}
                component={BasicInfoPage}
                exact={true}
              />
              <Route
                path={`${match.path}/ent-conf`}
                component={ConfigInfoPage}
                exact={true}
              />
              <Redirect to={`${match.path}/ent-conf`} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
