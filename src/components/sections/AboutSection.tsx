import VideoPlayer from '../shared/VideoPlayer'
import { FONT, FONT_SIZE, COLORS } from '../../constants/styles'

const ABOUT_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4'

const ABOUT_TEXT = 'A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.'

const decorativeParagraphs = [0, 1] as const

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden">
      <VideoPlayer
        src={ABOUT_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 min-h-screen flex flex-col justify-between">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="relative">
            <h2
              className="uppercase leading-none"
              style={{ ...FONT.anton, ...FONT_SIZE.sectionHeading, color: COLORS.cream }}
            >
              Hello.
              <br />
              I'm Orbis
            </h2>
            <span
              className="absolute -bottom-4 right-0 rotate-2 opacity-95 mix-blend-exclusion pointer-events-none select-none"
              style={{ ...FONT.condiment, ...FONT_SIZE.sectionAccent, color: COLORS.neon }}
            >
              Orbis
            </span>
          </div>

          <p
            className="uppercase max-w-[266px] leading-relaxed"
            style={{ ...FONT.mono, ...FONT_SIZE.bodyText, color: COLORS.cream }}
          >
            {ABOUT_TEXT}
          </p>
        </div>

        {/* Decorative bottom rows */}
        <div className="flex flex-row justify-between mt-16 lg:mt-0">
          <div className="flex flex-col gap-6 w-[48%]">
            {decorativeParagraphs.map((i) => (
              <p
                key={i}
                className="uppercase leading-relaxed opacity-10"
                style={{ ...FONT.mono, fontSize: 'clamp(11px, 1vw, 13px)', color: COLORS.cream }}
                aria-hidden="true"
              >
                {ABOUT_TEXT}
              </p>
            ))}
          </div>

          <div className="hidden lg:flex flex-col gap-6 w-[48%]">
            {decorativeParagraphs.map((i) => (
              <p
                key={i}
                className="uppercase leading-relaxed opacity-10"
                style={{ ...FONT.mono, fontSize: '13px', color: COLORS.cream }}
                aria-hidden="true"
              >
                {ABOUT_TEXT}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
