import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, ArrowRight, Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  productCases,
  productFaqs,
  productFeatureMedia,
  productMethods,
  productPainPoints,
  productScenarios,
  productTechHighlights,
} from '@/pages/digitalPersonVideoData'

export default function DigitalPersonVideoPage() {
  const [activeMethodId, setActiveMethodId] = useState(productMethods[0].id)
  const [activeScenarioId, setActiveScenarioId] = useState(productScenarios[0].id)
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0)

  useEffect(() => {
    document.title = '一键生成专业级数字人视频 - 天外说法'
  }, [])

  const activeMethod = useMemo(
    () => productMethods.find((item) => item.id === activeMethodId) ?? productMethods[0],
    [activeMethodId],
  )

  const activeScenario = useMemo(
    () => productScenarios.find((item) => item.id === activeScenarioId) ?? productScenarios[0],
    [activeScenarioId],
  )

  return (
    <div className="feature-page">
      <header className="feature-header">
        <div className="feature-container feature-header__inner">
          <Link className="feature-brand" to="/third" aria-label="返回天外说法首页">
            <span className="feature-brand__badge">
              <img src="/brand-icon.svg" alt="" aria-hidden="true" />
            </span>
            <span>天外说法</span>
          </Link>

          <nav className="feature-nav" aria-label="数字人视频导航">
            <Link className="is-active" to="/features/digital-person-video.html">
              产品
            </Link>
            <a href="#feature-scenarios">行业应用</a>
            <a href="#feature-methods">创作工具</a>
            <a href="#feature-tech">开放平台</a>
            <Link to="/pricing">用户访谈全流程</Link>
            <Link to="/enterprise-service">企业服务</Link>
          </nav>

          <div className="feature-header__actions">
            <a className="feature-header__ghost" href="#feature-methods">
              App
            </a>
            <Link className="feature-header__ghost" to="/workspace">
              工作台
            </Link>
            <a className="feature-header__button" href="#feature-bottom-cta">
              登录 / 注册
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="feature-hero" id="feature-hero">
          <div className="feature-container feature-hero__grid">
            <div className="feature-hero__content">
              <span className="feature-eyebrow">数字人视频创作</span>
              <h1>一键生成专业级数字人视频</h1>
              <p>
                天外说法提供六种数字人视频生成方式，只需几分钟即可创建高清、逼真的数字人视频，适用于营销、培训、社交媒体等多种场景。
              </p>
              <div className="feature-hero__actions">
                <a className="feature-cta feature-cta--primary" href="#feature-methods">
                  免费制作数字人视频
                  <ArrowRight size={18} />
                </a>
                <Link className="feature-cta feature-cta--secondary" to="/third">
                  返回首页
                </Link>
              </div>
            </div>

            <div className="feature-hero__visual">
              <div className="feature-hero__background">
                <img src={productFeatureMedia.heroImage} alt="数字人视频创作视觉" />
              </div>
              <div className="feature-hero__console">
                <div className="feature-console__header">
                  <span>数字人视频工作台</span>
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="feature-console__body">
                  <div className="feature-console__preview">
                    <img src={productFeatureMedia.scenarioImage} alt="数字人视频预览界面" />
                  </div>
                  <div className="feature-console__aside">
                    <article>
                      <strong>创建方式</strong>
                      <span>空白模版 / 智能成片 / 上传资料</span>
                    </article>
                    <article>
                      <strong>数字人口播</strong>
                      <span>支持品牌讲解、培训课程、产品演示</span>
                    </article>
                    <article>
                      <strong>输出规格</strong>
                      <span>横版、竖版、方版均可快速生成</span>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-pain-points">
          <div className="feature-container">
            <div className="feature-section-heading">
              <span className="feature-eyebrow">告别传统视频制作的烦恼</span>
              <h2>数字人视频技术为您提供完美解决方案</h2>
              <p>用更低成本、更短周期、更稳定质量完成视频内容生产，让团队效率和成片表现一起提升。</p>
            </div>

            <div className="feature-pain-points__grid">
              {productPainPoints.map((item) => (
                <article key={item.title} className="feature-pain-card">
                  <span>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.problem}</p>
                  <strong>{item.metric}</strong>
                  <p>{item.solution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-methods" id="feature-methods">
          <div className="feature-container">
            <div className="feature-section-heading">
              <span className="feature-eyebrow">六种方式，轻松生成数字人视频</span>
              <h2>选择最适合您的创作方式</h2>
              <p>从完全自定义到智能成片，再到课件上传转视频，覆盖不同内容团队的生产需求。</p>
            </div>

            <div className="feature-methods__layout">
              <div className="feature-method-tabs" role="tablist" aria-label="数字人视频创建方式">
                {productMethods.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={item.id === activeMethod.id ? 'is-active' : ''}
                    onClick={() => setActiveMethodId(item.id)}
                  >
                    <span>{item.label}</span>
                    {item.badge ? <em>{item.badge}</em> : null}
                  </button>
                ))}
              </div>

              <div className="feature-method-panel">
                <div className="feature-method-panel__info">
                  <span className="feature-eyebrow">{activeMethod.label}</span>
                  <h3>{activeMethod.title}</h3>
                  <p>{activeMethod.description}</p>
                  <ul>
                    {activeMethod.highlights.map((item) => (
                      <li key={item}>
                        <Check size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="feature-cta feature-cta--secondary" href="#feature-bottom-cta">
                    {activeMethod.cta}
                  </a>
                </div>

                <div className="feature-method-panel__preview">
                  <div className="feature-product-shot">
                    <div className="feature-product-shot__toolbar">
                      <span>创建视频</span>
                      <span>智能排版</span>
                      <span>数字人设置</span>
                    </div>
                    <div className="feature-product-shot__canvas">
                      <img src={productFeatureMedia.heroImage} alt={activeMethod.title} />
                    </div>
                    <div className="feature-product-shot__footer">
                      <span>比例：16:9 / 9:16 / 1:1</span>
                      <span>输出：高清专业级数字人视频</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-scenarios" id="feature-scenarios">
          <div className="feature-container">
            <div className="feature-section-heading">
              <span className="feature-eyebrow">赋能全场景，释放视频创作潜力</span>
              <h2>数字人视频技术广泛应用于各行各业</h2>
              <p>围绕营销、培训、产品演示和社交传播等高频场景，把复杂视频制作压缩成可规模化复制的流程。</p>
            </div>

            <div className="feature-scenario-tabs" role="tablist" aria-label="应用场景">
              {productScenarios.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === activeScenario.id ? 'is-active' : ''}
                  onClick={() => setActiveScenarioId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="feature-scenario-panel">
              <div className="feature-scenario-panel__content">
                <span className="feature-eyebrow">{activeScenario.label}</span>
                <h3>{activeScenario.title}</h3>
                <p>{activeScenario.description}</p>
                <ul>
                  {activeScenario.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="feature-scenario-panel__media">
                <img src={productFeatureMedia.scenarioImage} alt={activeScenario.title} />
              </div>
            </div>
          </div>
        </section>

        <section className="feature-cases" id="feature-cases">
          <div className="feature-container">
            <div className="feature-section-heading">
              <span className="feature-eyebrow">客户成功案例</span>
              <h2>众多企业和创作者已经用天外说法做出高质量数字人视频</h2>
              <p>把案例表现做成可量化的业务结果，突出成本、效率和增长三个维度。</p>
            </div>

            <div className="feature-cases__grid">
              {productCases.map((item, index) => (
                <article key={item.name} className="feature-case-card">
                  <img src={productFeatureMedia.caseImages[index]} alt={item.name} />
                  <div className="feature-case-card__body">
                    <h3>{item.name}</h3>
                    <span>{item.industry}</span>
                    <blockquote>{item.quote}</blockquote>
                    <div className="feature-case-card__metrics">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-tech" id="feature-tech">
          <div className="feature-container">
            <div className="feature-section-heading feature-section-heading--light">
              <span className="feature-eyebrow feature-eyebrow--light">顶尖技术，为你的视频创作保驾护航</span>
              <h2>自研 AI 能力，让成片质量、速度与安全性同时在线</h2>
              <p>保留目标页的渐变科技区表达，用四张能力卡集中呈现平台底层优势。</p>
            </div>

            <div className="feature-tech__grid">
              {productTechHighlights.map((item) => (
                <article key={item.title} className="feature-tech-card">
                  <Sparkles size={22} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-faq" id="feature-faq">
          <div className="feature-container">
            <div className="feature-section-heading">
              <span className="feature-eyebrow">常见问题解答</span>
              <h2>关于数字人视频生成的常见问题</h2>
            </div>

            <div className="feature-faq__list">
              {productFaqs.map((item, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <article key={item.question} className={`feature-faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button type="button" onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}>
                      <span>{item.question}</span>
                      <ChevronDown size={20} />
                    </button>
                    {isOpen ? <p>{item.answer}</p> : null}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="feature-bottom-cta" id="feature-bottom-cta">
          <div className="feature-container feature-bottom-cta__inner">
            <div>
              <span className="feature-eyebrow">立即开始，创作你的第一个数字人视频</span>
              <h2>无需昂贵设备，无需专业技巧，只需几分钟即可拥有专业级数字人视频</h2>
              <p>需要了解更多？联系售前顾问，获取更适合业务场景的创作方案。</p>
            </div>
            <div className="feature-bottom-cta__actions">
              <a className="feature-cta feature-cta--primary" href="#feature-hero">
                免费体验
              </a>
              <Link className="feature-cta feature-cta--secondary" to="/third">
                返回天外说法首页
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
