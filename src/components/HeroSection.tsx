import { ArrowRight, PlayCircle } from 'lucide-react'
import { heroStats } from '@/pages/homeData'

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__eyebrow">AI 口播数字人</span>
          <h1>面向品牌及 UGC 视频的 AI 代言人生成工具</h1>
          <p className="hero__description">
            只需选择预设数字人模特，或上传照片与声音定制形象，再输入中文文案内容，即可快速生成支持多语言的高清代言人口播视频。
          </p>
          <div className="hero__actions">
            <a className="primary-button" href="#产品能力">
              立即免费试用
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#用户评价">
              <PlayCircle size={18} />
              查看真实案例
            </a>
          </div>
          <ul className="hero__stats" aria-label="页面亮点">
            {heroStats.map((item) => (
              <li key={item.label} className="hero-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__visual" aria-label="AI 数字人主视觉">
          <div className="hero-card">
            <img
              src="https://p16-cc-image-search-sign-sg.ibyteimg.com/tos-alisg-i-h9hire4aei-sg/image/a5acd803b0dec540c59e805517835cf5~tplv-h9hire4aei-image.jpeg?rk3s=add9cc80&x-expires=1788360925&x-signature=KjRf55kFrW%2Bn587KoWhZO7LlQ2c%3D"
              alt="AI 数字人口播产品界面"
            />
            <div className="hero-card__overlay">
              <span>多语言脚本</span>
              <span>唇形同步</span>
              <span>高清导出</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
