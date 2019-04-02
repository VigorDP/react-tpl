import React, { PureComponent } from 'react'
import styles from './seal.scss'
import Images from 'utils/image'

interface IProps {
  style?: any
}
export default class Seal extends PureComponent<IProps, any> {
  render() {
    const { style } = this.props
    return (
      <div className={styles.layout} style={style}>
        <img src={Images.smallLogo} className={styles.logo} />
      </div>
    )
  }
}
