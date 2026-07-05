import { useEffect } from 'react'
import FeatureSection from '@/components/FeatureSection'
import FaqSection from '@/components/FaqSection'
import HeroSection from '@/components/HeroSection'
import MarketingHeader from '@/components/MarketingHeader'
import SiteFooter from '@/components/SiteFooter'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  useEffect(() => {
    document.title = 'AI 口播数字人 - 天外说法'
  }, [])

  return (
    <div className="page-shell">
      <div className="page-shell__glow page-shell__glow--left" />
      <div className="page-shell__glow page-shell__glow--right" />
      <MarketingHeader />
      <main>
        <HeroSection />
        <FeatureSection />
        <FaqSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
