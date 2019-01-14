import React from 'react';
import PropTypes from 'prop-types';
import styles from './toast.scss';

class Toast extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.hideToast();
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }
  render() {
    const { content } = this.props;
    return <div className={styles.toastContainer}>{content}</div>;
  }
}

Toast.propTypes = {
  hideToast: PropTypes.func,
  content: PropTypes.string
};

export default Toast;
