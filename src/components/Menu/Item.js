import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { iconMenu, data } = props;
  return (
    <div>
      {iconMenu ? (
        <div>
          <img src={data.url} />
        </div>
      ) : (
        <div>
          <span>{data.text}</span>
        </div>
      )}
    </div>
  );
};

Item.propTypes = {
  iconMenu: PropTypes.bool,
  data: PropTypes.object
};

export default Item;
