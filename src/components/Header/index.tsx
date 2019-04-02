import React, { Component } from 'react'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import styles from './header.scss'

type ICenterMenu = {
  text: string
  path: string
}

type IRightMenu = {
  url: string
  path: string
}

interface IProps extends RouteComponentProps {
  logo: string
  centerMenu: ICenterMenu[]
  rightMenu: IRightMenu[]
  style?: any
}

export default class Header extends Component<Partial<IProps>, {}> {
  render() {
    const { logo, centerMenu = [], rightMenu = [] } = this.props
    return (
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.centerMenuContainer}>
          {centerMenu.map((item, index) => (
            <div className={styles.menuWrap} key={index}>
              <NavLink activeClassName={styles.selected} to={item.path}>
                <span>{item.text}</span>
                <span className={styles.dot} />
              </NavLink>
            </div>
          ))}
        </div>
        <div className={styles.rightMenuContainer}>
          {rightMenu.map((item, index) => (
            <NavLink activeClassName={styles.active} to={item.path} key={index}>
              <img src={item.url} className={styles.itemImage} />
            </NavLink>
          ))}
        </div>
      </div>
    )
  }
}
