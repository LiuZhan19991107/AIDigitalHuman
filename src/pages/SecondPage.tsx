import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  caseStudies,
  employeeRoles,
  scenarioEmployees,
  secondNavItems,
} from '@/pages/secondData'

export default function SecondPage() {
  const [activeRoleId, setActiveRoleId] = useState(employeeRoles[0].id)

  useEffect(() => {
    document.title = '天外说法 - 数字员工'
  }, [])

  const activeRole = useMemo(
    () => employeeRoles.find((item) => item.id === activeRoleId) ?? employeeRoles[0],
    [activeRoleId],
  )

  return (
    <div className="second-page">
      <header className="second-header">
        <div className="container second-header__inner">
          <a className="second-brand" href="#second-hero">
            <span className="second-brand__mark">
              <img src="/brand-icon.svg" alt="" aria-hidden="true" />
            </span>
            <span>天外说法</span>
          </a>
          <nav className="second-nav" aria-label="第二页面导航">
            {secondNavItems.map((item) => (
              <a key={item} href={`#${item}`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="second-header__actions">
            <Link className="second-header__link" to="/first">
              查看 first
            </Link>
            <a className="second-button second-button--primary" href="#case-studies">
              咨询我们
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="second-hero" id="second-hero">
          <div className="container second-hero__cards">
            {employeeRoles.map((item, index) => {
              const HeadingTag = index === 0 ? 'h1' : 'h2'

              return (
                <article key={item.id} className="second-hero-card">
                  <span className="second-hero-card__eyebrow">{item.heroLead}</span>
                  <HeadingTag>{item.title}</HeadingTag>
                  <p>{item.description}</p>
                  <div className="second-hero-card__footer">
                    <a className="second-button second-button--ghost" href="#employee-panel">
                      咨询我们
                    </a>
                    <span>{item.metrics}</span>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="second-panel" id="产品顾问">
          <div className="container">
            <div className="second-tabs" role="tablist" aria-label="数字员工类型">
              {employeeRoles.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === activeRole.id ? 'is-active' : ''}
                  onClick={() => setActiveRoleId(item.id)}
                >
                  {item.tabLabel}
                </button>
              ))}
            </div>

            <div className="second-panel__content" id="employee-panel">
              <div className="second-panel__left">
                <div className="second-section-title">
                  <span>{activeRole.tabLabel}</span>
                  <h2>{activeRole.title}</h2>
                  <p>{activeRole.description}</p>
                </div>
                <div className="second-capability-list">
                  {activeRole.capabilities.map((item, index) => (
                    <article
                      key={item.title}
                      className={`second-capability-card ${index === 0 ? 'is-highlighted' : ''}`}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="second-panel__right">
                <div className="second-employee-card">
                  <div className="second-employee-card__header">
                    <span className="second-employee-card__badge">{activeRole.tabLabel}</span>
                    <h3>{activeRole.assistantName}</h3>
                  </div>
                  <p>{activeRole.assistantMessage}</p>
                  <ul>
                    <li>
                      <CheckCircle2 size={18} />
                      <span>专属形象与声音可定制</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} />
                      <span>官网 / 小程序 / 直播间可接入</span>
                    </li>
                    <li>
                      <CheckCircle2 size={18} />
                      <span>识别意向并自动推进转化</span>
                    </li>
                  </ul>
                </div>

                <div className="second-hiring-card">
                  <h3>立即雇佣你的一号员工</h3>
                  <ol>
                    <li>1. 选择你需要雇佣的员工</li>
                    <li>2. Ta 的花名</li>
                    <li>3. 允许主动获客</li>
                  </ol>
                  <label className="second-form-field">
                    <span>花名</span>
                    <input type="text" placeholder="请输入 0-16 个字符" />
                  </label>
                  <button type="button" className="second-button second-button--primary">
                    立即雇佣
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="second-banner">
          <div className="container second-banner__inner">
            <div>
              <span>数字员工，让你拥有 AI 营销超能力</span>
              <h2>先人一步，数字员工助你跑赢增长！</h2>
            </div>
            <a className="second-button second-button--primary" href="#scenario-list">
              立即体验
            </a>
          </div>
        </section>

        <section className="second-case-section" id="客户案例">
          <div className="container">
            <div className="second-section-title">
              <span>客户案例</span>
              <h2>真实企业如何使用天外说法数字员工</h2>
              <p>复刻原站案例叙事结构，用四组案例卡展示品牌、客服、获客和出海场景。</p>
            </div>
            <div className="second-case-grid" id="case-studies">
              {caseStudies.map((item) => (
                <article key={item.company} className="second-case-card">
                  <span className="second-case-card__company">{item.company}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="second-tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="second-scenarios" id="业务场景">
          <div className="container">
            <div className="second-section-title">
              <span>业务场景</span>
              <h2>无限可能，数字员工赋能 N+1 种业务场景</h2>
              <p>保留原页面“岗位角色卡”表达方式，用大图卡片承接销售、招聘、信贷等典型场景。</p>
            </div>
            <div className="second-scenario-grid" id="scenario-list">
              {scenarioEmployees.map((item) => (
                <article key={item.title} className="second-scenario-card">
                  <img src={item.image} alt={item.title} />
                  <div className="second-scenario-card__content">
                    <span>{item.badge}</span>
                    <h3>{item.title}</h3>
                    <strong>{item.subtitle}</strong>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="second-cta">
          <div className="container second-cta__inner">
            <div>
              <span>今天就拥有自己的数字员工</span>
              <h2>让 Ta 7x24 小时自动为你搞定营销增长全链路</h2>
            </div>
            <div className="second-cta__actions">
              <a className="second-button second-button--primary" href="#second-hero">
                咨询我们
              </a>
              <Link className="second-button second-button--ghost" to="/first">
                返回 first
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
