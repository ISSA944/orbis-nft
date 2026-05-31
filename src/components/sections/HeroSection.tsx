import { lazy, Suspense, useCallback } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Spotlight } from '@/components/hero/Spotlight'
import { HeroNav } from '@/components/hero/HeroNav'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const SplineScene = lazy(() =>
  import('@/components/hero/SplineScene').then((m) => ({ default: m.SplineScene }))
)

const SPLINE_URL = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

function MobileVisualPlaceholder() {
  return (
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_70%)]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(167,139,250,0.15),transparent_60%)]" />
    </div>
  )
}

export default function HeroSection() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const scrollToGallery = useCallback(() => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const scrollToAbout = useCallback(() => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <section className="w-full bg-black">
      <HeroNav />

      <div className="px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
        <Card
          className={[
            'w-full relative overflow-hidden',
            'bg-black/[0.96]',
            'min-h-[600px] md:h-[640px] lg:h-[720px]',
            'rounded-2xl',
          ].join(' ')}
        >
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

          <div className="flex flex-col md:flex-row h-full min-h-[600px] md:min-h-0">
            {/* Left — content */}
            <div className="flex-1 p-6 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center">
              <span className="text-xs md:text-sm text-neutral-400 uppercase tracking-[0.2em] mb-4">
                Orbis · Interactive Collection
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Interactive 3D
                <br />
                NFT Experience
              </h1>

              <p className="mt-4 md:mt-6 text-neutral-300 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed">
                Bring your designs to life with beautiful 3D scenes. Explore a curated collection of
                space objects that capture attention and define what's next.
              </p>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={scrollToGallery}
                  className="group"
                >
                  Get Started
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToAbout}>
                  <Play size={16} className="mr-2" />
                  Learn More
                </Button>
              </div>

              {/* Stats row */}
              <div className="mt-8 md:mt-10 flex gap-6 md:gap-10 text-neutral-400 text-xs md:text-sm">
                <div>
                  <div className="text-white text-xl md:text-2xl font-bold">3.2K</div>
                  <div>Collectors</div>
                </div>
                <div>
                  <div className="text-white text-xl md:text-2xl font-bold">120</div>
                  <div>Objects</div>
                </div>
                <div>
                  <div className="text-white text-xl md:text-2xl font-bold">9.1</div>
                  <div>Avg. Rarity</div>
                </div>
              </div>
            </div>

            {/* Right — Spline (or placeholder on mobile) */}
            <div className="flex-1 relative min-h-[260px] sm:min-h-[320px] md:min-h-0">
              {isDesktop ? (
                <Suspense
                  fallback={<div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black" />}
                >
                  <SplineScene scene={SPLINE_URL} className="w-full h-full" />
                </Suspense>
              ) : (
                <MobileVisualPlaceholder />
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
