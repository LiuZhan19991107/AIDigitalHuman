import { useEffect } from 'react'
import { ArrowRight, Bot, Clapperboard, Compass, FolderKanban, Sparkles, WandSparkles } from 'lucide-react'
import WorkspaceShell, { WorkspaceSectionHeader } from '@/components/workspace/WorkspaceShell'
import {
  workspaceAiTemplateTabs,
  workspaceAiTemplates,
  workspaceAvatarTabs,
  workspaceAvatars,
  workspaceHeroCards,
  workspaceHotTemplates,
  workspaceHotTemplateTabs,
  workspaceIdeas,
  workspaceQuickActions,
} from '@/pages/workspaceData'

const quickActionIcons = [Sparkles, Compass, Clapperboard, Bot, FolderKanban, WandSparkles]

export default function WorkspacePage() {
  useEffect(() => {
    document.title = '天外说法 AI 工作台'
  }, [])

  return (
    <WorkspaceShell activeNav="home">
      <section className="workspace-hero">
        <div className="workspace-hero__grid">
          {workspaceHeroCards.map((item) => (
            <article key={item.title} className={`workspace-hero-card workspace-hero-card--${item.tone}`}>
              <div className="workspace-hero-card__copy">
                <span>{item.badge}</span>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button type="button">
                  {item.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="workspace-hero-card__media">
                <img src={item.image} alt={item.title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-quick-actions">
        <div className="workspace-quick-actions__grid">
          {workspaceQuickActions.map((item, index) => {
            const Icon = quickActionIcons[index]
            return (
              <article key={item.title} className="workspace-quick-action">
                <div className="workspace-quick-action__icon">
                  <Icon size={20} />
                </div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="workspace-section">
        <WorkspaceSectionHeader title="数字人库" action="进入数字人库" />
        <div className="workspace-tags">
          {workspaceAvatarTabs.map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>
        <div className="workspace-scroll-row">
          <article className="workspace-avatar-card workspace-avatar-card--custom">
            <div className="workspace-avatar-card__custom-icon">
              <Sparkles size={28} />
            </div>
            <strong>定制我的数字人</strong>
            <p>上传素材，3 分钟生成专属品牌分身。</p>
            <button type="button">立即定制</button>
          </article>

          {workspaceAvatars.map((item) => (
            <article key={item.name} className="workspace-avatar-card">
              <img src={item.image} alt={`${item.name}-${item.style}`} />
              <div className="workspace-avatar-card__body">
                <span>{item.label}</span>
                <strong>
                  {item.name} · {item.style}
                </strong>
                <p>适合品牌讲解、课程录制和产品种草内容。</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-section">
        <WorkspaceSectionHeader title="灵感推荐·一键跟创同款" eyebrow="灵感发现" action="查看更多" />
        <div className="workspace-tags">
          {['近期推荐', '数字人', '视频', '图片'].map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>
        <div className="workspace-scroll-row">
          {workspaceIdeas.map((item) => (
            <article key={item.title} className="workspace-content-card">
              <div className="workspace-content-card__media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="workspace-content-card__body">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>
                  作者 {item.author} · 跟创 {item.uses} 次
                </p>
                <button type="button">做同款</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-section">
        <WorkspaceSectionHeader title="高表现力数字人 AI模板" eyebrow="热门模板" action="更多模板" />
        <div className="workspace-tags">
          {workspaceAiTemplateTabs.map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>
        <div className="workspace-scroll-row">
          {workspaceAiTemplates.map((item) => (
            <article key={item.title} className="workspace-content-card">
              <div className="workspace-content-card__media">
                <img src={item.image} alt={item.title} />
                <span className="workspace-content-card__duration">{item.duration}</span>
              </div>
              <div className="workspace-content-card__body">
                <span>数字人模板</span>
                <h3>{item.title}</h3>
                <p>跟创 {item.uses} 次</p>
                <button type="button">做同款</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-section workspace-section--last">
        <WorkspaceSectionHeader title="爆款模板" eyebrow="视频模板" action="进入模板中心" />
        <div className="workspace-tags">
          {workspaceHotTemplateTabs.map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>
        <div className="workspace-scroll-row workspace-scroll-row--compact">
          {workspaceHotTemplates.map((item) => (
            <article key={item.title} className="workspace-template-card">
              <img src={item.image} alt={item.title} />
              <div className="workspace-template-card__body">
                <strong>{item.title}</strong>
                <button type="button">创建视频</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </WorkspaceShell>
  )
}
