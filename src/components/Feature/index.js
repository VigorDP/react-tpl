import React, { PureComponent } from 'react';
import styles from './feature.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Feature extends PureComponent {
  render() {
    const { config, style } = this.props;
    return (
      <div className={styles.layout} style={style}>
        <Tabs className={styles.tabLayout}>
          <TabList className={styles.tabList}>
            {config.map((item, index) => (
              <Tab
                key={index}
                className={styles.tab}
                selectedClassName={styles.tabActive}
              >
                <span className={styles.top}>{item.tag[0]}</span>
                <span className={styles.bottom}>{item.tag[1]}</span>
              </Tab>
            ))}
          </TabList>

          {config.map((item, index) => (
            <TabPanel
              className={styles.tabPanel}
              selectedClassName={styles.panelActive}
              key={index}
            >
              <div className={styles.left}>
                {item.tag[0].split('').map((item, index) => (
                  <div key={index} className={styles.title}>
                    {item}
                  </div>
                ))}

                <div className={styles.divider} />
                <div className={styles.sub}>{item.tag[1]}</div>
              </div>
              <img src={item.img} alt="" className={styles.middle} />
              <div className={styles.right}>
                <p>{item.description}</p>
                <NavLink to={item.path}>了解更多</NavLink>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  }
}

Feature.propTypes = {
  config: PropTypes.array,
  style: PropTypes.object
};
