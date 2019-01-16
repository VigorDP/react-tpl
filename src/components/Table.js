import React from 'react';
import PropTypes from 'prop-types';
import styles from './table.scss';
import { formatTime } from 'utils/format';
import dayjs from 'dayjs';
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
    return dayjs().isAfter(dayjs(expiredTime)) ? (
      <span style="color:red">(已过期)'</span>
    ) : (
      ''
    );
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
        <h2>{title}</h2>
        <div className={styles.outWrapper}>
          {content.map((line, index) => (
            <div className={styles.commonLine} key={index}>
              <div className={styles.left}>{line.key}</div>
              <div className={styles.middle}>
                {line.key === '注册时间' ||
                line.key === '最后登录时间' ||
                line.key === '有效期至'
                  ? `${formatTime({ time: line.value })} ${
                      line.key === '有效期至'
                        ? this.addExpiredText(line.expiredAt)
                        : ''
                    }`
                  : line.value}
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
