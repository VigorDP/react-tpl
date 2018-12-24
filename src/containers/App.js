import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';

import Todo from './pages/Todo';

import styles from 'styles/App.scss';
import Images from 'utils/Image';

const centerMenu = [
  { text: '明式家具之美', key: 'home', path: '/' },
  { text: '家具', key: 'home1', path: '/path2' },
  { text: '家居', key: 'home2', path: '/path3' },
  { text: '服务', key: 'home3', path: '/path4' },
  { text: '我们', key: 'home4', path: '/path5' }
];

const rightMenu = [
  { url: Images.leftLogo, path: '/path2' },
  { url: Images.leftLogo, path: '/path2' },
  { url: Images.leftLogo, path: '/path2' }
];

const footerConfig = [
  {
    type: 'text',
    title: '关于',
    detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    type: 'link',
    title: '链接',
    detail: [
      {
        text: '关于我们',
        path: '/about'
      },
      {
        text: '关于我们',
        path: '/about1'
      },
      {
        text: '关于我们',
        path: '/about2'
      },
      {
        text: '关于我们',
        path: '/about3'
      }
    ]
  },
  {
    type: 'link',
    title: '友情链接',
    detail: [
      {
        text: '新华网',
        path: '/about11'
      },
      {
        text: '人民网',
        path: '/about12'
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
  constructor(props) {
    super(props);
    this.state = {
      currenActive: 'home'
    };
  }
  _handleHeaderSelected = event => {
    const selected = event.target.getAttribute('data-key');
    this.setState({
      currenActive: selected
    });
  };
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.header}>
          <Header
            leftLogo={Images.leftLogo}
            centerMenu={centerMenu}
            rightMenu={rightMenu}
            selected={this.state.currenActive}
            handleHeaderSelected={this._handleHeaderSelected}
          />
        </div>
        <div className={styles.content}>
          <Switch>
            <Route path="/" component={Screen1} exact={true} />
            <Route path="/path2" component={Screen2} exact={true} />
            <Route path="/path3" component={Screen3} exact={true} />
            <Route path="/path4" component={Screen4} exact={true} />
            <Route path="/path5" component={Screen5} exact={true} />
            <Redirect to="/" />
          </Switch>
        </div>
        <div className={styles.footer}>
          <Footer config={footerConfig} />
        </div>
      </div>
    );
  }
}
