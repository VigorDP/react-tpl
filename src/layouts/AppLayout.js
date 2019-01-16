import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import BasicInfoPage from 'pages/BasicInfoPage';
import ConfigInfoPage from 'pages/ConfigInfoPage';
import { getUserInfoAction, resetAction } from 'store/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from 'styles/app.scss';
import leftLogo from 'assets/imgs/logo.png';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props
      .getUserInfo()
      .then()
      .catch(err => {});
  }

  handleLogout() {
    this.props.resetAction();
    window.localStorage.removeItem('userInfo');
    window.location.hash = '#/login';
  }

  render() {
    const { match, history } = this.props;
    return (
      <div className={styles.appContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <img src={leftLogo} />
            <span>SDK企业后台</span>
          </div>
          <div className={styles.right}>
            <span className={styles.shimo}>您好，武汉初心科技有限公司</span>
            <NavLink to="/login" onClick={this.handleLogout}>
              退出登录
            </NavLink>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.leftMenu}>
            <NavLink
              to={`${match.path}/ent-info`}
              className={`${
                history.location.pathname === '/app/ent-info'
                  ? styles.active
                  : ''
              }`}
            >
              企业信息
            </NavLink>
            <NavLink
              to={`${match.path}/ent-conf`}
              className={`${
                history.location.pathname === '/app/ent-conf'
                  ? styles.active
                  : ''
              }`}
            >
              企业配置
            </NavLink>
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
              <Redirect to={`${match.path}/ent-info`} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

AppLayout.propTypes = {
  getUserInfo: PropTypes.func,
  resetAction: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserInfo: params => dispatch(getUserInfoAction(params)),
    resetAction: params => dispatch(resetAction(params))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AppLayout);
