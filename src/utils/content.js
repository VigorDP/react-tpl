import P from 'utils/routePath.js';
import Images from 'utils/image.js';

const xinTaiMorePageConfig = {
  1: {
    title: {
      pinyin: ['yi', 'jian', 'lian'],
      hanzi: ['壹', '简', '练']
    },
    subTitle: ['淘汰洗练，撮取精要'],
    description: [
      '中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具也',
      '多多少少是在明式家具基础上发展出来，这些家具保留了明式家具娟秀的姿态，',
      '我们转载明式家具研究专家王世襄先生对明式家具的品鉴，以提高大家中式家具的审美观，',
      '以方便大家在购买家具是应该从哪些方面挑选，这里说的仅仅是款式。'
    ],
    feature: [
      {
        title: '高束腰三弯腿带托泥香几',
        img: Images.featureOne,
        description: [
          '中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具也',
          '多多少少是在明式家具基础上发展出来，这些家具保留了明式家具娟秀的姿态，',
          '我们转载明式家具研究专家王世襄先生对明式家具的品鉴，以提高大家中式家具的审美观，',
          '以方便大家在购买家具是应该从哪些方面挑选，这里说的仅仅是款式。'
        ],
        path: `${P.main_xintai}/more/1/detail/1`,
        needReverse: false
      },
      {
        title: '高束腰三弯腿带托泥香几',
        img: Images.featureOne,
        description: [
          '中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具也',
          '多多少少是在明式家具基础上发展出来，这些家具保留了明式家具娟秀的姿态，',
          '我们转载明式家具研究专家王世襄先生对明式家具的品鉴，以提高大家中式家具的审美观，',
          '以方便大家在购买家具是应该从哪些方面挑选，这里说的仅仅是款式。'
        ],
        path: `${P.main_xintai}/more/1/detail/1`,
        needReverse: true
      }
    ]
  }
};

const xinTaiMoreDetailPageConfig = {
  1: {
    shop: {
      imgs: {
        big: Images.featureOne,
        small: [Images.featureOne, Images.featureOne]
      },
      description: {
        name: '高束腰三弯腿带托泥香几',
        line1: ['编  号:', 'SS-Ji-207', '¥ 5000'],
        line2: ['规  格:', '41×38×74 cm'],
        line3: ['材  质:', Images.featureOne, Images.featureOne],
        line4: [
          '特  点:',
          `腿子上截露明，形成束腰的角柱。柱侧打槽，嵌装“绦环板”，绦环
        板锼凿海棠式鱼门洞“开光”，予人空灵轻巧的感觉。束腰下的“托
        腮”台阶式踩浅而密的线脚，与几面冰盘线脚和屋檐形相呼应。牙条
        的“壶门式轮廓”曲线很自然地与腿子相接。弯腿系用大方整料挖削
        而成，反映古人为寻美感，不惜工本的追求和因势而为...`
        ]
      }
    },
    source: {
      title: '原型来源',
      content: [
        '《残唐五代传》',
        '（清康熙刻本）',
        '“唐明宗焚香祝圣”，',
        '可见三弯腿托泥香几。'
      ],
      original: ['原作收藏：', '其原作曾在美国达拉斯', '亚洲艺术博物馆展出。'],
      img: Images.featureOne,
      showSeal: true
    },
    shopDetail: {
      title: '产品细节',
      feature: [
        {
          img: Images.featureOne,
          header: '线脚',
          desc: `中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具。`,
          reverse: false
        },
        {
          img: Images.featureOne,
          header: '线脚',
          desc: `中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具。`,
          reverse: true
        }
      ]
    },
    textureDetail: {
      title: '材质详情',
      feature: [
        {
          img: Images.featureOne,
          header: '梨花木',
          desc: `中式家具，能流传下来实物，并得到世界家具界推崇的就是明式家具，现代我国家流行的新古典主义家具。`,
          reverse: false
        }
      ]
    },
    recommend: {
      title: {
        pinyin: ['da', 'pei', 'tui', 'jian'],
        hanzi: ['搭', '配', '推', '荐']
      },
      feature: [
        {
          img: Images.featureOne,
          header: '案例名称',
          desc: ['浙江 - 杭州', '公元 • 壹伍零零年']
        },
        {
          img: Images.featureOne,
          header: '案例名称',
          desc: ['浙江 - 杭州', '公元 • 壹伍零零年']
        },
        {
          img: Images.featureOne,
          header: '案例名称',
          desc: ['浙江 - 杭州', '公元 • 壹伍零零年']
        }
      ]
    }
  }
};

export { xinTaiMorePageConfig, xinTaiMoreDetailPageConfig };
