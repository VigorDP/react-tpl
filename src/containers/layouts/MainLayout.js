import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import P from 'utils/routePath';
import SubMenu from 'components/SubMenu';
import tabOnePage from 'pages/main/tabOnePage';
import tabTwoPage from 'pages/main/tabTwoPage';
import tabThreePage from 'pages/main/tabThreePage';
import tabFourPage from 'pages/main/tabFourPage';

const menuConfig = [
  { text: '意境美', path: P.mainTab1 },
  { text: '形态美', path: P.mainTab2 },
  { text: '工艺美', path: P.mainTab3 },
  { text: '材质美', path: P.mainTab4 }
];

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <SubMenu config={menuConfig} style={{ paddingLeft: 100 }} />
        <main>
          <Switch>
            <Route path={P.mainTab1} component={tabOnePage} />
            <Route path={P.mainTab2} component={tabTwoPage} />
            <Route path={P.mainTab3} component={tabThreePage} />
            <Route path={P.mainTab4} component={tabFourPage} />
            <Redirect to={P.mainTab1} />
          </Switch>
        </main>
      </div>
    );
  }
}

Home.propTypes = {};
