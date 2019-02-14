import React, { PureComponent } from 'react';
import styles from './paragraph.scss';
import PropTypes from 'prop-types';

export default class Paragraph extends PureComponent {
  render() {
    const { style, config } = this.props;
    return (
      <div className={styles.layout} style={style}>
        {config.map((item, index) => (
          <p className={styles.paragraph} key={index} style={style}>
            {item}
          </p>
        ))}
      </div>
    );
  }
}

Paragraph.propTypes = {
  config: PropTypes.array,
  style: PropTypes.object
};
