import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';

import styles from 'styles/App.scss';
import Images from 'utils/Image';
import P from 'utils/routePath';

const centerMenu = [
  { text: '明式家具之美', path: P.main },
  { text: '家具', path: P.furniture },
  { text: '家居', path: P.house },
  { text: '服务', path: P.service },
  { text: '我们', path: P.we }
];

const rightMenu = [
  { url: Images.searchIcon, path: P.search },
  { url: Images.bookIcon, path: P.hope },
  { url: Images.accountIcon, path: P.account }
];

const footerConfig = [
  {
    type: 'link',
    title: '关于我们',
    detail: [
      {
        text: '公司介绍',
        path: '/about11'
      },
      {
        text: '企业追求',
        path: '/about12'
      }
    ]
  },
  {
    type: 'link',
    title: '购物指南',
    detail: [
      {
        text: '购物流程',
        path: '/about'
      },
      {
        text: '产品配送',
        path: '/about1'
      },
      {
        text: '售后服务',
        path: '/about2'
      }
    ]
  },
  {
    type: 'link',
    title: '商务合作',
    detail: [
      {
        text: '设计合作',
        path: '/about11'
      }
    ]
  },
  {
    type: 'image',
    title: '官方微信公众号',
    detail: Images.leftLogo
  }
];
export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <Header
            leftLogo={Images.leftLogo}
            centerMenu={centerMenu}
            rightMenu={rightMenu}
          />
        </header>

        <main className={styles.main}>
          <Switch>
            <Route path={P.main} component={Screen1} exact={true} />
            <Route path={P.furniture} component={Screen2} />
            <Route path={P.house} component={Screen3} />
            <Route path={P.service} component={Screen4} />
            <Route path={P.we} component={Screen5} />
            <Redirect to={P.main} />
          </Switch>
        </main>

        <footer className={styles.footer}>
          <Footer config={footerConfig} />
        </footer>
      </div>
    );
  }
}
