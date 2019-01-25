import React, { PureComponent } from 'react';
import styles from 'styles/main/tabOnePage.scss';
import Images from 'utils/Image';
import Swiper from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwiper = autoPlay(Swiper);
export default class Home extends PureComponent {
  render() {
    return (
      <div className={styles.mainLayout}>
        <AutoPlaySwiper enableMouseEvents>
          <div className={styles.slideItem}>
            {/* <img src={Images.mainSlide1} alt="" /> */}
          </div>
          <div className={styles.slideItem}>Slide 2</div>
          <div className={styles.slideItem}>Slide 3</div>
        </AutoPlaySwiper>
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
