import React, { Component } from 'react';
import styles from 'styles/loginLayout.scss';

class UpdateEnterpriseLayout extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.title}>完善企业账户信息</div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                name="Url"
                type="text"
                placeholder="企业名称"
                autoFocus
                className={styles.companyName}
              />
            </div>
            <span
              className={`${styles.companyNameError}
                ${styles.errorTip}
               `}
            />
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                name="Url"
                type="text"
                placeholder="企业联系人姓名"
                className={styles.companyOwner}
              />
            </div>
            <span
              className={`${styles.companyOwnerError}
                ${styles.errorTip}
               `}
            />
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                name="Url"
                type="text"
                placeholder="企业所在行业(选填)"
                className={styles.companyField}
              />
            </div>
            <span className="errorTip" />
            <span
              className={`
                ${styles.errorTip}
               `}
            />
          </div>

          <div className={styles.commonLine}>
            <button
              className={`${styles.commonButton}
                ${styles.accountButton}
                ${styles.finishButton}
               ${styles.forbiddenButton}`}
            >
              完成
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEnterpriseLayout;
