import React, { PureComponent } from 'react';
import styles from 'styles/main/XinTaiPage.scss';
import Images from 'utils/image';
import Title from 'components/Title';
import Seal from 'components/Seal';
import Feature from 'components/Feature';
import Paragraph from 'components/Paragraph';

import P from 'utils/routePath';

const titleConfig = {
  pinyin: ['ming', 'shi', 'jia', 'ju', 'shi', 'liu', 'pin'],
  hanzi: ['明', '式', '家', '具', '十', '六', '品']
};

const featureConfig = [
  {
    tag: ['壹', '简练'],
    img: Images.featureOne,
    description: `
          这种塌北京匠师通称罗汉床，由于只容一人，故又有
      “独睡”之称。床用三块光素的独板做围子，只后背一块
      拼了一窄条，这是因为紫檀很难得到比此更宽的大料的缘
      故。床身无束腰，大边及抹头，线脚简单，用素冰盘沿，
      只压边线一道。腿子为四根粗大圆材，直落到地。四面施
      裹腿罗锅枨加矮老。此床从结构到装饰都采用了极为简练
      的造法，每个构件交代得干净利落，功能明确。
      `,
    path: `${P.main_xintai}/more/1`
  },
  {
    tag: ['贰', '淳朴'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['叁', '厚拙'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['肆', '凝重'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['伍', '雄伟'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['陆', '圆浑'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['柒', '沉穆'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['捌', '浓华'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['玖', '文绮'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['拾', '妍秀'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['拾壹', '劲挺'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['拾贰', '柔婉'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['拾叁', '空灵'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['拾肆', '玲珑'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['拾伍', '典雅'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  },
  {
    tag: ['拾陆', '清新'],
    img: Images.featureOne,
    description: ``,
    path: P.main
  }
];

const paragraphConfig = [
  '中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具也',
  '多多少少是在明式家具基础上发展出来，这些家具保留了明式家具娟秀的姿态，',
  '我们转载明式家具研究专家王世襄先生对明式家具的品鉴，以提高大家中式家具的审美观，',
  '以方便大家在购买家具是应该从哪些方面挑选，这里说的仅仅是款式。'
];

const lastParagraph = ['王世襄先生提出的家具十六品是：'];
export default class XinTaiPage extends PureComponent {
  render() {
    return (
      <div>
        <section>
          <div>
            <Title config={titleConfig} style={{ width: '273px' }} />
            <Seal style={{ marginTop: '40px', marginBottom: '100px' }} />
            <Paragraph config={paragraphConfig} />
            <Paragraph config={lastParagraph} style={{ margin: '50px auto' }} />
            <Feature config={featureConfig} style={{ marginBottom: '120px' }} />
          </div>
        </section>
      </div>
    );
  }
}
