import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'styles/loginLayout.scss';

class LoginLayout extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.title}>登录SDK企业账户</div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
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
            <div className={styles.commonInput}>
              <input
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
            <button
              className={`${styles.commonButton}
                ${styles.accountButton}
                ${styles.loginButton}
               ${styles.forbiddenButton}`}
            >
              立即登录
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

export default LoginLayout;
