import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/loginLayout.scss';
import { validateMobile, validatePassword } from 'utils/checkForm';
import { connect } from 'react-redux';
import { loginAction } from 'store/actions';
import PropTypes from 'prop-types';
import logo from 'assets/imgs/logo.png';

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: props.mobile,
      password: props.password,
      logining: false,
      errorText: ''
    };
    this.handleMobile = this.handleMobile.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  showErrorText(result) {
    this.setState({
      errorText: result[1]
    });
  }

  handleMobile(e) {
    const value = e.target.value.trim();
    this.setState({
      mobile: value
    });
    this.checkMobile(value, true);
  }

  checkMobile(mobile, hasLimit) {
    const result = validateMobile(mobile);
    if (hasLimit) {
      mobile.length >= 11 && this.showErrorText(result);
    } else {
      this.showErrorText(result);
    }
    return result[0];
  }

  handlePassword(e) {
    const value = e.target.value.trim();
    this.setState({
      password: value
    });
    this.checkPassword(value, true);
  }

  checkPassword(password, hasLimit) {
    const result = validatePassword(password);
    if (hasLimit) {
      password.length >= 6 && this.showErrorText(result);
    } else {
      this.showErrorText(result);
    }
    return result[0];
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
        const { code, message } = err.response.data;
        if (code === '40003' || code === '40004') {
          this.setState({
            errorText: message,
            logining: false
          });
        } else {
          this.setState({
            errorText: '未知错误',
            logining: false
          });
        }
      });
  }

  checkForm() {
    const { mobile, password } = this.state;
    const mobileResult = this.checkMobile(mobile);
    if (!mobileResult) {
      return false;
    }
    const passwordResult = this.checkPassword(password);
    if (!passwordResult) {
      return false;
    }
    return true;
  }

  render() {
    const { mobile, password, errorText, logining } = this.state;
    return (
      <div className={styles.loginContainer}>
        <div className={styles.headerContainer}>
          <img src={logo} alt="石墨文档" />
        </div>
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
  login: PropTypes.func,
  mobile: PropTypes.string,
  password: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    mobile: state.getIn(['userInfo', 'user']).mobile,
    password: state.getIn(['userInfo', 'user']).password
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
