import React, { PureComponent } from 'react';
import styles from './title.scss';
import PropTypes from 'prop-types';

export default class Title extends PureComponent {
  render() {
    const {
      config: { pinyin, hanzi }
    } = this.props;
    return (
      <div className={styles.layout}>
        <div className={`${styles.pinyin} ${styles.text}`}>
          {pinyin.map((item, index) => (
            <span
              key={index}
              style={index === pinyin.length - 2 ? { color: '#B90D24' } : {}}
            >
              {item}
            </span>
          ))}
        </div>
        <div className={`${styles.hanzi} ${styles.text}`}>
          {hanzi.map((item, index) => <span key={index}>{item}</span>)}
        </div>
      </div>
    );
  }
}

Title.propTypes = {
  config: PropTypes.object,
  style: PropTypes.object
};
