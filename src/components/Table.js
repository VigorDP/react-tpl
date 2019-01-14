import React from 'react';
import PropTypes from 'prop-types';
import styles from './table.scss';
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

  render() {
    const {
      config: { title, content }
    } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <div className={styles.outWrapper}>
          {content.map((line, index) => (
            <div className={styles.commonLine} key={index}>
              <div className={styles.left}>{line.key}</div>
              <div className={styles.middle}>{line.value}</div>
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
