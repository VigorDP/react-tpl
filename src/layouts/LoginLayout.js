import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/loginLayout.scss';
import { validateMobile, validatePassword } from 'utils/checkForm';
import { connect } from 'react-redux';
import { loginAction } from 'store/actions';
import PropTypes from 'prop-types';

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '15926339107',
      password: '111111',
      logining: false,
      errorText: ''
    };
    this.handleMobile = this.handleMobile.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleMobile(e) {
    this.setState({
      mobile: e.target.value.trim()
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value.trim()
    });
  }
  handleLogin() {
    const { login } = this.props;
    const { mobile, password } = this.state;
    const isCheckPassed = this.checkForm();
    if (!isCheckPassed) {
      return;
    }
    this.setState({
      logining: true
    });

    login({ mobile, password })
      .then(() => {
        this.props.history.push('/app');
      })
      .catch(err => {
        this.setState({
          errorText: `登录失败,请稍后再试！`,
          logining: false
        });
      });
  }

  checkForm() {
    const { mobile, password } = this.state;

    const mobileResult = validateMobile(mobile);
    if (!mobileResult[0]) {
      this.setState({
        errorText: mobileResult[1]
      });
      return;
    } else {
      this.setState({
        errorText: ''
      });
    }

    const passwordResult = validatePassword(password);
    if (!passwordResult[0]) {
      this.setState({
        errorText: passwordResult[1]
      });
      return;
    } else {
      this.setState({
        errorText: ''
      });
    }

    return true;
  }
  render() {
    const { mobile, password, errorText, logining } = this.state;
    return (
      <div className={styles.loginContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.title}>登录SDK企业账户</div>

          <div className={styles.commonLine}>
            <div className={`${styles.commonInput}`}>
              <input
                value={mobile}
                type="text"
                placeholder="手机号"
                autoFocus
                className={styles.mobile}
                onChange={this.handleMobile}
              />
            </div>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                value={password}
                type="password"
                placeholder="密码"
                className={styles.password}
                onChange={this.handlePassword}
              />
            </div>
          </div>

          <div className={`${styles.commonLine} ${styles.errorTip}`}>
            {errorText}
          </div>

          <div className={styles.commonLine}>
            <button
              className={`${styles.commonButton}
                ${styles.accountButton}
                ${styles.loginButton}
               `}
              onClick={this.handleLogin}
            >
              {`${logining ? '登录中，请稍后...' : '立即登录'}`}
            </button>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.loginEntry}>
              没有账号？请<NavLink to="/register" className={styles.ahref}>
                注册
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginLayout.propTypes = {
  login: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    mobile: state.getIn(['user', 'mobile'])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: params => dispatch(loginAction(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginLayout);
