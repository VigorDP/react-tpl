import React, { PureComponent } from 'react'
import styles from './subMenu.scss'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Images from 'utils/image'

interface IProps extends RouteComponentProps {
  title: string
  style: any
}
class BackMenu extends PureComponent<IProps, {}> {
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    const { title, style } = this.props
    return (
      <div className={styles.subMenu}>
        <div className={styles.subMenuWrap} style={style} onClick={this.goBack}>
          <img src={Images.backIcon} className={styles.img} />
          <span className={styles.colorWhite}>{title}</span>
        </div>
      </div>
    )
  }
}

export default withRouter(BackMenu)
