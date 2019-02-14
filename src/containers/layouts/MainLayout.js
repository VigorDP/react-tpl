import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import P from 'utils/routePath';
import SubMenu from 'components/SubMenu';
import YiJinPage from 'pages/main/YiJinPage';
import XinTaiPage from 'pages/main/XinTaiPage';
import XinTaiMorePage from 'pages/main/XinTaiMorePage';
import XinTaiMoreDetailPage from 'pages/main/XinTaiMoreDetailPage';

import GongYiPage from 'pages/main/GongYiPage';
import CaiZhiPage from 'pages/main/CaiZhiPage';

const menuConfig = [
  { text: '意境美', path: P.main_yijin },
  { text: '形态美', path: P.main_xintai },
  { text: '工艺美', path: P.main_gongyi },
  { text: '材质美', path: P.main_caizhi }
];

export default class Home extends PureComponent {
  get canShowSubMenu() {
    const { pathname } = this.props.history.location;
    const showSubMenuPathArray = [
      P.main_yijin,
      P.main_xintai,
      P.main_gongyi,
      P.main_caizhi
    ];
    if (showSubMenuPathArray.includes(pathname)) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div>
        {this.canShowSubMenu && (
          <SubMenu config={menuConfig} style={{ paddingLeft: 200 }} />
        )}
        <main>
          <Switch>
            <Route path={P.main_yijin} component={YiJinPage} />
            <Route path={P.main_xintai} component={XinTaiPage} exact />
            <Route path={P.main_xintai_more} component={XinTaiMorePage} exact />
            <Route
              path={P.main_xintai_more_detail}
              component={XinTaiMoreDetailPage}
              exact
            />
            <Route path={P.main_gongyi} component={GongYiPage} />
            <Route path={P.main_caizhi} component={CaiZhiPage} />
            <Redirect to={P.main_yijin} />
          </Switch>
        </main>
      </div>
    );
  }
}

Home.propTypes = {};
