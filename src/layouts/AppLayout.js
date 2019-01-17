import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import BasicInfoPage from 'pages/BasicInfoPage';
import ConfigInfoPage from 'pages/ConfigInfoPage';
import { getUserInfoAction, resetAction } from 'store/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from 'styles/appLayout.scss';
import leftLogo from 'assets/imgs/logo.png';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
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
        {/* <Toast /> */}
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <img src={leftLogo} />
            <span>SDK企业后台</span>
          </div>
          <div className={styles.right}>
            <span className={styles.shimo}>您好，{this.props.name}</span>
            <NavLink to="/login" onClick={this.handleLogout}>
              退出登录
            </NavLink>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.leftMenu}>
            <NavLink
              to={match.path}
              className={`${
                history.location.pathname === '/' ? styles.active : ''
              }`}
            >
              企业信息
            </NavLink>
            <NavLink
              to={`${match.path}ent-conf`}
              className={`${
                history.location.pathname === match.path + 'ent-conf'
                  ? styles.active
                  : ''
              }`}
            >
              企业配置
            </NavLink>
          </div>

          <div className={styles.rightContent}>
            <Switch>
              <Route path={match.path} component={BasicInfoPage} exact={true} />
              <Route
                path={`${match.path}ent-conf`}
                component={ConfigInfoPage}
              />
              <Redirect to={match.path} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

AppLayout.propTypes = {
  getUserInfo: PropTypes.func,
  resetAction: PropTypes.func,
  name: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.getIn(['userInfo', 'user']).name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserInfo: params => dispatch(getUserInfoAction(params)),
    resetAction: params => dispatch(resetAction(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
