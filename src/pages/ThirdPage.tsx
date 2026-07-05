import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  thirdCases,
  thirdFooterContact,
  thirdFooterLinks,
  thirdIndustryCards,
  thirdNavItems,
  thirdShopCards,
  thirdTechMedia,
  thirdTickerRows,
  thirdToolSections,
} from '@/pages/thirdData'

export default function ThirdPage() {
  const [activeCaseRole, setActiveCaseRole] = useState(thirdCases[0].role)

  useEffect(() => {
    document.title = '做内容获客，用天外说法'
  }, [])

  const activeCase = useMemo(
    () => thirdCases.find((item) => item.role === activeCaseRole) ?? thirdCases[0],
    [activeCaseRole],
  )

  return (
    <div className="third-page">
      <header className="third-header">
        <div className="third-container third-header__inner">
          <a className="third-brand" href="#third-hero" aria-label="天外说法首页">
            <span className="third-brand__badge">
              <img src="/brand-icon.svg" alt="" aria-hidden="true" />
            </span>
            <span>天外说法</span>
          </a>

          <nav className="third-nav" aria-label="第三页面导航">
            {thirdNavItems.map((item) => (
              item === '产品' ? (
                <Link key={item} to="/features/digital-person-video.html">
                  {item}
                </Link>
              ) : item === '用户访谈全流程' ? (
                <Link key={item} to="/pricing">
                  {item}
                </Link>
              ) : item === '企业服务' ? (
                <Link key={item} to="/enterprise-service">
                  {item}
                </Link>
              ) : (
                <a key={item} href="#third-industries">
                  {item}
                </a>
              )
            ))}
          </nav>

          <div className="third-header__actions">
            <a className="third-header__link" href="https://www.chanjing.cc/home/" target="_blank" rel="noreferrer">
              App
            </a>
            <Link className="third-header__link" to="/workspace">
              工作台
            </Link>
            <a className="third-header__button" href="https://www.chanjing.cc/home/" target="_blank" rel="noreferrer">
              登录 / 注册
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="third-hero" id="third-hero">
          <div className="third-container">
            <div className="third-hero__media">
              <video
                className="third-video"
                autoPlay
                muted
                loop
                playsInline
                src={thirdTechMedia.heroVideo}
              />
              <div className="third-hero__overlay">
                <span>AI驱动的爆款内容获客引擎</span>
                <h1>做内容获客，用天外说法</h1>
                <a
                  className="third-pill-button third-pill-button--light"
                  href="https://www.chanjing.cc/home/"
                  target="_blank"
                  rel="noreferrer"
                >
                  免费开始创作
                  <ArrowRight size={18} />
                </a>
                <p>支持脚本、PPT、产品资料、知识库到视频的一站式创作</p>
              </div>
            </div>
          </div>
        </section>

        <section className="third-industries" id="third-industries">
          <div className="third-container third-industry-grid">
            {thirdIndustryCards.map((item) => (
              <article key={item.title} className="third-industry-card">
                <div className="third-industry-card__video">
                  <video className="third-video" autoPlay muted loop playsInline src={item.video} />
                </div>
                <div className="third-industry-card__body">
                  <h2>{item.title}</h2>
                  <div className="third-industry-card__points">
                    {item.points.map((point) => (
                      <div key={point.label} className="third-industry-point">
                        <strong>{point.label}</strong>
                        <span>{point.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="third-tech">
          <div className="third-container third-tech__header">
            <div>
              <span className="third-kicker">强大的定制数字人技术</span>
              <h2>最快1分钟，即可打造你的数字分身</h2>
            </div>
            <a
              className="third-pill-button third-pill-button--dark"
              href="https://www.chanjing.cc/custom-digital-human/"
              target="_blank"
              rel="noreferrer"
            >
              免费定制
            </a>
          </div>

          <div className="third-container third-tech__grid">
            <div className="third-tech__primary">
              <video className="third-video" autoPlay muted loop playsInline src={thirdTechMedia.mainVideo} />
            </div>
            <div className="third-tech__side">
              <img src={thirdTechMedia.sideImage} alt="定制数字人技术展示" />
              <img src={thirdTechMedia.accentImage} alt="数字人形象展示" />
            </div>
          </div>
        </section>

        <section className="third-shop">
          <div className="third-container third-shop__grid">
            <div className="third-shop__cards" aria-label="IP 形象商店卡片">
              {thirdShopCards.map((item) => (
                <article key={item.title} className="third-shop-card">
                  {item.mediaType === 'video' ? (
                    <video className="third-video" autoPlay muted loop playsInline src={item.media} />
                  ) : (
                    <img src={item.media} alt={item.title} />
                  )}
                  <div className="third-shop-card__caption">
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="third-shop__content">
              <span className="third-kicker">精选IP形象商店</span>
              <h2>业内爆款 IP 形象点击即用</h2>
              <p>把真人感、专业感和转化感都做成现成可用的数字人模版，适配带货、咨询、课程讲解与品牌传播场景。</p>
              <a
                className="third-pill-button third-pill-button--dark"
                href="https://www.chanjing.cc/talent/"
                target="_blank"
                rel="noreferrer"
              >
                去看看
              </a>
            </div>
          </div>
        </section>

        <section className="third-tools" id="third-tools">
          <div className="third-container third-tools__list">
            {thirdToolSections.map((item) => (
              <article
                key={item.title}
                className={`third-tool-card ${item.reverse ? 'third-tool-card--reverse' : ''}`}
              >
                <div className="third-tool-card__content">
                  <span className="third-kicker">{item.title}</span>
                  <h2>{item.title}</h2>
                  <div className="third-tool-card__descriptions">
                    {item.description.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <a
                    className="third-pill-button third-pill-button--dark"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.cta}
                  </a>
                </div>
                <div className="third-tool-card__media">
                  <video className="third-video" autoPlay muted loop playsInline src={item.media} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="third-cases">
          <div className="third-container">
            <div className="third-ticker" aria-hidden="true">
              {thirdTickerRows.map((row, index) => (
                <div key={row.join('-')} className={`third-ticker__row third-ticker__row--${index + 1}`}>
                  {[...row, ...row].map((item, itemIndex) => (
                    <span key={`${item}-${itemIndex}`}>{item}</span>
                  ))}
                </div>
              ))}
            </div>

            <div className="third-case-panel">
              <div className="third-case-panel__tabs" role="tablist" aria-label="案例角色">
                {thirdCases.map((item) => (
                  <button
                    key={item.role}
                    type="button"
                    className={item.role === activeCase.role ? 'is-active' : ''}
                    onClick={() => setActiveCaseRole(item.role)}
                  >
                    {item.role}
                  </button>
                ))}
              </div>

              <div className="third-case-panel__content">
                <div className="third-case-panel__media">
                  <video className="third-video" autoPlay muted loop playsInline src={activeCase.video} />
                </div>
                <div className="third-case-panel__text">
                  <span>{activeCase.role}</span>
                  <h2>{activeCase.audience}</h2>
                  <p>{activeCase.quote}</p>
                  <a
                    className="third-pill-button third-pill-button--light"
                    href="https://www.chanjing.cc/home/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    立即创作
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="third-footer">
        <div className="third-container third-footer__top">
          <div className="third-footer__intro">
            <span className="third-brand__badge">
              <img src="/brand-icon.svg" alt="" aria-hidden="true" />
            </span>
            <p>{thirdFooterContact.company}</p>
            <div className="third-footer__contact">
              <span>{thirdFooterContact.manager}</span>
              <span>{thirdFooterContact.business}</span>
              <span>{thirdFooterContact.phone}</span>
              <span>{thirdFooterContact.email}</span>
              <span>{thirdFooterContact.address}</span>
            </div>
          </div>

          {thirdFooterLinks.map((column) => (
            <div key={column.heading} className="third-footer__column">
              <h3>{column.heading}</h3>
              {column.items.map((item) => (
                <a key={item} href="#third-hero">
                  {item}
                </a>
              ))}
            </div>
          ))}

          <div className="third-footer__qrcodes">
            <div>
              <img src={thirdFooterContact.qrCodePrimary} alt="关注公众号" />
              <span>关注公众号</span>
            </div>
            <div>
              <img src={thirdFooterContact.qrCodeSecondary} alt="购买咨询" />
              <span>购买咨询</span>
            </div>
          </div>
        </div>
      </footer>

      <div className="third-floating-bar">
        <div className="third-container third-floating-bar__inner">
          <div>
            <strong>海量专业营销场景覆盖，一站式创作数字人短视频</strong>
            <span>从脚本生成、数字人定制到视频出片，完整复刻目标站的转化型底部悬浮条。</span>
          </div>
          <a
            className="third-pill-button third-pill-button--light"
            href="https://www.chanjing.cc/home/"
            target="_blank"
            rel="noreferrer"
          >
            立即开始创作
          </a>
        </div>
      </div>

      <div className="third-assistant-widget" aria-label="悬浮客服入口">
        <Sparkles size={20} />
        <span>数字人顾问</span>
        <div className="third-assistant-widget__links">
          <Link to="/first">First</Link>
          <Link to="/second">Second</Link>
        </div>
      </div>
    </div>
  )
}
