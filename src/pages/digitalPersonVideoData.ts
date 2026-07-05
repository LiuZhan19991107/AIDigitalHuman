export type ProductPainPoint = {
  title: string
  eyebrow: string
  problem: string
  solution: string
  metric: string
}

export type ProductMethod = {
  id: string
  label: string
  badge?: string
  title: string
  description: string
  highlights: string[]
  cta: string
}

export type ProductScenario = {
  id: string
  label: string
  title: string
  description: string
  bullets: string[]
}

export type ProductCase = {
  name: string
  industry: string
  quote: string
  metrics: {
    value: string
    label: string
  }[]
}

export const productFeatureMedia = {
  heroImage:
    'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/c067b80a27e3672cf06311e016422c46~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788364281&x-signature=Fdosz14OF7qW96mFyY4N%2F944BNo%3D',
  scenarioImage:
    'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/49b0ae0d26ea554c2a78e85e7f61936f~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788364281&x-signature=a26PP95Qp0DnJqOrZhJx2PK1wFw%3D',
  caseImages: [
    'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/ae541e2f78a6e14f07badbc8a4cf6706~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788364281&x-signature=IRT8WDnsaMGBu%2FqmYKtxpi6n5%2BA%3D',
    'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/d497a17ce00cbe00a5c5b58f0a3733e2~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788364281&x-signature=OB76qifIGbb40xd7G4hlAOBEhso%3D',
    'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/5615c8480804497f94fd9326d37aac0f~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788364281&x-signature=3RK76X4zbhIIkUHrdhr22YQgn2o%3D',
    'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/dfb5f004d5748161cef3306a77bf171f~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788364281&x-signature=0QNiI%2BFtCoJ1m8DLo94n6cIas7Y%3D',
  ],
}

export const productPainPoints: ProductPainPoint[] = [
  {
    title: '视频制作成本高昂',
    eyebrow: '常见痛点',
    metric: '成本降低 70%',
    problem:
      '传统视频制作需要专业设备、场地租赁、演员和制作团队，后期制作复杂耗时，预算经常超支。',
    solution:
      '无需昂贵设备和场地，无需专业演员和制作团队，大幅降低制作成本，同时保证专业级视频质量。',
  },
  {
    title: '制作周期长，效率低下',
    eyebrow: '效率问题',
    metric: '效率提升 300%',
    problem:
      '传统视频制作从策划到成片需要数周甚至数月时间，无法满足快速变化的市场需求和内容更新频率。',
    solution:
      '从文案到成片只需几分钟，支持批量生成和自动化工作流，及时响应市场需求变化。',
  },
  {
    title: '缺乏创意与专业表现力',
    eyebrow: '质量问题',
    metric: '内容质感升级',
    problem:
      '普通视频内容缺乏吸引力，制作团队创意有限，难以体现品牌或个人独特性，导致内容同质化严重。',
    solution:
      '提供多样化数字人形象、场景模板和创意元素，支持高度自定义，让每个视频都能展现独特品牌个性。',
  },
  {
    title: '技术门槛高，操作复杂',
    eyebrow: '技术障碍',
    metric: '零门槛上手',
    problem:
      '专业视频制作需要学习复杂软件和技能，普通用户难以快速上手，需要投入大量时间学习专业技术。',
    solution:
      '直观易用的界面设计，无需专业技术背景，一键生成高质量视频，并提供详细教程和客服支持。',
  },
]

export const productMethods: ProductMethod[] = [
  {
    id: 'blank',
    label: '选择空白模版创建',
    title: '选择空白模版创建',
    description:
      '完全自定义您的数字人视频。选择模板比例、数字人形象、输入文本或上传音频，选择背景等，打造独一无二的视频内容。',
    highlights: [
      '完全控制视频制作的每一个细节',
      '支持多种视频比例和格式',
      '丰富的数字人形象和背景选择',
    ],
    cta: '立即创建',
  },
  {
    id: 'smart',
    label: '智能成片',
    badge: 'New',
    title: '智能成片',
    description:
      '输入产品资料、脚本、网页链接或卖点信息，系统自动拆解内容结构并生成镜头、文案与数字人讲解视频。',
    highlights: ['自动分析素材内容', '快速生成完整镜头脚本', '适合新品介绍和营销视频'],
    cta: '尝试智能成片',
  },
  {
    id: 'template',
    label: '选择视频模版新建',
    title: '选择视频模版新建',
    description:
      '内置多种行业视频模版，覆盖营销、培训、讲解、直播预告等高频场景，替换文案即可快速成片。',
    highlights: ['海量精品模版可选', '适配不同内容风格', '适合快速量产标准化内容'],
    cta: '浏览模版',
  },
  {
    id: 'avatar',
    label: '选择数字人形象新建',
    title: '选择数字人形象新建',
    description:
      '从数字人形象库中选择最适合的表达角色，直接进入创作流程，快速完成讲解、带货或品牌展示视频。',
    highlights: ['支持多种人物风格', '适合品牌专属人设', '可快速建立统一出镜形象'],
    cta: '选择形象',
  },
  {
    id: 'batch',
    label: '批量生成视频',
    title: '批量生成视频',
    description:
      '一次性导入多组文案或商品信息，系统批量输出多个视频，适合矩阵账号、商品库和企业培训内容。',
    highlights: ['适配矩阵式运营', '批量处理大规模内容', '支持更高效的自动化工作流'],
    cta: '了解批量生成',
  },
  {
    id: 'ppt',
    label: '上传PPT/PDF新建',
    title: '上传 PPT / PDF 新建',
    description:
      '直接上传课件、宣讲资料或产品文档，自动拆解页面内容并生成数字人讲解视频，尤其适合培训与教育场景。',
    highlights: ['课件一键转视频', '快速生成讲解口播', '让知识内容更易传播'],
    cta: '上传文档',
  },
]

export const productScenarios: ProductScenario[] = [
  {
    id: 'marketing',
    label: '短视频营销',
    title: '短视频营销解决方案',
    description:
      '快速生成产品介绍、品牌宣传短视频，提升营销效果和用户参与度。适用于电商推广、品牌宣传、产品介绍等多种场景。',
    bullets: [
      '快速生成吸引眼球的营销视频',
      '支持多种电商平台视频规格',
      '内置营销文案和呼叫行动元素',
      '数据分析优化视频表现',
    ],
  },
  {
    id: 'training',
    label: '企业培训',
    title: '企业培训数字化方案',
    description:
      '把制度、流程、业务知识和岗位技能快速转成高质量讲解视频，统一培训标准，提升学习效率与覆盖范围。',
    bullets: [
      '支持多语言和多版本培训',
      '批量生成员工培训课程',
      '统一表达口径和知识结构',
      '降低重复录制与讲师成本',
    ],
  },
  {
    id: 'demo',
    label: '产品演示',
    title: '产品演示与售前讲解',
    description:
      '通过数字人替代重复介绍，持续输出稳定的产品说明和功能亮点，提升销售沟通效率与内容专业度。',
    bullets: [
      '适配官网、私域和展会场景',
      '快速生成版本化讲解视频',
      '支持卖点拆解与镜头引导',
      '便于销售与客服复用',
    ],
  },
  {
    id: 'social',
    label: '社交媒体',
    title: '社交媒体持续内容生产',
    description:
      '把热点内容、个人观点和专业知识快速包装成稳定输出的视频矩阵，帮助账号提升更新频率和互动表现。',
    bullets: [
      '适合口播账号和知识分享',
      '支持多账号内容矩阵运营',
      '降低单条视频制作门槛',
      '让创作者更专注内容创意',
    ],
  },
]

export const productCases: ProductCase[] = [
  {
    name: '美妆品牌电商团队',
    industry: '电商行业',
    quote:
      '使用天外说法数字人视频后，我们的产品视频制作成本降低了 70%，转化率提升 40%，客户互动增加了 65%。最重要的是，我们可以快速响应市场变化，及时推出新品推广视频。',
    metrics: [
      { value: '70%', label: '成本降低' },
      { value: '40%', label: '转化率提升' },
      { value: '65%', label: '互动增加' },
    ],
  },
  {
    name: '跨国科技公司培训部',
    industry: '企业培训行业',
    quote:
      '天外说法帮助我们统一了全球培训标准，节省了 60% 的培训成本，效率提升了 3 倍。多语言支持让国际团队都能获得一致的学习体验。',
    metrics: [
      { value: '60%', label: '成本节省' },
      { value: '3x', label: '效率提升' },
      { value: '98%', label: '员工满意度' },
    ],
  },
  {
    name: '在线教育机构',
    industry: '教育行业',
    quote:
      '通过天外说法平台，我们的课程视频制作效率提升了 300%，内容产量增加了 5 倍。学生反馈课程更生动有趣，知识吸收率也有明显提升。',
    metrics: [
      { value: '300%', label: '效率提升' },
      { value: '5x', label: '产量增加' },
      { value: '45%', label: '吸收率提高' },
    ],
  },
  {
    name: '社交媒体内容创作者',
    industry: '自媒体行业',
    quote:
      '作为个人创作者，天外说法让我能够每天发布高质量视频内容，粉丝数量在 3 个月内增长了 200%，视频互动率提高了 3 倍。现在我可以更专注于内容创意本身。',
    metrics: [
      { value: '200%', label: '粉丝增长' },
      { value: '3x', label: '互动提升' },
      { value: '7x', label: '内容产出' },
    ],
  },
]

export const productTechHighlights = [
  {
    title: '隐私保护',
    description: '数据加密处理，严格隐私政策，保障用户数据安全。',
  },
  {
    title: '自研算法',
    description: '自研高保真表情驱动算法，实现更细腻自然的数字人口播表现。',
  },
  {
    title: '高清输出',
    description: '支持 4K 超高清输出，满足品牌、培训和专业演示场景需求。',
  },
  {
    title: '高效处理',
    description: '优化算法大幅缩短处理时间，快速生成高质量视频内容。',
  },
]

export const productFaqs = [
  {
    question: '数字人视频怎么制作？需要什么条件？',
    answer:
      '制作数字人视频非常简单，您可以选择空白模版、智能成片、视频模版、数字人形象、批量生成或上传 PPT/PDF 六种方式之一。准备好文案或资料即可开始，无需专业设备或技术背景。',
  },
  {
    question: '生成一个数字人视频需要多长时间？',
    answer:
      '根据视频长度和复杂度，生成时间通常在几分钟到十几分钟之间。简单的单人讲解视频通常在 3-5 分钟内完成，复杂场景或长视频可能需要更久。',
  },
  {
    question: '数字人视频制作完成后可以修改吗？',
    answer:
      '可以。您可以重新编辑文案、替换数字人、背景、配音和布局，也可以基于已有项目快速生成不同版本，适合投放测试与内容迭代。',
  },
  {
    question: '是否需要下载软件？',
    answer:
      '不需要。页面按照 Web 平台产品方式设计，您可以直接在线完成数字人视频制作、管理和导出。',
  },
]
