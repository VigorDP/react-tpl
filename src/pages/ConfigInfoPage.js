import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from 'components/Table';
import styles from 'styles/basicInfoPage.scss';

const tableTestConfig = {
  title: '测试环境',
  content: [
    {
      key: '企业 ID',
      value: '初心科技',
      canEditable: false
    },
    {
      key: '企业 Secret',
      value: '初心科技',
      canEditable: false
    },
    {
      key: '有效期至',
      value: '初心科技',
      canEditable: false
    }
  ]
};

const tableConfig = {
  title: '生产环境',
  content: [
    {
      key: '企业 ID',
      value: '初心科技',
      canEditable: false
    },
    {
      key: '企业 Secret',
      value: '初心科技',
      canEditable: false
    },
    {
      key: '有效期至',
      value: '初心科技',
      canEditable: false
    }
  ]
};

export default class Home extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Table config={tableTestConfig} />
        <div className={styles.goToDemo}>
          <a className={styles.button}>去体验 Demo</a>
          <span className={styles.tip}>
            请使用企业ID和Secret在测试环境注册账号
          </span>
        </div>
        <Table config={tableConfig} />
      </div>
    );
  }
}

Home.propTypes = {};
