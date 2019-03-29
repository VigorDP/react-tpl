import React, { PureComponent } from 'react'
import styles from './subMenu.scss'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import BackMenu from './back.js'

interface IProps {
  config: { text: string; path: string }[]
  style: object
}

export default class SubMenu extends PureComponent<IProps, {}> {
  static Back = BackMenu
  render() {
    const { config, style } = this.props
    return (
      <div className={styles.subMenu}>
        <div className={styles.subMenuWrap} style={style}>
          {config.map((item, index) => (
            <NavLink activeClassName={styles.active} to={item.path} key={index}>
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
    )
  }
}
