import React, { PureComponent } from 'react'
import styles from './button.scss'
import { NavLink, RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps {
  style: any
  path: string
}
export default class Button extends PureComponent<Partial<IProps>, {}> {
  render() {
    const { style, path } = this.props
    return (
      <div className={styles.layout} style={style}>
        <NavLink to={path!}>了解更多</NavLink>
      </div>
    )
  }
}
