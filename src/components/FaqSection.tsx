import { faqItems } from '@/pages/homeData'
import SectionHeading from '@/components/SectionHeading'

export default function FaqSection() {
  return (
    <section className="faq-section" id="常见问题">
      <div className="container">
        <SectionHeading
          eyebrow="常见问题"
          title="您来提问，我们解答"
          description="保留原页面 FAQ 的核心中文内容，使用深色问答卡片加强层次感和可读性。"
        />
        <div className="faq-list" id="faq">
          {faqItems.map((item) => (
            <article key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
