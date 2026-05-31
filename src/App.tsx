import { Suspense, lazy } from 'react'
import TextureOverlay from './components/layout/TextureOverlay'

// Hero loads eagerly — it's immediately visible
import HeroSection from './components/sections/HeroSection'

// Below-the-fold sections load lazily
const AboutSection = lazy(() => import('./components/sections/AboutSection'))
const GridSection = lazy(() => import('./components/sections/GridSection'))
const CTASection = lazy(() => import('./components/sections/CTASection'))

function SectionFallback() {
  return <div className="w-full h-screen bg-[#010828]" aria-hidden="true" />
}

export default function App() {
  return (
    <div className="relative bg-[#010828] text-[#EFF4FF] min-h-screen">
      <TextureOverlay />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GridSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
    </div>
  )
}
