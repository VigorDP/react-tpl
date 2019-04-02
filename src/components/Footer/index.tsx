import React, { PureComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import styles from './footer.scss'

type IConfig = {
  title: string
  type: string
  detail: { path: string; text: string }[] | string
}

interface IProps extends RouteComponentProps {
  config: IConfig[]
  style?: any
}

export class Footer extends PureComponent<Partial<IProps>, {}> {
  _renderTextOrImage(item: IConfig) {
    return (
      <div
        key={item.title}
        className={`${styles.column} ${item.type === 'text' && styles.column1}`}
      >
        <div className={styles.title}>{item.title}</div>
        <div className={styles.detail}>
          {item.type !== 'image' ? (
            item.detail
          ) : (
            <img src={item.detail as string} />
          )}
        </div>
      </div>
    )
  }
  _renderLinkItem(item: IConfig) {
    if (item.type !== 'link') {
      return this._renderTextOrImage(item)
    }
    return (
      <div className={`${styles.column}`} key={item.title}>
        <div className={`${styles.title}`}>{item.title}</div>
        <div className={`${styles.detail}`}>
          {(item.detail as { path: string; text: string }[]).map(
            (item, index) => (
              <div className={styles.line} key={index}>
                <Link to={item.path}>{item.text}</Link>
              </div>
            )
          )}
        </div>
      </div>
    )
  }
  render() {
    const { config } = this.props
    return (
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.top}>
            {config!.map(item => this._renderLinkItem(item))}
          </div>
          <div className={styles.bottom}>
            <span>{`尚书工坊 @ ${new Date().getFullYear()}`}</span>
            <span>邮箱：123456789@123.com / 电话 400-888-8888</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
