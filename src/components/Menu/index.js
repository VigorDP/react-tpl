import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './MenuItem';
import styles from './Menu.scss';
export default class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    };
  }
  render() {
    const { data, selected, handleHeaderSelected } = this.props;
    const isIconMenu = !!data[0].url;
    return (
      <div
        className={`${
          isIconMenu ? styles.iconMenuContainer : styles.menuContainer
        }`}
        onClick={handleHeaderSelected}
      >
        {data.map((item, index) => (
          <Item data={item} key={index} selected={selected} />
        ))}
      </div>
    );
  }
}

Menu.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.string,
  handleHeaderSelected: PropTypes.func
};
