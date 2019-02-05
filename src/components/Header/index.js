import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './header.scss';

export default class Header extends Component {
  render() {
    const { logo, centerMenu = [], rightMenu = [] } = this.props;
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.centerMenuContainer}>
          {centerMenu.map((item, index) => (
            <div className={styles.menuWrap} key={index}>
              <NavLink activeClassName={styles.selected} to={item.path}>
                <span>{item.text}</span>
                <span className={styles.dot} />
              </NavLink>
            </div>
          ))}
        </div>
        <div className={styles.rightMenuContainer}>
          {rightMenu.map((item, index) => (
            <NavLink activeClassName={styles.active} to={item.path} key={index}>
              <img src={item.url} className={styles.itemImage} />
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.string,
  centerMenu: PropTypes.array,
  rightMenu: PropTypes.array
};
