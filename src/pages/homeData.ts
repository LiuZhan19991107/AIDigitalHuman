export type HeroStat = {
  label: string
  value: string
}

export type FeatureItem = {
  id: string
  title: string
  description: string
  image: string
  points: string[]
}

export type FaqItem = {
  question: string
  answer: string
}

export type TestimonialItem = {
  name: string
  role: string
  avatar: string
  quote: string
}

export const navItems = ['产品能力', '常见问题', '用户评价']

export const heroStats: HeroStat[] = [
  { value: '14+', label: '多语言配音' },
  { value: '高清', label: '视频导出' },
  { value: '1 张图', label: '定制数字人' },
]

export const featureItems: FeatureItem[] = [
  {
    id: 'realistic',
    title: '真实感 AI 数字人，即刻生成',
    description:
      '在线工具可将文本快速转换为栩栩如生的 AI 口播数字人视频，拥有丰富表情、自然动作和精准唇形同步，适合视频解说、产品演示和品牌内容生产。',
    image:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/17e5ecfeb8dbda5d6cb8e38ab3d6d028~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788360925&x-signature=kcibdznZxAPw3bmWyVP4ANdNy%2Fo%3D',
    points: ['即时预览', '精准口型同步', '文本一键成片'],
  },
  {
    id: 'custom',
    title: '完全可定制的数字人形象和声音',
    description:
      '上传照片即可生成专属虚拟人形象，还能结合声音克隆或专业级 TTS 配音，保持品牌调性、服饰细节和自然口播节奏。',
    image:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/d537874a4eff3052f5a449ea74bbd571~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788360925&x-signature=QkihY71HLmqf7hf3BT7DRHxBuKY%3D',
    points: ['照片生成形象', '声音克隆', '服饰与镜头可控'],
  },
  {
    id: 'global',
    title: '专为全球营销与本地化内容打造',
    description:
      '支持中文、英语、法语、西班牙语、葡萄牙语、德语、日语、韩语等多种语言，只需一份脚本即可快速生成面向全球市场的视频内容。',
    image:
      'https://p19-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/6f99bf61ac953e8f780b512d9096fd99~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788360925&x-signature=4NQJaMTjgQQPah%2FZj9j76gaHVyo%3D',
    points: ['跨市场本地化', '适配短视频平台', '营销与客服场景通用'],
  },
]

export const faqItems: FaqItem[] = [
  {
    question: '如何创建 AI 数字人视频？',
    answer:
      '打开“AI 口播数字人”后，你可以直接选择预置形象，或上传自定义图片。输入文案内容，挑选语言和声音后，一键生成即可完成口播视频制作。',
  },
  {
    question: '我能用照片自定义数字人的形象，并添加自己的声音吗？',
    answer:
      '可以。你可以上传自定义形象照片，并附加上传语音文件或直接录制声音，系统会自动处理口型同步、情绪和语速节奏。',
  },
  {
    question: 'AI 口播数字人支持哪些语言？',
    answer:
      '目前支持中文、英语、葡萄牙语、西班牙语、法语、韩语、俄语、泰语、越南语、土耳其语、日语、德语、印尼语和意大利语等多种语言。',
  },
  {
    question: '我可以在哪些地方使用 AI 口播数字人视频？',
    answer:
      '它适用于抖音、小红书、广告投放、产品页面、商务演示、营销视频、培训课程和帮助中心等多种平台与场景。',
  },
  {
    question: '你们提供免费试用吗？适合品牌方还是个人用户？',
    answer:
      '支持免费试用积分，既适合个人创作者和初创团队，也适合大型品牌用于产品演示、视频营销、品牌宣传和客户支持内容。',
  },
]

export const testimonials: TestimonialItem[] = [
  {
    name: 'Aurora Celeste',
    role: 'Shopify 店铺运营经理',
    avatar:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/51e7e33d23cd48ea87479c535dbde072~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788360925&x-signature=V0BUh5wEHrqOlOUPyMOIZmdIjpo%3D',
    quote:
      '天外说法的 AI 口播数字人生成工具彻底改变了我们的内容制作流程。我们不再需要预订模特或摄影棚，只需选择角色、输入脚本，就能在几分钟内快速导出多语言营销视频。',
  },
  {
    name: 'Jasper Everette',
    role: 'Bay 网店管理',
    avatar:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/93d9d76f321d2c04bfd1bdb1cbbf6957~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788360925&x-signature=IVvfoUsGFPrjseSqXVkDzqMsZ5o%3D',
    quote:
      '通过文字转口播视频，我们只需修改脚本并重新生成，即可持续更新营销素材。上传照片自定义数字人、使用声音克隆进行品牌化表达，让我们的内容产能和统一性都显著提升。',
  },
  {
    name: 'Evangeline Noelle',
    role: 'Shopee 电商运营人员',
    avatar:
      'https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/401243b1f73ddf23283bb3f1b92ffffd~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788360925&x-signature=MCpFpaMSue1Qxq7psiUlIo1hkzA%3D',
    quote:
      '我们使用 AI 数字人在同一流程中快速覆盖中东和欧洲市场。它既帮助我们塑造统一的品牌代言人，又能以极低的边际成本完成多语言本地化，是团队的核心营销工具之一。',
  },
]
