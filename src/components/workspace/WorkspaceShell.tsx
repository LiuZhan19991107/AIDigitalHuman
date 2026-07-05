import { ReactNode } from 'react'
import {
  AppWindow,
  Bot,
  BrainCircuit,
  Clapperboard,
  Compass,
  Library,
  Mic2,
  PanelLeft,
  Plus,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import {
  workspaceBrandLogo,
  workspaceLoginTip,
  workspaceNavItems,
  WorkspaceNavKey,
} from '@/pages/workspaceShellData'


const navIcons = {
  home: PanelLeft,
  mine: Library,
  community: Sparkles,
  people: Bot,
  audio: Mic2,
  template: Clapperboard,
  inspiration: Compass,
  knowledge: BrainCircuit,
  lab: WandSparkles,
  api: AppWindow,
} satisfies Record<WorkspaceNavKey, typeof PanelLeft>

type WorkspaceShellProps = {
  activeNav: WorkspaceNavKey
  children: ReactNode
}

export function WorkspaceSectionHeader({
  title,
  eyebrow,
  action,
}: {
  title: string
  eyebrow?: string
  action?: string
}) {
  return (
    <div className="workspace-section__header">
      <div>
        {eyebrow ? <span className="workspace-section__eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      {action ? (
        <button type="button" className="workspace-section__more">
          {action}
        </button>
      ) : null}
    </div>
  )
}

export default function WorkspaceShell({ activeNav, children }: WorkspaceShellProps) {
  return (
    <div className="workspace-page">
      <aside className="workspace-sidebar">
        <div className="workspace-sidebar__brand">
          <img className="workspace-sidebar__logo" src={workspaceBrandLogo} alt="天外说法" />
          <span>AI工作台</span>
        </div>

        <button type="button" className="workspace-sidebar__create">
          <Plus size={18} />
          创建视频
        </button>

        <nav className="workspace-sidebar__nav" aria-label="工作台导航">
          {workspaceNavItems.map((item) => {
            const Icon = navIcons[item.key]
            return (
              <NavLink
                key={item.key}
                className={`workspace-sidebar__link ${item.key === activeNav ? 'is-active' : ''}`}
                to={item.href}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

      </aside>

      <div className="workspace-shell">
        <header className="workspace-header">
          <div className="workspace-header__search">一步极速注册登录，用 AI 高效创作爆款内容</div>
          <div className="workspace-header__actions">
            <Link className="workspace-header__pill" to="/enterprise-service">
              企业服务
            </Link>
            <a className="workspace-header__link" href="#workspace-main">
              App
            </a>
            <a className="workspace-header__button" href="#workspace-main">
              登录 / 注册
            </a>
            <div className="workspace-header__tip">{workspaceLoginTip}</div>
          </div>
        </header>

        <main className="workspace-main" id="workspace-main">
          {children}
        </main>

        <Link className="workspace-assistant" to="/workspace">
          <Sparkles size={18} />
          <span>AI顾问</span>
        </Link>
      </div>
    </div>
  )
}
