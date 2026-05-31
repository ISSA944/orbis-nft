import VideoPlayer from '../shared/VideoPlayer'
import SocialIcons from '../shared/SocialIcons'
import { NAV_LINKS } from '../../constants/nav'
import { FONT, FONT_SIZE, COLORS } from '../../constants/styles'

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden rounded-b-[32px]">
      <VideoPlayer
        src={HERO_VIDEO}
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 h-full flex flex-col max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between pt-7 lg:pt-9">
          <span
            className="uppercase tracking-wide"
            style={{ ...FONT.anton, ...FONT_SIZE.logo, color: COLORS.cream }}
          >
            ORBIS.NFT
          </span>

          <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]" aria-label="Main navigation">
            <ul className="flex gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="uppercase transition-colors hover:text-[#6FFF00]"
                    style={{ ...FONT.anton, ...FONT_SIZE.nav, color: COLORS.cream }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialIcons className="hidden lg:flex" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center lg:justify-end pb-0 lg:pb-20">
          <div className="lg:ml-32 max-w-full lg:max-w-[780px]">
            <div className="relative inline-block">
              <h1
                className="uppercase leading-[1.05] lg:leading-[1]"
                style={{ ...FONT.anton, ...FONT_SIZE.heroHeading, color: COLORS.cream }}
              >
                Beyond Earth
                <br />
                And (Its) Familiar
                <br />
                Boundaries
              </h1>

              <span
                className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 -rotate-1 opacity-90 mix-blend-exclusion pointer-events-none select-none"
                style={{ ...FONT.condiment, ...FONT_SIZE.heroAccent, color: COLORS.neon }}
              >
                NFT collection
              </span>
            </div>

            <SocialIcons className="lg:hidden mt-8 justify-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
