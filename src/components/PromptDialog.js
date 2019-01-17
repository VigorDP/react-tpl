import React from 'react';
import PropTypes from 'prop-types';
import styles from './promptDialog.scss';
import { validateEmail, validateEmpty } from 'utils/checkForm';
class PromptDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.config.content || '',
      title: props.config.title || '',
      type: props.config.type || ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.updateEnterpriseInfo = this.updateEnterpriseInfo.bind(this);
  }

  handleInput(e) {
    this.setState({
      content: e.target.value.trim()
    });
  }

  updateEnterpriseInfo() {
    const { content, type } = this.state;
    const { updateEnterpriseInfo } = this.props;
    let checktResult = [true, ''];
    if (type === 'email') {
      checktResult = validateEmail(content);
    } else {
      checktResult = validateEmpty(content, type);
    }
    if (!checktResult[0]) {
      alert(checktResult[1]);
      return;
    } else {
      updateEnterpriseInfo({
        [type]: content
      });
    }
  }

  render() {
    const { closePromptDialog } = this.props;
    const { title, content } = this.state;
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
            <input
              type="text"
              value={content}
              autoFocus={true}
              onChange={this.handleInput}
            />
          </div>
          <div className={styles.button}>
            <button
              onClick={this.updateEnterpriseInfo}
              className={styles.active}
            >
              确定
            </button>
            <button onClick={closePromptDialog}>取消</button>
          </div>
        </div>
      </div>
    );
  }
}

PromptDialog.propTypes = {
  config: PropTypes.object,
  closePromptDialog: PropTypes.func,
  updateEnterpriseInfo: PropTypes.func
};

export default PromptDialog;
