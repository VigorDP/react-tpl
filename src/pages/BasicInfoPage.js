import React, { PureComponent } from 'react';
import Table from 'components/Table';
import Toast from 'components/Toast';
import PromptDialog from 'components/PromptDialog';
import styles from 'styles/basicInfoPage.scss';
import { connect } from 'react-redux';
import { registerAction } from 'store/actions';
import PropTypes from 'prop-types';

const toastMessage = '企业信息修改成功';
class BasicInfoPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      canShowPrompt: false,
      canShowToast: false,
      promptConfig: { title: '', content: '' }
    };
    this.showPromptDialog = this.showPromptDialog.bind(this);
    this.closePromptDialog = this.closePromptDialog.bind(this);
    this.updateEnterpriseInfo = this.updateEnterpriseInfo.bind(this);
    this.toggleToast = this.toggleToast.bind(this);
  }

  componentWillReceiveProps(nextProps) {}

  showPromptDialog(key, value) {
    this.setState({
      canShowPrompt: true,
      promptConfig: {
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

  updateEnterpriseInfo() {
    // TODO: API 调用
    this.closePromptDialog();
    this.toggleToast();
  }

  toggleToast() {
    this.setState({
      canShowToast: !this.state.canShowToast
    });
  }

  getTableConfig(config) {
    const { mobile, name, industry, contact, createdAt, lastSignInAt } = config;
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
  register: PropTypes.func,
  mobile: PropTypes.string,
  name: PropTypes.string,
  contact: PropTypes.string,
  industry: PropTypes.string,
  createdAt: PropTypes.string,
  lastSignInAt: PropTypes.string,
  config: PropTypes.object
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
    register: params => dispatch(registerAction(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInfoPage);
