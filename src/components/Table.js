import React from 'react';
import PropTypes from 'prop-types';
import styles from './table.scss';
import { formatTime } from 'utils/format';
import dayjs from 'dayjs';
import getUrlByType from 'utils/getRedirectUrl';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.showPromptDialog = this.showPromptDialog.bind(this);
  }

  showPromptDialog(key, value) {
    const { showPromptDialog } = this.props;
    return function() {
      showPromptDialog(key, value);
    };
  }

  addExpiredText(expiredTime) {
    return dayjs().isAfter(dayjs(expiredTime)) ? '(已过期)' : '';
  }

  render() {
    const {
      config: { title, content }
    } = this.props;

    if (!title || !content) {
      return null;
    }

    return (
      <div>
        <div className={styles.titleWrapper}>
          <h2>{title}</h2>
          {title === '测试环境' && (
            <div className={styles.goToDemo}>
              <span className={styles.tip}>
                请使用 Client id 和 Client secret 在测试环境注册账号
              </span>
              <a className={styles.button} href={getUrlByType('demo')}>
                去体验 Demo
              </a>
            </div>
          )}
        </div>
        <div className={styles.outWrapper}>
          {content.map((line, index) => (
            <div className={styles.commonLine} key={index}>
              <div className={styles.left}>{line.key}</div>
              <div className={styles.middle}>
                {line.key === '注册时间' ||
                line.key === '最后登录时间' ||
                line.key === '有效期至'
                  ? `${formatTime({ time: line.value })}`
                  : line.value}
                <span className={styles.expiredText}>
                  {line.key === '有效期至'
                    ? `${this.addExpiredText(line.value)}`
                    : ''}
                </span>
              </div>
              {line.canEditable && (
                <div
                  className={styles.right}
                  onClick={this.showPromptDialog(line.key, line.value)}
                >
                  编辑
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  config: PropTypes.object,
  showPromptDialog: PropTypes.func
};

export default Table;
