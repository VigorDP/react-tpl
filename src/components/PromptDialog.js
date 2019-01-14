import React from 'react';
import PropTypes from 'prop-types';
import styles from './promptDialog.scss';

const PromptDialog = props => {
  const {
    config: { title, content },
    updateEnterpriseInfo,
    closePromptDialog
  } = props;
  return (
    <div className={styles.promptContainer}>
      <div className={styles.mask} />
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <span>{title}</span>
          <span className={styles.close} onClick={closePromptDialog}>
            X
          </span>
        </div>
        <div className={styles.content}>
          <input type="text" value={content} autoFocus={true} />
        </div>
        <div className={styles.button}>
          <button onClick={updateEnterpriseInfo} className={styles.active}>
            确定
          </button>
          <button onClick={closePromptDialog}>取消</button>
        </div>
      </div>
    </div>
  );
};

PromptDialog.propTypes = {
  config: PropTypes.object,
  closePromptDialog: PropTypes.func,
  updateEnterpriseInfo: PropTypes.func
};

export default PromptDialog;
