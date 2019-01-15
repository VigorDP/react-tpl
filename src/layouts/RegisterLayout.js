import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from 'assets/imgs/logo.png';
import styles from 'styles/loginLayout.scss';
class RegisterLayout extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        {/* <div className="login">
          <img src={imgUrl('logo.png')} alt="" className="left" />
        </div> */}
        <div className={styles.contentContainer}>
          <div className={styles.title}>注册SDK企业账户</div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <label>{`+86 |`}</label>
              <input
                name="Url"
                type="text"
                placeholder="手机号"
                autoFocus
                className={styles.mobile}
              />
            </div>
            <span
              className={`${styles.mobileError}
                ${styles.errorTip}
               `}
            />
          </div>

          <div className={styles.commonLine}>
            <div className={styles.verifyCodeInputWrapper}>
              <div
                className={`${styles.commonInput} ${styles.verifyCodeInput}`}
              >
                <input
                  name="Url"
                  type="text"
                  placeholder="验证码"
                  className={styles.verifyCode}
                />
              </div>
              <button
                className={`${styles.commonButton}
                ${styles.verifyCodeButton}
                ${styles.forbiddenButton}
               `}
              >
                发送验证码
              </button>
            </div>

            <span
              className={`${styles.verifyCodeError}
                ${styles.errorTip}
               `}
            />
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                name="Url"
                type="text"
                placeholder="密码"
                className={styles.password}
              />
            </div>
            <span
              className={`${styles.passwordError}
                ${styles.errorTip}
               `}
            />
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                name="Url"
                type="text"
                placeholder="确认密码"
                className={styles.repeatPassword}
              />
            </div>
            <span
              className={`${styles.repeatError}
                ${styles.errorTip}
               `}
            />
          </div>

          <div className={styles.commonLine}>
            <button
              className={`${styles.commonButton}
                ${styles.accountButton}
                ${styles.registerButton}
               ${styles.forbiddenButton}`}
            >
              免费注册
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

export default RegisterLayout;
