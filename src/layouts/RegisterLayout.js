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

const SECONDS = 10;

class RegisterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '15926339107',
      verifyCode: '2222',
      password: '111111',
      repeatPassword: '111111',
      registering: false,
      initSeconds: SECONDS, // 验证码倒计时
      errorText: ''
    };
    this.handleMobile = this.handleMobile.bind(this);
    this.handleVerifyCode = this.handleVerifyCode.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
    this.sendVerifyCode = this.sendVerifyCode.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
    this.timeInterval = null;
  }

  handleMobile(e) {
    this.setState({
      mobile: e.target.value.trim()
    });
  }

  handleVerifyCode(e) {
    this.setState({
      verifyCode: e.target.value.trim()
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value.trim()
    });
  }

  handleRepeatPassword(e) {
    this.setState({
      repeatPassword: e.target.value.trim()
    });
  }

  handleRegister() {
    const isCheckPassed = this.checkForm();
    if (!isCheckPassed) {
      return;
    }

    const { register, history } = this.props;
    const { mobile, password, verifyCode } = this.state;
    this.setState({ registering: true });

    // TODO: 注册
    register({ mobile, password, code: verifyCode })
      .then(() => {
        history.push('/updateUserInfo');
      })
      .catch()
      .finally(() => {
        this.setState({
          registering: false
        });
      });
  }

  sendVerifyCode() {
    const { mobile, initSeconds } = this.state;

    if (initSeconds >= 0 && initSeconds !== SECONDS) {
      return;
    }

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

    this.setState({
      initSeconds: initSeconds - 1
    });

    this.timeInterval = setInterval(() => {
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

    // TODO: sendVerifyCode
    sendCode({ mobile })
      .then(res => {})
      .catch();
  }

  // 表单验证
  checkForm() {
    const { mobile, password, verifyCode, repeatPassword } = this.state;

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

    const verifyCodeResult = validateVerifyCode(verifyCode);
    if (!verifyCodeResult[0]) {
      this.setState({
        errorText: verifyCodeResult[1]
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

    const repeatPasswordResult = validateRepeatPassword(
      password,
      repeatPassword
    );
    if (!repeatPasswordResult[0]) {
      this.setState({
        errorText: repeatPasswordResult[1]
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
  register: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    mobile: state.getIn(['user', 'mobile'])
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
