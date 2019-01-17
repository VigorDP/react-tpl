import React, { Component } from 'react';
import styles from 'styles/loginLayout.scss';
import { validateEmpty, validateEmail } from 'utils/checkForm';
import { connect } from 'react-redux';
import { updateUserInfoAction } from 'store/actions';
import PropTypes from 'prop-types';
import logo from 'assets/imgs/logo.png';

class UpdateUserInfoLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      companyOwner: '',
      companyEmail: '',
      errorText: ''
    };
    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleCompanyOwner = this.handleCompanyOwner.bind(this);
    this.handleCompanyEmail = this.handleCompanyEmail.bind(this);
    this.handleCompanyField = this.handleCompanyField.bind(this);

    this.checkForm = this.checkForm.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  showErrorText(result) {
    this.setState({
      errorText: result[1]
    });
  }

  checkCompanyInfo(value, type) {
    const result = validateEmpty(value, type);
    this.showErrorText(result);
    if (result[0]) {
      return true;
    }
  }

  handleCompanyName(e) {
    const value = e.target.value.trim();
    this.setState({
      companyName: value
    });
    this.checkCompanyInfo(value, '企业名称');
  }

  handleCompanyOwner(e) {
    const value = e.target.value.trim();
    this.setState({
      companyOwner: value
    });
    this.checkCompanyInfo(value, '企业联系人信息');
  }

  handleCompanyEmail(e) {
    const value = e.target.value.trim();
    this.setState({
      companyEmail: value
    });
    this.checkCompanyEmail(value, true);
  }

  checkCompanyEmail(value, hasLimit) {
    const result = validateEmail(value);
    if (hasLimit) {
      value.indexOf('@') !== -1 &&
        value.indexOf('.') !== -1 &&
        this.showErrorText(result);
    } else {
      this.showErrorText(result);
    }
    return result[0];
  }

  handleCompanyField(e) {
    const value = e.target.value.trim();
    this.setState({
      companyField: value
    });
  }

  handleFinish() {
    const isCheckPassed = this.checkForm();
    if (!isCheckPassed) {
      return;
    }

    const {
      companyName,
      companyOwner,
      companyEmail,
      companyField
    } = this.state;

    const { updateUserInfo, history } = this.props;

    updateUserInfo({
      name: companyName,
      contact: companyOwner,
      industry: companyField,
      email: companyEmail
    })
      .then(() => {
        history.push('/?from=');
      })
      .catch(err => {
        this.setState({
          errorText: '未知错误'
        });
      });
  }

  checkForm() {
    const { companyName, companyOwner, companyEmail } = this.state;

    const nameResult = this.checkCompanyInfo(companyName, '企业名称');

    if (!nameResult) {
      return false;
    }

    const ownerResult = this.checkCompanyInfo(companyOwner, '企业联系人姓名');
    if (!ownerResult) {
      return false;
    }

    const emailResult = this.checkCompanyEmail(companyEmail);
    if (!emailResult) {
      return false;
    }

    return true;
  }

  render() {
    const {
      companyName,
      companyOwner,
      companyEmail,
      companyField,
      errorText
    } = this.state;
    return (
      <div className={styles.loginContainer}>
        <div className={styles.headerContainer}>
          <img src={logo} alt="石墨文档" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title}>完善企业账户信息</div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                value={companyName}
                onChange={this.handleCompanyName}
                type="text"
                placeholder="企业名称"
                autoFocus
                className={styles.companyName}
              />
            </div>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                value={companyOwner}
                onChange={this.handleCompanyOwner}
                type="text"
                placeholder="企业联系人姓名"
                className={styles.companyOwner}
              />
            </div>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                value={companyEmail}
                onChange={this.handleCompanyEmail}
                type="text"
                placeholder="企业联系人邮箱"
                className={styles.companyEmail}
              />
            </div>
          </div>

          <div className={styles.commonLine}>
            <div className={styles.commonInput}>
              <input
                value={companyField}
                onChange={this.handleCompanyField}
                type="text"
                placeholder="企业所在行业(选填)"
                className={styles.companyField}
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
                ${styles.finishButton}
               `}
              onClick={this.handleFinish}
            >
              完成
            </button>
          </div>
        </div>
      </div>
    );
  }
}

UpdateUserInfoLayout.propTypes = {
  updateUserInfo: PropTypes.func
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUserInfo: params => dispatch(updateUserInfoAction(params))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UpdateUserInfoLayout);
