import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import P from 'utils/routePath';
import SubMenu from 'components/SubMenu';
import YiJinPage from 'pages/main/YiJinPage';
import XinTaiPage from 'pages/main/XinTaiPage';
import GongYiPage from 'pages/main/GongYiPage';
import CaiZhiPage from 'pages/main/CaiZhiPage';

const menuConfig = [
  { text: '意境美', path: P.main_yijin },
  { text: '形态美', path: P.main_xintai },
  { text: '工艺美', path: P.main_gongyi },
  { text: '材质美', path: P.main_caizhi }
];

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <SubMenu config={menuConfig} style={{ paddingLeft: 100 }} />
        <main>
          <Switch>
            <Route path={P.main_yijin} component={YiJinPage} />
            <Route path={P.main_xintai} component={XinTaiPage} />
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
