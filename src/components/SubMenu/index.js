import React, { PureComponent } from 'react';
import styles from './subMenu.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackMenu from './back.js';
export default class SubMenu extends PureComponent {
  static Back = BackMenu;
  render() {
    const { config, style } = this.props;
    return (
      <div className={styles.subMenu}>
        <div className={styles.subMenuWrap} style={style}>
          {config.map((item, index) => (
            <NavLink activeClassName={styles.active} to={item.path} key={index}>
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

SubMenu.propTypes = {
  config: PropTypes.array,
  style: PropTypes.object
};
