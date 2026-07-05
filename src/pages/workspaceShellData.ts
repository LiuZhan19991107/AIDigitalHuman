export type WorkspaceNavKey =
  | 'home'
  | 'mine'
  | 'community'
  | 'people'
  | 'audio'
  | 'template'
  | 'inspiration'
  | 'knowledge'
  | 'lab'
  | 'api'

export const workspaceNavItems: Array<{
  key: WorkspaceNavKey
  label: string
  href: string
}> = [
  { key: 'home', label: '首页', href: '/workspace' },
  { key: 'mine', label: '我的', href: '/my/assets/video.html' },
  { key: 'community', label: 'AI创作', href: '/community/' },
  { key: 'people', label: '数字人库', href: '/people/' },
  { key: 'audio', label: '声音库', href: '/audio/' },
  { key: 'template', label: '模板库', href: '/ai-template/' },
  { key: 'inspiration', label: '创作灵感', href: '/ai-data-home' },
  { key: 'knowledge', label: '知识库', href: '/marketing-workbench' },
  { key: 'lab', label: 'AI实验室', href: '/workflowStore/' },
  { key: 'api', label: 'API', href: '/workspace' },
]

export const workspaceBenefits = [
  '各行业数字人每日更新',
  '3分钟定制数字人分身',
  '输入文案生成任意数字人',
  '优质声音极速克隆',
  '批量生成数字人视频',
]

export const workspaceBrandLogo = '/brand-icon.svg'
export const workspaceLoginTip = '注册即得60蝉豆，可生成1分钟视频'
export const workspaceGeneratorTabBg = 'https://cdn-static.chanxuan.com/sub-module/static-file/3/d/a573fd9e79'
