import React, { PureComponent } from 'react';
import Table from 'components/Table';
import Toast from 'components/Toast';
import PromptDialog from 'components/PromptDialog';
import styles from 'styles/basicInfoPage.scss';

const tableConfig = {
  title: '企业信息',
  content: [
    {
      key: '企业名称',
      value: '初心科技',
      canEditable: true
    },
    {
      key: '企业联系人名称',
      value: '初心科技',
      canEditable: true
    },
    {
      key: '企业联系人电话',
      value: '初心科技',
      canEditable: true
    },
    {
      key: '企业所在行业',
      value: '初心科技',
      canEditable: true
    },
    {
      key: '注册时间',
      value: '初心科技',
      canEditable: false
    },
    {
      key: '最后登录时间',
      value: '初心科技',
      canEditable: false
    }
  ]
};

const toastMessage = '企业信息修改成功';

export default class Home extends PureComponent {
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

  render() {
    return (
      <div className={styles.container}>
        <Table config={tableConfig} showPromptDialog={this.showPromptDialog} />
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

Home.propTypes = {};
