import React, { PureComponent } from 'react';
import styles from 'styles/main/CaiZhiPage.scss';
import Images from 'utils/Image';

export default class CaiZhiPage extends PureComponent {
  render() {
    return (
      <div className={styles.mainLayout}>
        <div className={styles.swipperWrap}>1</div>
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
