import SectionHeading from '@/components/SectionHeading'
import { testimonials } from '@/pages/homeData'

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="用户评价">
      <div className="container">
        <SectionHeading
          eyebrow="用户的声音"
          title="品牌团队如何用 AI 数字人提升营销产能"
          description="三组真实感长评卡片延续原站结构，让页面在卖点之外继续建立可信度。"
        />
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-card__person">
                <img src={item.avatar} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
              <blockquote>{item.quote}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
