import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MenuItem.scss';

const Item = props => {
  const { data, selected } = props;
  return (
    <Link className={styles.item} to={data.path}>
      {data.url ? (
        <img src={data.url} className={styles.itemImage} />
      ) : (
        <span
          className={`${
            selected === data.key ? styles.activeItemText : styles.itemText
          }`}
          data-key={data.key}
        >
          {data.text}
        </span>
      )}
    </Link>
  );
};

Item.propTypes = {
  data: PropTypes.object,
  selected: PropTypes.string
};

export default Item;
