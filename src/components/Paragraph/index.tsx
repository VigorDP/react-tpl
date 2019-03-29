import React, { PureComponent } from 'react'
import styles from './paragraph.scss'

type IProps<T> = {
  style?: any
  config: T[]
}

export default class Paragraph<T> extends PureComponent<IProps<T>, {}> {
  render() {
    const { style, config } = this.props
    return (
      <div className={styles.layout} style={style}>
        {(config as T[]).map((item, index) => (
          <p className={styles.paragraph} key={index} style={style}>
            {item}
          </p>
        ))}
      </div>
    )
  }
}
