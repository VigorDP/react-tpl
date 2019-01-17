import React, { PureComponent } from 'react';
import Table from 'components/Table';
import Toast from 'components/Toast';
import PromptDialog from 'components/PromptDialog';
import styles from 'styles/basicInfoPage.scss';
import { connect } from 'react-redux';
import { updateUserInfoAction, getUserInfoAction } from 'store/actions';
import PropTypes from 'prop-types';

const toastMessage = '企业信息修改成功';
class BasicInfoPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      canShowPrompt: false,
      canShowToast: false,
      promptConfig: { title: '', content: '', type: '' }
    };
    this.showPromptDialog = this.showPromptDialog.bind(this);
    this.closePromptDialog = this.closePromptDialog.bind(this);
    this.updateEnterpriseInfo = this.updateEnterpriseInfo.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
  }

  showPromptDialog(key, value) {
    const map = {
      企业名称: 'name',
      企业联系人名称: 'contact',
      企业所在行业: 'industry',
      企业联系人邮箱: 'email'
    };
    this.setState({
      canShowPrompt: true,
      promptConfig: {
        type: map[key],
        title: key,
        content: value
      }
    });
  }

  closePromptDialog() {
    this.setState({
      canShowPrompt: false
    });
  }

  updateEnterpriseInfo(params) {
    this.closePromptDialog();
    this.props
      .updateUserInfo(params)
      .then(() => {
        this.toggleToast();
        this.props.getUserInfo();
      })
      .catch(err => {});
  }

  toggleToast() {
    this.setState({
      canShowToast: !this.state.canShowToast
    });
  }

  getTableConfig(config) {
    const {
      mobile,
      name,
      industry,
      contact,
      createdAt,
      lastSignInAt,
      email
    } = config;
    const tableConfig = {
      title: '企业信息',
      content: [
        {
          key: '企业名称',
          value: name,
          canEditable: true
        },
        {
          key: '企业联系人名称',
          value: contact,
          canEditable: true
        },
        {
          key: '企业联系人电话',
          value: mobile,
          canEditable: false
        },
        {
          key: '企业联系人邮箱',
          value: email,
          canEditable: true
        },
        {
          key: '企业所在行业',
          value: industry,
          canEditable: true
        },
        {
          key: '注册时间',
          value: createdAt,
          canEditable: false
        },
        {
          key: '最后登录时间',
          value: lastSignInAt,
          canEditable: false
        }
      ]
    };
    return tableConfig;
  }

  render() {
    return (
      <div className={styles.container}>
        <Table
          config={this.getTableConfig(this.props)}
          showPromptDialog={this.showPromptDialog}
        />
        {this.state.canShowPrompt && (
          <PromptDialog
            config={this.state.promptConfig}
            closePromptDialog={this.closePromptDialog}
            updateEnterpriseInfo={this.updateEnterpriseInfo}
            successCallback={this.toggleToast}
          />
        )}
        {this.state.canShowToast && (
          <Toast content={toastMessage} hideToast={this.toggleToast} />
        )}
      </div>
    );
  }
}

BasicInfoPage.propTypes = {
  updateUserInfo: PropTypes.func,
  getUserInfo: PropTypes.func,
  mobile: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  contact: PropTypes.string,
  industry: PropTypes.string,
  createdAt: PropTypes.string,
  lastSignInAt: PropTypes.string,
  configs: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    mobile: state.getIn(['userInfo', 'user']).mobile,
    email: state.getIn(['userInfo', 'user']).email,
    name: state.getIn(['userInfo', 'user']).name,
    contact: state.getIn(['userInfo', 'user']).contact,
    industry: state.getIn(['userInfo', 'user']).industry,
    createdAt: state.getIn(['userInfo', 'user']).createdAt,
    lastSignInAt: state.getIn(['userInfo', 'user']).lastSignInAt,
    configs: state.getIn(['userInfo', 'user']).configs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUserInfo: params => dispatch(updateUserInfoAction(params)),
    getUserInfo: params => dispatch(getUserInfoAction(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfoPage);
