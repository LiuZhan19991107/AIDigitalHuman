import { ChevronRight } from 'lucide-react'
import { navItems } from '@/pages/homeData'

export default function MarketingHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand-mark" href="#hero" aria-label="天外说法首页">
          <span className="brand-mark__badge">
            <img src="/brand-icon.svg" alt="" aria-hidden="true" />
          </span>
          <span>天外说法</span>
        </a>
        <nav className="site-nav" aria-label="页面导航">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="site-nav__link">
              {item}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <a className="ghost-link" href="#faq">
            登录
          </a>
          <a className="primary-chip" href="#hero">
            立即体验
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
