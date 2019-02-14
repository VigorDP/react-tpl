import React, { PureComponent } from 'react';
import styles from './button.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { style, path } = this.props;
    return (
      <div className={styles.layout} style={style}>
        <NavLink to={path}>了解更多</NavLink>
      </div>
    );
  }
}

Button.propTypes = {
  style: PropTypes.object,
  path: PropTypes.string
};
