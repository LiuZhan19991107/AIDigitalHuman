export type EmployeeRole = {
  id: string
  tabLabel: string
  heroLead: string
  title: string
  description: string
  metrics: string
  capabilities: {
    title: string
    description: string
  }[]
  assistantName: string
  assistantMessage: string
}

export type CaseStudy = {
  company: string
  title: string
  description: string
  tags: string[]
}

export type ScenarioEmployee = {
  badge: string
  title: string
  subtitle: string
  description: string
  image: string
}

export const secondNavItems = ['产品顾问', '客户案例', '业务场景']

export const employeeRoles: EmployeeRole[] = [
  {
    id: 'advisor',
    tabLabel: '产品顾问',
    heroLead: '1 分钟雇佣产品顾问',
    title: '让每一次咨询 直接变成销售线索',
    description:
      '产品顾问能分钟级学习产品资料，7x24 小时精准捕捉访客的高意向瞬间，在专业解答中无感引导用户留资。',
    metrics: '1000+ 在线员工 | 60000+ 线索获取',
    capabilities: [
      {
        title: '一个链接，搞定入职培训',
        description:
          '通过文档或链接一键导入知识，让员工自主学习，快速完成个性化培训与上线准备。',
      },
      {
        title: '专属形象定制',
        description: '自定义形象、声音与风格，打造品牌专属人设，让服务更具温度。',
      },
      {
        title: '全渠道一键集成',
        description: '一键嵌入官网或小程序，实现全场景覆盖，7x24 小时随时响应。',
      },
      {
        title: '线索实时洞察',
        description: '智能识别高意向咨询，在对话中自然收集线索并同步关键动态。',
      },
    ],
    assistantName: '天外说法 · 馨月',
    assistantMessage:
      '老板您好，我是您的专属产品顾问。雇佣我，让我立刻开始帮你对接用户吧。',
  },
  {
    id: 'operator',
    tabLabel: '内容运营',
    heroLead: '1 分钟雇佣内容运营',
    title: '批量生产爆款 全渠道自动分发',
    description:
      '内容运营能洞察全网热点完成选题，一键生成多平台爆款内容，并按计划完成自动分发。',
    metrics: '爆款方案批量生成 | 多平台托管分发',
    capabilities: [
      {
        title: '热点洞察与选题规划',
        description: '自动跟踪热门趋势，形成适配品牌定位的选题建议与内容计划。',
      },
      {
        title: '多平台内容改写',
        description: '同一主题一键生成适配图文、短视频脚本、评论区话术等多种版本。',
      },
      {
        title: '自动排期与发布',
        description: '支持内容托管分发，按照计划自动发布，减少人工协作成本。',
      },
      {
        title: '数据反馈闭环',
        description: '根据阅读、互动和转化结果反哺下一轮内容策略。',
      },
    ],
    assistantName: '天外说法 · 小悦',
    assistantMessage:
      '您好，我可以先帮您规划本周的内容选题，再自动拆分成多平台发布计划。',
  },
  {
    id: 'spokesperson',
    tabLabel: '品牌代言',
    heroLead: '1 分钟雇佣品牌代言',
    title: '打造超拟真名片 全平台鲜活在线',
    description:
      '品牌代言能成为企业专属数字分身，以统一、专业的形象承载品牌人设，无缝嵌入视频、直播等任意场景。',
    metrics: '企业代言形象定制 | 多场景覆盖',
    capabilities: [
      {
        title: '数字分身快速创建',
        description: '复刻企业代表形象与声音，建立统一的品牌表达与沟通人格。',
      },
      {
        title: '视频直播双场景适配',
        description: '适配介绍视频、直播间、官网导览、展会迎宾等多种场景。',
      },
      {
        title: '风格统一的内容表达',
        description: '以固定的语气、口径和视觉形象持续输出品牌内容。',
      },
      {
        title: '低成本持续更新',
        description: '无需反复拍摄，更新脚本即可快速完成全平台内容生产。',
      },
    ],
    assistantName: '天外说法 · 星言',
    assistantMessage:
      '您好，我可以作为品牌的专属数字代言，帮您完成视频讲解、直播接待和活动导览。',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    company: '雅识教育',
    title: '明星私教吴彦祖，口语陪练新体验',
    description:
      '行业首创明星数字员工，1:1 复刻吴彦祖形象与声线，以沉浸式陪伴教学显著提升学员开口意愿。',
    tags: ['明星形象 1:1 复刻', '全时段沉浸陪伴'],
  },
  {
    company: '东方航空',
    title: '资深客服东东，贴心服务随时在线',
    description:
      '高拟真数字员工“东东”集成于 APP 与官网，承接航班查询、改签退票等高频业务，打造智慧出行新入口。',
    tags: ['用户问题精准应答', '全场景覆盖'],
  },
  {
    company: '中商114',
    title: '厂长分身小商，官网获客新引擎',
    description:
      '数字分身 7x24 小时驻守官网，主动识别高意向访客并引导留资，让传统流量变现更简单。',
    tags: ['形象 100% 克隆', '精准捕获线索'],
  },
  {
    company: '掌通家园',
    title: '金牌导购数曦，赋能全球贸易',
    description:
      '多语言数字导购为全球客户提供商品资讯与精准推荐，有效打破语言障碍，助力商品出海。',
    tags: ['软硬一体化交互', '多语言无障碍沟通'],
  },
]

export const scenarioEmployees: ScenarioEmployee[] = [
  {
    badge: '3 年销冠专业靠谱',
    title: '汽车销售 · 张雨欣',
    subtitle: '连续 3 年试驾转化率 TOP1',
    description: '可节省 30% 电销人力，自动识别高意向试驾客户并精准跟进。',
    image:
      'https://p19-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/bc012cc84c3d577bb6c2717c732f5fd9~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788361919&x-signature=fOs4QerNIteNKPK%2FfxCtdS9NZVc%3D',
  },
  {
    badge: '高潜挖掘精准匹配',
    title: '招聘专员 · 袁宇恒',
    subtitle: '资深招聘顾问',
    description: '专注 AI 产品方向高潜人才挖掘，提升筛选效率与匹配质量。',
    image:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/a39ff09250d8e4e20fb31d3789c0f754~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788361919&x-signature=bQSJWcAcbO3Bx%2FkOZrRPaHRkbfw%3D',
  },
  {
    badge: '营销达人理财智囊',
    title: '信贷销售 · 陈思静',
    subtitle: '4 年金融营销经验',
    description: '转化率提升 35%，加微率提升 40%，擅长将咨询线索转成有效沟通。',
    image:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/bc67642e2d5b1a1dfbe8c22a37105aa8~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788361919&x-signature=YpvCdmZSTpov1BnZD4RgoGhguOE%3D',
  },
]
