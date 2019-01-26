import React, { PureComponent } from 'react';
import styles from 'styles/main/tabTwoPage.scss';
import Images from 'utils/Image';
import Title from 'components/Title';
import Seal from 'components/Seal';

const titleConfig = {
  pinyin: ['ming', 'shi', 'jia', 'ju', 'shi', 'liu', 'pin'],
  hanzi: ['明', '式', '家', '具', '十', '六', '品']
};

export default class Home extends PureComponent {
  renderListItem(item, index) {
    return (
      <div key={index} className={styles.itemLayout}>
        <img src={item.img} alt="" />
        <div className={styles.seperator}>/</div>
        <div className={styles.name}>{item.name}</div>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.mainLayout}>
        <section className={styles.yishu}>
          <div className={styles.yishuContainer}>
            <Title config={titleConfig} style={{ width: '273px' }} />
            <Seal style={{ marginTop: '40px', marginBottom: '100px' }} />
            <div className={styles.bottom}>
              <p>
                中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具也
              </p>
              <p>
                多多少少是在明式家具基础上发展出来，这些家具保留了明式家具娟秀的姿态，
              </p>
              <p>
                我们转载明式家具研究专家王世襄先生对明式家具的品鉴，以提高大家中式家具的审美观，
              </p>
              <p>
                以方便大家在购买家具是应该从哪些方面挑选，这里说的仅仅是款式。
              </p>
              <p>王世襄先生提出的家具十六品是：</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
