import VideoPlayer from '../shared/VideoPlayer'
import SocialIcons from '../shared/SocialIcons'
import { FONT, FONT_SIZE, COLORS } from '../../constants/styles'

const CTA_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

const socialContainerStyle = {
  borderRadius: 'clamp(0.5rem, 1.5vw, 1.25rem)',
  width: 'clamp(48px, 14vw, 268px)',
}

export default function CTASection() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <VideoPlayer
        src={CTA_VIDEO}
        className="w-full h-auto block"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-6 sm:px-10">
        <div className="relative text-right">
          <span
            className="absolute -top-6 sm:-top-10 left-0 mix-blend-exclusion opacity-95 pointer-events-none select-none"
            style={{ ...FONT.condiment, ...FONT_SIZE.ctaAccent, color: COLORS.neon }}
          >
            Go beyond
          </span>

          <h2
            className="uppercase leading-tight"
            style={{ ...FONT.anton, ...FONT_SIZE.ctaHeading, color: COLORS.cream }}
          >
            <span className="block mb-4 sm:mb-8 lg:mb-12">JOIN US.</span>
            REVEAL WHAT'S HIDDEN.
            <br />
            DEFINE WHAT'S NEXT.
            <br />
            FOLLOW THE SIGNAL.
          </h2>
        </div>
      </div>

      {/* Bottom-left social icons */}
      <div className="absolute" style={{ left: '8%', bottom: '15%' }}>
        <div className="liquid-glass overflow-hidden" style={socialContainerStyle}>
          <SocialIcons layout="column" />
        </div>
      </div>
    </section>
  )
}
