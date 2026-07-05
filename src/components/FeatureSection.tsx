import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { featureItems } from '@/pages/homeData'

export default function FeatureSection() {
  return (
    <section className="feature-section" id="产品能力">
      <div className="container">
        <SectionHeading
          eyebrow="产品能力"
          title="真实感、可定制、可全球化的数字人口播体验"
          description="围绕页面原站的信息结构，保留三组核心卖点，用深色大图与高对比卡片强化营销页的视觉冲击。"
        />
        <div className="feature-list">
          {featureItems.map((item, index) => (
            <article
              key={item.id}
              className={`feature-card ${index % 2 === 1 ? 'feature-card--reverse' : ''}`}
            >
              <div className="feature-card__media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="feature-card__content">
                <span className="feature-card__index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="feature-card__points">
                  {item.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
