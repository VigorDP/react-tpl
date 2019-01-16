import React, { PureComponent } from 'react';
import Table from 'components/Table';
import styles from 'styles/basicInfoPage.scss';
import getUrlByType from 'utils/getRedirectUrl';
import { connect } from 'react-redux';
import { registerAction } from 'store/actions';
import PropTypes from 'prop-types';

class ConfigInfoPage extends PureComponent {
  getTableConfig(configs) {
    configs = configs || [{}];
    let tableTestConfig = {};
    let tableProdConfig = {};
    configs.forEach(config => {
      const { ID, secret, expireTime, stage } = config;
      if (stage === 'sandbox') {
        // 测试环境
        tableTestConfig = {
          title: '测试环境',
          content: [
            {
              key: '企业 ID',
              value: ID,
              canEditable: false
            },
            {
              key: '企业 Secret',
              value: secret,
              canEditable: false
            },
            {
              key: '有效期至',
              value: expireTime,
              canEditable: false
            }
          ]
        };
      } else if (stage === 'production') {
        // 正式环境
        tableProdConfig = {
          title: '正式环境',
          content: [
            {
              key: '企业 ID',
              value: ID,
              canEditable: false
            },
            {
              key: '企业 Secret',
              value: secret,
              canEditable: false
            },
            {
              key: '有效期至',
              value: expireTime,
              canEditable: false
            }
          ]
        };
      }
    });

    return { testConfig: tableTestConfig, prodConfig: tableProdConfig };
  }
  render() {
    const { testConfig, prodConfig } = this.getTableConfig(this.props.configs);
    const hasConfig = testConfig.title && prodConfig.title;
    if (!hasConfig) {
      return <div className={styles.empty}>暂无配置</div>;
    }
    return (
      <div className={styles.container}>
        <Table config={testConfig} />
        {testConfig.title && (
          <div className={styles.goToDemo}>
            <a className={styles.button} href={getUrlByType('demo')}>
              去体验 Demo
            </a>
            <span className={styles.tip}>
              请使用企业ID和Secret在测试环境注册账号
            </span>
          </div>
        )}
        <Table config={prodConfig} />
      </div>
    );
  }
}

ConfigInfoPage.propTypes = {
  configs: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    // 这里 user 是普通对象
    configs: state.getIn(['userInfo', 'user']).configs
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
)(ConfigInfoPage);
