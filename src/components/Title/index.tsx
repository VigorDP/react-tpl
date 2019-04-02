import React, { PureComponent } from 'react'
import styles from './title.scss'

interface IProps {
  style?: any
  config: {
    pinyin: string[]
    hanzi: string[]
  }
}
export default class Title extends PureComponent<IProps, {}> {
  render() {
    const {
      config: { pinyin, hanzi },
      style
    } = this.props
    return (
      <div className={styles.layout}>
        <div className={styles.text} style={style}>
          {pinyin.map((item, index) => (
            <span
              key={index}
              style={index === pinyin.length - 2 ? { color: '#B90D24' } : {}}
            >
              {item}
            </span>
          ))}
        </div>
        <div className={`${styles.hanzi} ${styles.text}`} style={style}>
          {hanzi.map((item, index) => <span key={index}>{item}</span>)}
        </div>
      </div>
    )
  }
}
