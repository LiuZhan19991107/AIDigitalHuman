import { useEffect } from 'react'
import { ArrowRight, ChevronRight, Search, Sparkles, Upload } from 'lucide-react'
import WorkspaceShell, { WorkspaceSectionHeader } from '@/components/workspace/WorkspaceShell'
import {
  aiTemplateCards,
  aiTemplateTabs,
  audioCards,
  audioCreateActions,
  audioFavoriteIcon,
  audioFilterGroups,
  audioPlayIcon,
  audioSortTabs,
  communityBannerImage,
  communityCards,
  communityCategories,
  communityContentTabs,
  communityEmptyIllustration,
  communityGeneratorTabs,
  communityQuickPrompts,
  inspirationCategorySections,
  inspirationBoardTabs,
  inspirationFeatureTabs,
  inspirationGuestCard,
  inspirationHotTopics,
  inspirationVideos,
  marketingFormFields,
  marketingKnowledgeBases,
  marketingKnowledgeEntries,
  marketingScopes,
  marketingUploadIcon,
  peopleCards,
  peopleFilterGroups,
  peopleSortTabs,
  videoAssetLoadingIcon,
  videoAssetFolders,
  videoAssetPrimaryTabs,
  videoAssetSecondaryTabs,
  videoAssetStatusTabs,
  workflowTools,
} from '@/pages/workspaceMenuData'

function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}

export function VideoAssetsPage() {
  usePageTitle('我的资产 - 天外说法')

  return (
    <WorkspaceShell activeNav="mine">
      <section className="workspace-panel workspace-panel--assets">
        <div className="workspace-panel__header workspace-panel__header--tight">
          <div>
            <h1 className="workspace-page-title">视频资产</h1>
          </div>
        </div>
        <div className="workspace-assets-tabs">
          {videoAssetPrimaryTabs.map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>

        <div className="workspace-assets-subtabs">
          {videoAssetSecondaryTabs.map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>

        <div className="workspace-folder-section">
          <div className="workspace-section__header">
            <div>
              <h2>文件夹</h2>
            </div>
          </div>
          <div className="workspace-folder-card">
            <span>+</span>
            <strong>新建文件夹</strong>
          </div>
        </div>

        <div className="workspace-assets-title-row">
          <h2>视频</h2>
          <div className="workspace-assets-date-range">
            <button type="button">开始时间</button>
            <span>-</span>
            <button type="button">结束时间</button>
          </div>
        </div>

        <div className="workspace-toolbar workspace-toolbar--assets">
          <div className="workspace-pill-tabs workspace-pill-tabs--asset-status">
            {videoAssetStatusTabs.map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                {item}
              </button>
            ))}
          </div>
          <div className="workspace-toolbar__filters">
            <button type="button" className="workspace-assets-warning">
              临期视频
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="workspace-management-bar">
          <span>全选（0）</span>
          <div>
            <button type="button">移动</button>
            <button type="button">下载</button>
            <button type="button">删除</button>
          </div>
        </div>

        <div className="workspace-assets-loading">
          <img src={videoAssetLoadingIcon} alt="加载中" />
        </div>
      </section>
    </WorkspaceShell>
  )
}

export function CommunityPage() {
  usePageTitle('AI创作社区 - 天外说法')

  return (
    <WorkspaceShell activeNav="community">
      <section className="workspace-community-banner">
        <img src={communityBannerImage} alt="从想法到成品 数字人生成一步到位" />
      </section>

      <section className="workspace-search-panel workspace-search-panel--community">
        <div className="workspace-search-panel__header">
          <div className="workspace-pill-tabs workspace-pill-tabs--generator">
            {communityGeneratorTabs.map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                {item}
              </button>
            ))}
          </div>
          <div className="workspace-community-deepseek">
            <span>DeepSeek驱动</span>
            <em>DeepSeek-V4</em>
          </div>
        </div>

        <div className="workspace-community-input">
          <button type="button" className="workspace-community-upload">
            <Upload size={18} />
            <span>上传</span>
          </button>
          <textarea
            className="workspace-search-panel__textarea"
            placeholder="描述数字人形象的人物细节、背景与口播姿势"
          />
        </div>

        <div className="workspace-search-panel__footer">
          <div className="workspace-search-panel__actions">
            <button type="button">模型：全能图像模型 2.0</button>
            <button type="button">9:16  2K</button>
            <button type="button">4张</button>
          </div>
          <button type="button" className="workspace-search-panel__submit">
            生成 160
          </button>
        </div>

        <div className="workspace-prompt-list">
          {communityQuickPrompts.map((item) => (
            <button key={item} type="button">
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="workspace-section workspace-section--last">
        <div className="workspace-panel__header workspace-panel__header--tight">
          <div>
            <h1 className="workspace-page-title">灵感社区</h1>
          </div>
        </div>
        <div className="workspace-community-header">
          <div className="workspace-assets-tabs">
            {communityContentTabs.map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                {item}
              </button>
            ))}
          </div>
          <div className="workspace-community-links">
            <button type="button">创作记录</button>
            <button type="button">我的社区主页</button>
          </div>
        </div>
        <div className="workspace-tags">
          {communityCategories.map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>
        <div className="workspace-toolbar">
          <div className="workspace-toolbar__search">
            <Search size={16} />
            <input placeholder="搜索素材内容" />
          </div>
          <div className="workspace-pill-tabs workspace-pill-tabs--soft">
            <button type="button" className="is-active">
              默认排序
            </button>
          </div>
        </div>
        <div className="workspace-content-grid">
          {communityCards.map((item) => (
            <article key={item.title} className="workspace-content-card workspace-content-card--community">
              <div className="workspace-content-card__media">
                <img src={item.image} alt={item.title} />
                <span className="workspace-content-card__tag">{item.category}</span>
                <div className="workspace-content-card__overlay">
                  <div>
                    <strong>{item.title}</strong>
                    <span>跟创 {item.uses} 次</span>
                  </div>
                </div>
              </div>
              <div className="workspace-content-card__body workspace-content-card__body--community">
                <div className="workspace-community-author">
                  <img src={item.avatar} alt={item.author} />
                  <p>{item.author}</p>
                </div>
                <button type="button">做同款</button>
              </div>
            </article>
          ))}
        </div>
        <div className="workspace-empty-state workspace-empty-state--community">
          <img src={communityEmptyIllustration} alt="暂无数据" />
          <p>暂无数据</p>
        </div>
      </section>
    </WorkspaceShell>
  )
}

export function PeopleLibraryPage() {
  usePageTitle('数字人库 - 天外说法')

  return (
    <WorkspaceShell activeNav="people">
      <section className="workspace-panel">
        <div className="workspace-panel__header">
          <div>
            <span className="workspace-section__eyebrow">公共数字人</span>
            <h1 className="workspace-page-title">数字人库</h1>
          </div>
          <div className="workspace-inline-actions">
            <button type="button">提数字人需求</button>
            <button type="button" className="is-primary">
              创建我的数字人
            </button>
          </div>
        </div>

        <div className="workspace-pill-tabs">
          {['公共数字人', '我的数字人'].map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>

        <div className="workspace-toolbar">
          <div className="workspace-pill-tabs workspace-pill-tabs--soft">
            {peopleSortTabs.map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                {item}
              </button>
            ))}
          </div>
          <div className="workspace-toolbar__search">
            <Search size={16} />
            <input placeholder="请输入数字人名称" />
          </div>
        </div>

        <div className="workspace-filter-grid">
          {peopleFilterGroups.map((group) => (
            <div key={group.label} className="workspace-filter-group">
              <strong>{group.label}</strong>
              <div className="workspace-tags">
                {group.options.map((item, index) => (
                  <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="workspace-avatar-grid">
          {peopleCards.map((item) => (
            <article key={item.name} className="workspace-avatar-card workspace-avatar-card--library">
              <img src={item.image} alt={`${item.name}-${item.subtitle}`} />
              <div className="workspace-avatar-card__body">
                <strong>
                  {item.name}-{item.subtitle}
                </strong>
                <span>{item.industry}</span>
                <p>{item.scene}</p>
                <button type="button">创建视频</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </WorkspaceShell>
  )
}

export function AudioLibraryPage() {
  usePageTitle('声音库 - 天外说法')

  return (
    <WorkspaceShell activeNav="audio">
      <section className="workspace-panel">
        <div className="workspace-panel__header">
          <div>
            <span className="workspace-section__eyebrow">创建声音</span>
            <h1 className="workspace-page-title">声音库</h1>
          </div>
        </div>

        <div className="workspace-stat-grid">
          {audioCreateActions.map((item) => (
            <article key={item.title} className="workspace-stat-card">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <button type="button">立即使用</button>
            </article>
          ))}
        </div>

        <div className="workspace-pill-tabs">
          {['公共声音', '我的声音'].map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>

        <div className="workspace-toolbar">
          <div className="workspace-pill-tabs workspace-pill-tabs--soft">
            {audioSortTabs.map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                {item}
              </button>
            ))}
          </div>
          <div className="workspace-toolbar__search">
            <Search size={16} />
            <input placeholder="搜索声音" />
          </div>
        </div>

        <div className="workspace-filter-grid">
          {audioFilterGroups.map((group) => (
            <div key={group.label} className="workspace-filter-group">
              <strong>{group.label}</strong>
              <div className="workspace-tags">
                {group.options.map((item, index) => (
                  <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="workspace-audio-grid">
          {audioCards.map((item) => (
            <article key={item.title} className="workspace-audio-card">
              <div className="workspace-audio-card__top">
                <div className="workspace-audio-card__play">
                  <img src={audioPlayIcon} alt="" aria-hidden="true" />
                </div>
                <div className="workspace-audio-card__main">
                  <strong>{item.title}</strong>
                  <p>{item.sample}</p>
                  <div className="workspace-audio-card__tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <button type="button" className="workspace-audio-card__favorite" aria-label={`收藏${item.title}`}>
                  <img src={audioFavoriteIcon} alt="" aria-hidden="true" />
                </button>
              </div>
              <button type="button">创作音频</button>
            </article>
          ))}
        </div>
      </section>
    </WorkspaceShell>
  )
}

export function AiTemplatePage() {
  usePageTitle('AI 模板 - 天外说法')

  return (
    <WorkspaceShell activeNav="template">
      <section className="workspace-panel">
        <div className="workspace-panel__header">
          <div>
            <span className="workspace-section__eyebrow">模板库</span>
            <h1 className="workspace-page-title">AI 模板</h1>
          </div>
        </div>
        <div className="workspace-tags">
          {aiTemplateTabs.map((item, index) => (
            <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
              {item}
            </button>
          ))}
        </div>
        <div className="workspace-content-grid">
          {aiTemplateCards.map((item) => (
            <article key={item.title} className="workspace-content-card workspace-content-card--template">
              <div className="workspace-content-card__media">
                <img src={item.image} alt={item.title} />
                <span className="workspace-content-card__duration">{item.duration}</span>
              </div>
              <div className="workspace-content-card__body">
                <h3>{item.title}</h3>
                <p>跟创 {item.uses} 次</p>
                <button type="button">做同款</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </WorkspaceShell>
  )
}

export function InspirationPage() {
  usePageTitle('创作灵感 - 天外说法')

  return (
    <WorkspaceShell activeNav="inspiration">
      <section className="workspace-panel">
        <div className="workspace-panel__header">
          <div>
            <span className="workspace-section__eyebrow">热点洞察</span>
            <h1 className="workspace-page-title">创作灵感</h1>
            <p className="workspace-page-description">追踪热点话题、指定视频仿写、挖掘创作灵感、一键创作文案。</p>
          </div>
        </div>

        <div className="workspace-inspiration-search">
          <div className="workspace-toolbar__search workspace-toolbar__search--wide">
            <Search size={16} />
            <input placeholder="请输入视频标题或抖音视频链接" />
            <button type="button">搜视频</button>
          </div>
          <div className="workspace-pill-tabs workspace-pill-tabs--soft">
            {inspirationFeatureTabs.map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <section className="workspace-section">
          <WorkspaceSectionHeader title="找热点" action="查看全部" />
          <p className="workspace-note">每小时更新全网话题的视频和互动增量，紧跟潮流创作，享受流量红利</p>
          <div className="workspace-board-tabs">
            {inspirationBoardTabs.map((item, index) => (
              <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                {item}
              </button>
            ))}
          </div>
          <div className="workspace-table">
            <div className="workspace-table__row workspace-table__row--head">
              <span>排名</span>
              <span>热点名称</span>
              <span>热点趋势变化</span>
              <span>热门视频数</span>
              <span>操作</span>
            </div>
            {inspirationHotTopics.map((item) => (
              <div key={item.rank} className="workspace-table__row">
                <span>{item.rank}</span>
                <strong>{item.topic}</strong>
                <span>{item.heat}</span>
                <span>{item.videos}</span>
                <div className="workspace-inline-actions">
                  <button type="button">查看</button>
                  <button type="button">创作文案</button>
                </div>
              </div>
            ))}
          </div>
          <div className="workspace-guest-card">
            <p>{inspirationGuestCard.title}</p>
            <button type="button">{inspirationGuestCard.button}</button>
          </div>
        </section>

        <section className="workspace-section workspace-section--last">
          <WorkspaceSectionHeader title="找灵感" action="默认排序" />
          <div className="workspace-filter-grid">
            {inspirationCategorySections.map((group) => (
              <div key={group.label} className="workspace-filter-group">
                <strong>{group.label}</strong>
                <div className="workspace-tags">
                  {group.options.map((item, index) => (
                    <button key={item} type="button" className={index === 0 ? 'is-active' : ''}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="workspace-media-list">
            {inspirationVideos.map((item) => (
              <article key={item.title} className="workspace-media-item">
                <img src={item.image} alt={item.title} />
                <div className="workspace-media-item__body">
                  <strong>{item.title}</strong>
                  <p>{item.date}</p>
                  <div className="workspace-media-item__stats">
                    <span>点赞 {item.likes}</span>
                    <span>评论 {item.comments}</span>
                    <span>转发 {item.shares}</span>
                  </div>
                </div>
                <div className="workspace-inline-actions">
                  <button type="button">播放</button>
                  <button type="button">创作文案</button>
                </div>
              </article>
            ))}
          </div>
          <div className="workspace-guest-card">
            <p>{inspirationGuestCard.title}</p>
            <button type="button">{inspirationGuestCard.button}</button>
          </div>
        </section>
      </section>
    </WorkspaceShell>
  )
}

export function MarketingWorkbenchPage() {
  usePageTitle('知识库工作台 - 天外说法')

  return (
    <WorkspaceShell activeNav="knowledge">
      <section className="workspace-builder-layout">
        <aside className="workspace-builder-sidebar">
          <strong>知识库</strong>
          <span>切换同步内容</span>
          <div className="workspace-knowledge-list">
            {marketingKnowledgeBases.map((item, index) => (
              <article key={item.title} className={`workspace-knowledge-item ${index === 0 ? 'is-active' : ''}`}>
                <strong>{item.title}</strong>
                <span>{item.category}</span>
                <em>{item.count}</em>
              </article>
            ))}
          </div>
          <button type="button">+ 新建知识库</button>
        </aside>

        <section className="workspace-builder-main">
          <div className="workspace-panel__header">
            <div>
              <span className="workspace-section__eyebrow">智能构建</span>
              <h1 className="workspace-page-title">新建知识库</h1>
              <p className="workspace-page-description">填写名称，粘贴介绍或上传文档，系统会生成可复用的业务知识。</p>
            </div>
            <button type="button" className="workspace-inline-actions__button">
              + 用历史视频内容创建
            </button>
          </div>

          <div className="workspace-tags">
            {marketingScopes.map((item) => (
              <button key={item} type="button">
                {item}
              </button>
            ))}
          </div>

          <div className="workspace-form-card">
            <div className="workspace-form-grid">
              {marketingFormFields.map((item) => (
                <label key={item.label} className={`workspace-form-field ${item.multiline ? 'is-multiline' : ''}`}>
                  <span>
                    {item.label}
                    <em>{item.helper}</em>
                  </span>
                  {item.multiline ? <textarea placeholder={item.placeholder} /> : <input placeholder={item.placeholder} />}
                </label>
              ))}
            </div>

            <div className="workspace-upload-card">
              <div className="workspace-upload-card__icon">
                <img src={marketingUploadIcon} alt="" aria-hidden="true" />
              </div>
              <strong>点击上传文件</strong>
              <p>支持 DOCX / PPTX / XLSX / CSV / TXT / MD，单个文件不超过 50MB，最多上传 3 个文件</p>
            </div>

            <div className="workspace-toolbar">
              <div className="workspace-model-field">
                <span>模型</span>
                <button type="button" className="workspace-model-select">
                  天外说法官方模型
                </button>
              </div>
              <button type="button" className="workspace-search-panel__submit">
                生成知识库
              </button>
            </div>
          </div>

          <section className="workspace-knowledge-board">
            <div className="workspace-section__header">
              <div>
                <h2>已同步知识库数据</h2>
              </div>
            </div>
            <div className="workspace-knowledge-board__grid">
              {marketingKnowledgeBases.map((item) => (
                <article key={item.title} className="workspace-knowledge-card">
                  <div className="workspace-knowledge-card__top">
                    <strong>{item.title}</strong>
                    <span>{item.category}</span>
                  </div>
                  <p>{item.summary}</p>
                  <div className="workspace-knowledge-card__meta">
                    <em>{item.count}</em>
                    <span>{item.updatedAt}</span>
                  </div>
                  <div className="workspace-knowledge-card__tags">
                    {item.tags.map((tag) => (
                      <b key={tag}>{tag}</b>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="workspace-knowledge-detail-board">
            <div className="workspace-section__header">
              <div>
                <h2>知识库明细条目</h2>
              </div>
            </div>
            <div className="workspace-knowledge-detail-list">
              {marketingKnowledgeBases.map((item) => (
                <article key={item.title} className="workspace-knowledge-detail-group">
                  <div className="workspace-knowledge-detail-group__header">
                    <strong>{item.title}</strong>
                    <span>{item.count}</span>
                  </div>
                  <div className="workspace-knowledge-detail-group__items">
                    {marketingKnowledgeEntries[item.title].map((entry) => (
                      <div key={entry.title} className="workspace-knowledge-record">
                        <div className="workspace-knowledge-record__top">
                          <strong>{entry.title}</strong>
                          <em>{entry.status}</em>
                        </div>
                        <span>{entry.type}</span>
                        <p>{entry.description}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </section>
    </WorkspaceShell>
  )
}

export function WorkflowStorePage() {
  usePageTitle('AI实验室 - 天外说法')

  return (
    <WorkspaceShell activeNav="lab">
      <section className="workspace-panel workspace-section--last">
        <div className="workspace-panel__header">
          <div>
            <span className="workspace-section__eyebrow">AI实验室</span>
            <h1 className="workspace-page-title">创作工具</h1>
          </div>
        </div>

        <div className="workspace-tool-list">
          {workflowTools.map((item) => (
            <article key={item.title} className="workspace-tool-card">
              <div className="workspace-tool-card__body">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <button type="button" className="workspace-tool-card__link">
                  进入工具
                  <ArrowRight size={16} />
                </button>
              </div>
              <img src={item.image} alt={item.title} />
            </article>
          ))}
        </div>
      </section>
    </WorkspaceShell>
  )
}
