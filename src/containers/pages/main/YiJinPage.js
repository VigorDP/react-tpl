import React, { PureComponent } from 'react';
import styles from 'styles/main/YiJinPage.scss';
import Images from 'utils/image';
import Swiper from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Title from 'components/Title';
import Seal from 'components/Seal';

const AutoPlaySwiper = autoPlay(Swiper);

const titleConfig = {
  pinyin: ['yi', 'shu', 'he', 'zuo'],
  hanzi: ['艺', '术', '合', '作']
};

const designer = [
  {
    img: Images.girl,
    name: '设计师 阿茶'
  },
  {
    img: Images.girl,
    name: '设计师 阿茶'
  },
  {
    img: Images.girl,
    name: '设计师 阿茶'
  },
  {
    img: Images.girl,
    name: '设计师 阿茶'
  },
  {
    img: Images.girl,
    name: '设计师 阿茶'
  }
];
export default class YiJinPage extends PureComponent {
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
        <AutoPlaySwiper enableMouseEvents>
          <div className={styles.slideItem} />
          <div className={styles.slideItem}>Slide 2</div>
          <div className={styles.slideItem}>Slide 3</div>
        </AutoPlaySwiper>
        <section className={styles.yishu}>
          <div className={styles.yishuContainer}>
            <Title config={titleConfig} style={{ width: '160px' }} />
            <Seal style={{ marginTop: '40px', marginBottom: '132px' }} />
            <div className={styles.bottom}>
              <div className={styles.commonLine}>
                {designer.map((item, index) =>
                  this.renderListItem(item, index)
                )}
              </div>
              <div className={styles.commonLine}>
                {designer.map((item, index) =>
                  this.renderListItem(item, index)
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
