import React, { PureComponent } from 'react';
import styles from 'styles/mainLayout.scss';
import Images from 'utils/Image';

export default class Home extends PureComponent {
  render() {
    return (
      <div className={styles.mainLayout}>
        <div className={styles.swipper}>1</div>
        <section className={styles.yishu}>
          <div className={styles.yishuContainer}>
            <div className={styles.top}>2</div>
            <div className={styles.bottom}>
              <div className={styles.commonLine}>3</div>
              <div className={styles.commonLine}>3</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}