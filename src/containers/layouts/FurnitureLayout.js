import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import styles from 'styles/mainLayout.scss';
import Images from 'utils/image';
import P from 'utils/routePath';
import SubMenu from 'components/SubMenu';

const menuConfig = [
  { text: '意境美', path: P.main_caizhi },
  { text: '形态美', path: P.main_xintai },
  { text: '工艺美', path: P.main_gongyi },
  { text: '材质美', path: P.main_yijin }
];

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <SubMenu config={menuConfig} style={{ paddingLeft: 100 }} />
      </div>
    );
  }
}

Home.propTypes = {};
