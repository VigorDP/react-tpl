import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
export default class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    };
  }
  render() {
    const { iconMenu, data } = this.props;
    return (
      <div>
        {data.map((item, index) => (
          <Item data={item} key={index} iconMenu={iconMenu} />
        ))}
      </div>
    );
  }
}

Menu.propTypes = {
  iconMenu: PropTypes.bool,
  data: PropTypes.array
};
