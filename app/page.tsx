'use client'

import { LocaleProvider } from '@/lib/locale-context'
import { SmoothScroll } from '@/components/smooth-scroll'
import { LoadingScreen } from '@/components/loading-screen'
import { Navigation } from '@/components/navigation'
import { HeroSlider } from '@/components/hero-slider'
import { CollectionsGallery } from '@/components/collections-gallery'
import { HeritageSection } from '@/components/heritage-section'
import { ConciergeSection } from '@/components/concierge-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <LocaleProvider>
      <LoadingScreen />
      <SmoothScroll />
      <main className="relative overflow-hidden">
        <Navigation />
        <HeroSlider />
        <CollectionsGallery />
        <HeritageSection />
        <ConciergeSection />
        <Footer />
      </main>
    </LocaleProvider>
  )
}
