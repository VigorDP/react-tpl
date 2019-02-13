import P from 'utils/routePath.js';
import Images from 'utils/image.js';

const xinTaiMorePageConfig = {
  1: {
    title: {
      pinyin: ['yi', 'jian', 'lian'],
      hanzi: ['壹', '简', '练']
    },
    subTitle: '淘汰洗练，撮取精要',
    description: `
      中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具也
      多多少少是在明式家具基础上发展出来，这些家具保留了明式家具娟秀的姿态，
      我们转载明式家具研究专家王世襄先生对明式家具的品鉴，以提高大家中式家具的审美观，
      以方便大家在购买家具是应该从哪些方面挑选，这里说的仅仅是款式。
    `,
    feature: [
      {
        title: '高束腰三弯腿带托泥香几',
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
        path: `${P.main_xintai}/more/1`,
        needReverse: false
      },
      {
        title: '高束腰三弯腿带托泥香几',
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
        path: `${P.main_xintai}/more/1`,
        needReverse: true
      }
    ]
  }
};

export default xinTaiPageConfig;
