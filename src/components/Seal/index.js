import React, { PureComponent } from 'react';
import styles from './seal.scss';
import PropTypes from 'prop-types';
import Images from 'utils/Image';

export default class Seal extends PureComponent {
  render() {
    const { style } = this.props;
    return (
      <div className={styles.layout} style={style}>
        <img src={Images.smallLogo} className={styles.logo} />
      </div>
    );
  }
}

Seal.propTypes = {
  style: PropTypes.object
};
