import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import styles from './header.scss';

export default class Header extends PureComponent {
  render() {
    const {
      leftLogo,
      centerMenu,
      rightMenu,
      selected,
      handleHeaderSelected
    } = this.props;
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={leftLogo} className={styles.logo} />
        </div>
        <Menu
          data={centerMenu}
          selected={selected}
          handleHeaderSelected={handleHeaderSelected}
        />
        <Menu data={rightMenu} />
      </div>
    );
  }
}

Header.propTypes = {
  leftLogo: PropTypes.string,
  centerMenu: PropTypes.array,
  rightMenu: PropTypes.array,
  selected: PropTypes.string,
  handleHeaderSelected: PropTypes.func
};
