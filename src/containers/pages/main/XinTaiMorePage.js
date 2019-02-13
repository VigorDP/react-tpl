import React, { PureComponent } from 'react';
import styles from 'styles/main/XinTaiMorePage.scss';
import SubMenu from 'components/SubMenu';

export default class XinTaiMorePage extends PureComponent {
  render() {
    return (
      <div className={styles.mainLayout}>
        <SubMenu.Back
          title="返回形态美"
          style={{
            color: 'white',
            letterSpacing: '2px',
            alignItems: 'center',
            paddingLeft: 100
          }}
        />

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
