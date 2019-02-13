import React, { PureComponent } from 'react';
import styles from './subMenu.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Images from 'utils/image';

class BackMenu extends PureComponent {
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { title, style } = this.props;
    return (
      <div className={styles.subMenu}>
        <div className={styles.subMenuWrap} style={style} onClick={this.goBack}>
          <img src={Images.backIcon} className={styles.img} />
          <span className={styles.colorWhite}>{title}</span>
        </div>
      </div>
    );
  }
}

BackMenu.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object
};

export default withRouter(BackMenu);
