import React, { Component } from 'react';
import styles from 'styles/loginLayout.scss';
import { validateEmpty, validateEmail } from 'utils/checkForm';
import { connect } from 'react-redux';
import { updateUserInfoAction } from 'store/actions';
import PropTypes from 'prop-types';

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

  handleCompanyName(e) {
    this.setState({
      companyName: e.target.value.trim()
    });
  }

  handleCompanyOwner(e) {
    this.setState({
      companyOwner: e.target.value.trim()
    });
  }

  handleCompanyEmail(e) {
    this.setState({
      companyEmail: e.target.value.trim()
    });
  }

  handleCompanyField(e) {
    this.setState({
      companyField: e.target.value.trim()
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
        history.push('/app');
      })
      .catch(err => {
        this.setState({
          errorText: '发生异常'
        });
      });
  }

  checkForm() {
    const { companyName, companyOwner, companyEmail } = this.state;

    const nameResult = validateEmpty(companyName, '企业名称');
    if (!nameResult[0]) {
      this.setState({
        errorText: nameResult[1]
      });
      return;
    } else {
      this.setState({
        errorText: ''
      });
    }

    const ownerResult = validateEmpty(companyOwner, '企业联系人姓名');
    if (!ownerResult[0]) {
      this.setState({
        errorText: ownerResult[1]
      });
      return;
    } else {
      this.setState({
        errorText: ''
      });
    }

    const emailResult = validateEmail(companyEmail);
    if (!emailResult[0]) {
      this.setState({
        errorText: emailResult[1]
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
      companyName,
      companyOwner,
      companyEmail,
      companyField,
      errorText
    } = this.state;
    return (
      <div className={styles.loginContainer}>
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

const mapStateToProps = (state, ownProps) => {
  return {
    mobile: state.getIn(['user', 'mobile']),
    name: state.getIn(['user', 'name']),
    contact: state.getIn(['user', 'contact']),
    industry: state.getIn(['user', 'industry']),
    createdAt: state.getIn(['user', 'createdAt']),
    lastSignInAt: state.getIn(['user', 'lastSignInAt']),
    config: state.getIn(['user', 'config'])
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUserInfo: params => dispatch(updateUserInfoAction(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateUserInfoLayout);
