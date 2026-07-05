export type ThirdIndustry = {
  title: string
  points: {
    label: string
    description: string
  }[]
  video: string
}

export type ThirdToolSection = {
  title: string
  description: string[]
  cta: string
  href: string
  media: string
  reverse?: boolean
}

export type ThirdCase = {
  role: string
  audience: string
  quote: string
  video: string
}

export type ThirdShopCard = {
  title: string
  subtitle: string
  media: string
  mediaType: 'image' | 'video'
}

export const thirdNavItems = ['产品', '行业应用', '创作工具', '开放平台', '用户访谈全流程', '企业服务']

export const thirdIndustryCards: ThirdIndustry[] = [
  {
    title: '保险经纪',
    video:
      'https://cdn-static.chanxuan.com/res/upload/2026/02/26/%E4%BF%9D%E9%99%A9%E7%BB%8F%E7%BA%AA-%E6%88%90%E7%89%87.mp4',
    points: [
      { label: '内容获客', description: '让每一次触达都建立深度信任' },
      { label: '极速克隆', description: '专业形象时刻在线，尽显风采' },
      { label: '一键跟创', description: '让每波热点都成为增长机遇' },
    ],
  },
  {
    title: '教育培训',
    video:
      'https://cdn-static.chanxuan.com/res/upload/2026/02/26/%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD-%E6%88%90%E7%89%87.mp4',
    points: [
      { label: '一键成片', description: '每个人都能高效做出专业微课' },
      { label: '降本增效', description: '让每一堂微课制作成本大幅下降' },
      { label: 'AI 创作', description: '让每个知识点都全新演绎引导思维焦点' },
    ],
  },
  {
    title: '律政金融',
    video:
      'https://cdn-static.chanxuan.com/res/upload/2026/02/26/%E5%BE%8B%E6%94%BF%E9%87%91%E8%9E%8D-%E6%88%90%E7%89%87.mp4',
    points: [
      { label: '精准引爆', description: '让每一条私域流量都通向高净值' },
      { label: 'AI 赋能', description: '让每一篇产出都构筑您的专业壁垒' },
      { label: '精调定制', description: '定制更灵动细腻的数字人形象' },
    ],
  },
  {
    title: '个人 IP',
    video:
      'https://cdn-static.chanxuan.com/res/upload/2026/02/26/%E6%88%90%E7%89%87-%E6%97%A0%E8%BD%AC%E5%9C%BA.mp4',
    points: [
      { label: '矩阵克隆', description: '系统化放大个人 IP 影响力' },
      { label: 'AI 洞察', description: '让每一次创作都精准捕捉热点' },
      { label: '数字分身', description: '实现 IP 价值的无限延展与变现' },
    ],
  },
]

export const thirdTechMedia = {
  heroVideo:
    'https://cdn-static.chanxuan.com/res/upload/2026/02/26/%E6%88%90%E7%89%87-%E6%97%A0%E8%BD%AC%E5%9C%BA.mp4',
  mainVideo:
    'https://cdn-static.chanxuan.com/jx/202503/video/250b42dbf522e6df4f84f14a3c5f53fabcc8b35c/1741862704_home_video3.mp4',
  sideImage:
    'https://cdn-static.chanxuan.com/sub-module/static-file/5/5/56c5350e3e',
  accentImage:
    'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/ebfd16cc68832fc94030c959f6463dd9~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788362655&x-signature=6qRp6nmqfZvGLmTNq%2Fn3N0hxQAY%3D',
}

export const thirdShopCards: ThirdShopCard[] = [
  {
    title: '爆款带货主播',
    subtitle: '点击即用，适配多类营销场景',
    media:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/ebfd16cc68832fc94030c959f6463dd9~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788362655&x-signature=6qRp6nmqfZvGLmTNq%2Fn3N0hxQAY%3D',
    mediaType: 'image',
  },
  {
    title: '亲和讲解型数字人',
    subtitle: '支持教育、咨询、课程讲解',
    media:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/4ddb9fc73e47f1c5cf3caa5a7754258b~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788362655&x-signature=BP7CPeTx5UmAYXZ7DJhItnGyDqk%3D',
    mediaType: 'image',
  },
  {
    title: '专业顾问型数字人',
    subtitle: '适合企业官网、直播和线索转化',
    media:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/ebfd16cc68832fc94030c959f6463dd9~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788362655&x-signature=6qRp6nmqfZvGLmTNq%2Fn3N0hxQAY%3D',
    mediaType: 'image',
  },
]

export const thirdToolSections: ThirdToolSection[] = [
  {
    title: '爆款跟创',
    description: [
      '智能识别视频内容，快速完成脚本仿写。',
      '自动拆解镜头逻辑，精准还原丰富画面。',
      '一键复刻爆款视频，轻松获取海量流量。',
    ],
    cta: '去试试',
    href: 'https://www.chanjing.cc/trending',
    media: 'https://cdn-static.chanxuan.com/res/upload/2026/04/15/20260415%E5%AE%98%E7%BD%91.mp4',
  },
  {
    title: 'AI 创作灵感',
    description: [
      '潮流创作、热门内容，一键跟创。',
      '追踪热点话题，指定视频仿写。',
      '挖掘创作灵感，一键创作文案。',
    ],
    cta: '去试试',
    href: 'https://www.chanjing.cc/ai-data-home',
    media: 'https://cdn-static.chanxuan.com/res/upload/2026/02/26/222222.mp4',
    reverse: true,
  },
  {
    title: 'AI 声音设计',
    description: [
      '声如其人，万千音色，触手可及。',
      '支持声音克隆、声音设计与多语种转换。',
      '实现高准确率、超自然的文字语音生成效果。',
    ],
    cta: '去试试',
    href: 'https://www.chanjing.cc/audio/',
    media: 'https://cdn-static.chanxuan.com/res/upload/2026/02/26/111111.mp4',
  },
  {
    title: 'AI 创意生成',
    description: [
      '灵光一现，万千创意，顷刻生成。',
      '图片、视频生成大模型协同输出。',
      '满足影视、漫剧、电商及广告的高阶创作需求。',
    ],
    cta: '去试试',
    href: 'https://www.chanjing.cc/community/',
    media: 'https://cdn-static.chanxuan.com/res/upload/2026/02/26/333333.mp4',
    reverse: true,
  },
]

export const thirdCases: ThirdCase[] = [
  {
    role: '企业老板',
    audience: 'MCN机构、传媒公司、代运营公司等',
    quote:
      '作为一家以内容为核心竞争力的企业负责人，我们一直希望能提升生产效率和降低创作成本。直到使用了天外说法，视频生产效率有了质的飞跃，帮助我们更快速响应市场变化，承接更多客户需求。',
    video: 'https://cdn-static.chanxuan.com/sub-module/static-file/a/1/05d036fbaf',
  },
  {
    role: '领域专家',
    audience: '律师、医生、老师、门店店长等',
    quote:
      '打造个人 IP 最难的是持续输出内容。用天外说法数字人后，只需要定制一个形象，输入文案就能完成视频创作，明显加快了我的更新速度，也让我的影响力持续放大。',
    video: 'https://cdn-static.chanxuan.com/sub-module/static-file/a/1/05d036fbaf',
  },
  {
    role: '广告投手',
    audience: '装修、金融保险、房产汽车、教育等行业',
    quote:
      '过去找模特拍摄与后期剪辑，修改成本很高。现在我们可以根据不同广告场景快速生成多个视频进行 A/B 测试，不仅提高了广告效果，也显著降低了测试成本。',
    video: 'https://cdn-static.chanxuan.com/sub-module/static-file/a/1/05d036fbaf',
  },
  {
    role: '电商商家',
    audience: '大健康、食品、百货等行业',
    quote:
      '热点稍纵即逝，天外说法数字人帮我实时感知热门话题、生成文案并快速出片，让我能第一时间抓住流量，店铺的粉丝增长和销售转化都有明显提升。',
    video: 'https://cdn-static.chanxuan.com/sub-module/static-file/a/1/05d036fbaf',
  },
]

export const thirdTickerRows = [
  ['AI 爆款内容获客引擎', '数字人视频创作', 'PPT 转视频', '多场景一站式创作'],
  ['定制数字人', '声音克隆', '热点跟创', '图文视频生成'],
]

export const thirdFooterLinks = [
  {
    heading: '产品能力',
    items: ['数字人视频创作', 'PPT 转视频', '声音克隆', 'AI 创意生成'],
  },
  {
    heading: '行业应用',
    items: ['线索获客', 'IP 打造', '电商带货', '教育培训'],
  },
]

export const thirdFooterContact = {
  company: '天外说法 AI 爆款内容获客引擎',
  manager: '产品经理：路回',
  business: '商务合作：波波镜',
  phone: '联系电话：177 0592 8938',
  email: '联系邮箱：wanghao@limayao.com',
  address: '联系地址：厦门市软件园二期望海路14号',
  qrCodePrimary: 'https://cdn-static.chanxuan.com/sub-module/static-file/9/b/be4c36e0d1',
  qrCodeSecondary: 'https://cdn-static.chanxuan.com/sub-module/static-file/6/e/525f341aed',
}
