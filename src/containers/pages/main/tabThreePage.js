import React, { PureComponent } from 'react';
import styles from 'styles/main/tabTwoPage.scss';
import Images from 'utils/Image';
import Title from 'components/Title';
import Seal from 'components/Seal';
import Paragraph from 'components/Paragraph';

import P from 'utils/routePath';

const titleConfig = {
  pinyin: ['sun', 'mao'],
  hanzi: ['榫', '卯']
};

const titleConfig2 = {
  pinyin: ['xian', 'jiao'],
  hanzi: ['线 ', '脚']
};

const paragraphConfig = [
  '榫卯(sǔn mǎo)，是古代中国建筑、家具及其它器械的主要结构方式，',
  '是在两个构件上采用凹凸部位相结合的一种连接方式。',
  '凸出部分叫榫(或叫榫头);凹进部分叫卯(或叫榫眼、榫槽)。',
  '其特点是在物件上不使用钉子，利用卯榫加固物件，体现出中国古老的文化和智慧。'
];

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <section>
          <div>
            <Title config={titleConfig} style={{ width: '100px' }} />
            <Seal style={{ marginTop: '40px', marginBottom: '100px' }} />
            <Paragraph config={paragraphConfig} />
            <Title config={titleConfig2} style={{ width: '100px' }} />
            <Seal style={{ marginTop: '40px', marginBottom: '100px' }} />
            <Paragraph config={paragraphConfig} />
          </div>
        </section>
      </div>
    );
  }
}
