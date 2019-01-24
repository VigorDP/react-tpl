import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './footer.scss';
export class Footer extends PureComponent {
  _renderTextOrImage(item) {
    return (
      <div
        key={item.title}
        className={`${styles.column} ${item.type === 'text' && styles.column1}`}
      >
        <div className={styles.title}>{item.title}</div>
        <div className={styles.detail}>
          {item.type !== 'image' ? item.detail : <img src={item.detail} />}
        </div>
      </div>
    );
  }
  _renderLinkItem(item) {
    if (item.type !== 'link') {
      return this._renderTextOrImage(item);
    }
    return (
      <div className={`${styles.column}`} key={item.title}>
        <div className={`${styles.title}`}>{item.title}</div>
        <div className={`${styles.detail}`}>
          {item.detail.map((item, index) => (
            <div className={styles.line} key={index}>
              <Link to={item.path}>{item.text}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  render() {
    const { config } = this.props;
    return (
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.top}>
            {config.map(item => this._renderLinkItem(item))}
          </div>
          <div className={styles.bottom}>
            <span>{`尚书工坊 @ ${new Date().getFullYear()}`}</span>
            <span>邮箱：123456789@123.com / 电话 400-888-8888</span>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  config: PropTypes.array
};

export default Footer;
