import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';

export default class Header extends PureComponent {
  render() {
    const { leftLogo, centerMenu, rightMenu } = this.props;
    return (
      <div>
        <div>
          <img src={leftLogo} />
        </div>
        <Menu data={centerMenu} />
        <Menu data={rightMenu} iconMenu={true} />
      </div>
    );
  }
}

Header.propTypes = {
  leftLogo: PropTypes.string,
  centerMenu: PropTypes.array,
  rightMenu: PropTypes.array
};
