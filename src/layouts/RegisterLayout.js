import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/loginLayout.scss';
import {
  validateMobile,
  validatePassword,
  validateRepeatPassword,
  validateVerifyCode
} from 'utils/checkForm';
import { connect } from 'react-redux';
import { registerAction } from 'store/actions';
import { sendCode } from 'api';
import PropTypes from 'prop-types';
import logo from 'assets/imgs/logo.png';

const SECONDS = 60;

class RegisterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: props.mobile,
      verifyCode: '',
      password: props.password,
      repeatPassword: props.password,
      registering: false,
      initSeconds: SECONDS, // 验证码倒计时
      errorText: ''
    };
    this._mounted = false; // 挂载标志
    this.handleMobile = this.handleMobile.bind(this);
    this.handleVerifyCode = this.handleVerifyCode.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
    this.sendVerifyCode = this.sendVerifyCode.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
    clearInterval(this.timeInterval);
    this.timeInterval = null;
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

  handleVerifyCode(e) {
    const value = e.target.value.trim();
    this.setState({
      verifyCode: value
    });
    this.checkVerifyCode(value, true);
  }

  checkVerifyCode(code, hasLimit) {
    const result = validateVerifyCode(code);
    if (hasLimit) {
      code.length >= 4 && this.showErrorText(result);
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

  handleRepeatPassword(e) {
    const value = e.target.value.trim();
    this.setState({
      repeatPassword: value
    });
    this.checkRepeatPassword(this.state.password, value, true);
  }

  checkRepeatPassword(oldValue, newValue, hasLimit) {
    const result = validateRepeatPassword(oldValue, newValue);
    if (hasLimit) {
      newValue.length >= 6 && this.showErrorText(result);
    } else {
      this.showErrorText(result);
    }
    return result[0];
  }

  showErrorText(result) {
    this.setState({
      errorText: result[1]
    });
  }

  sendVerifyCode() {
    const { mobile, initSeconds } = this.state;

    if (initSeconds >= 0 && initSeconds !== SECONDS) {
      return;
    }

    const result = this.checkMobile(mobile);
    if (!result) {
      return;
    }

    this.setState({
      initSeconds: initSeconds - 1
    });

    this.timeInterval = setInterval(() => {
      if (!this._mounted) {
        return;
      }
      const { initSeconds } = this.state;
      if (initSeconds > 0) {
        this.setState({
          initSeconds: initSeconds - 1
        });
      } else {
        this.setState({
          initSeconds: SECONDS
        });

        clearInterval(this.timeInterval);
        this.timeInterval = null;
      }
    }, 1000);

    sendCode({ mobile })
      .then(res => {})
      .catch(err => {
        this.setState({
          errorText: '发送验证码失败'
        });
      });
  }

  // 表单验证
  checkForm() {
    const { mobile, password, verifyCode, repeatPassword } = this.state;
    const mobileResult = this.checkMobile(mobile);
    if (!mobileResult) {
      return false;
    }
    const verifyCodeResult = this.checkVerifyCode(verifyCode);
    if (!verifyCodeResult) {
      return false;
    }
    const passwordResult = this.checkPassword(password);
    if (!passwordResult) {
      return false;
    }
    const repeatPasswordResult = this.checkRepeatPassword(
      password,
      repeatPassword
    );
    if (!repeatPasswordResult) {
      return false;
    }
    return true;
  }

  handleRegister() {
    const isCheckPassed = this.checkForm();
    if (!isCheckPassed) {
      return;
    }

    const { register, history } = this.props;
    const { mobile, password, verifyCode } = this.state;
    this.setState({ registering: true });

    register({ mobile, password, code: verifyCode })
      .then(() => {
        history.push('/updateUserInfo');
      })
      .catch(err => {
        const { code, message } = err.response.data;
        if (code === '40001' || code === '40002') {
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
      })
      .finally(() => {
        this.setState({
          registering: false
        });
      });
  }

  render() {
    const {
      mobile,
      password,
      initSeconds,
      repeatPassword,
      registering,
      verifyCode,
      errorText
    } = this.state;
    return (
      <div className={styles.loginContainer}>
        <div className={styles.headerContainer}>
          <img src={logo} alt="石墨文档" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title}>注册SDK企业账户</div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <label>{`+86 |`}</label>
              <input
                value={mobile}
                onChange={this.handleMobile}
                type="text"
                placeholder="手机号"
                autoFocus
                className={styles.mobile}
              />
            </div>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.verifyCodeInputWrapper}>
              <div
                className={`${styles.commonInput} ${styles.verifyCodeInput}`}
              >
                <input
                  value={verifyCode}
                  onChange={this.handleVerifyCode}
                  type="text"
                  placeholder="验证码"
                  className={styles.verifyCode}
                />
              </div>
              <button
                className={`${styles.commonButton}
                ${styles.verifyCodeButton}
               `}
                onClick={this.sendVerifyCode}
              >
                {initSeconds !== SECONDS
                  ? `${initSeconds}秒后重新发送`
                  : `发送验证码`}
              </button>
            </div>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                value={password}
                onChange={this.handlePassword}
                type="password"
                placeholder="密码"
                className={styles.password}
              />
            </div>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                value={repeatPassword}
                onChange={this.handleRepeatPassword}
                type="password"
                placeholder="确认密码"
                className={styles.repeatPassword}
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
                ${styles.registerButton}
               `}
              onClick={this.handleRegister}
            >
              {`${registering ? '正在注册,请稍后...' : '免费注册'}`}
            </button>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.loginEntry}>
              已有账号？请<NavLink to="/login" className={styles.ahref}>
                登录
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterLayout.propTypes = {
  register: PropTypes.func,
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
    register: params => dispatch(registerAction(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterLayout);
