import React, { PureComponent } from 'react'
import styles from 'styles/main/XinTaiMorePage.scss'
import SubMenu from 'components/SubMenu'
import NavButton from 'components/NavButton'
import { xinTaiMorePageConfig as content } from 'utils/content'
import Title from 'components/Title'
import Seal from 'components/Seal'
import Paragraph from 'components/Paragraph'

export default class XinTaiMorePage extends PureComponent {
  constructor(props) {
    super(props)
    this.config = content[props.match.params.id]
  }
  config: any
  render() {
    return (
      <div className={styles.mainLayout}>
        <SubMenu.Back
          title="返回形态美"
          style={{
            color: 'white',
            letterSpacing: '2px',
            alignItems: 'center',
            paddingLeft: 100
          }}
        />

        <section className={styles.yishu}>
          <Title config={this.config.title} style={{ width: '273px' }} />
          <Paragraph config={this.config.subTitle} />
          <Seal style={{ marginTop: '40px', marginBottom: '100px' }} />
          <Paragraph config={this.config.description} />

          {this.config.feature.map((item, index) => (
            <div
              key={index}
              className={`${styles.itemLayout} ${
                item.needReverse ? styles.reverse : ''
              }`}
            >
              <img className={styles.leftPic} src={item.img} />
              <div className={styles.rightDesc}>
                <h3>{item.title}</h3>
                <Paragraph
                  config={item.description}
                  style={{ width: '537px', textAlign: 'left' }}
                />
                <NavButton path={item.path} style={{ marginTop: '20px' }} />
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
}
