import { Mail, X, GitBranch, ChevronRight } from 'lucide-react'

const NAV_LINKS = ['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact']

const NFT_CARDS = [
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10',
  },
  {
    url: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10',
  },
]

function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {[Mail, X, GitBranch].map((Icon, i) => (
        <button
          key={i}
          className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
        >
          <Icon size={20} color="#EFF4FF" />
        </button>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div className="relative bg-[#010828] text-[#EFF4FF] min-h-screen">
      {/* Texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'url(/texture.png)',
          backgroundSize: 'cover',
          mixBlendMode: 'lighten',
        }}
      />

      {/* ─── SECTION 1: HERO ──────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden rounded-b-[32px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
        />

        <div className="relative z-10 h-full flex flex-col max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header row */}
          <div className="flex items-center justify-between pt-7 lg:pt-9">
            <span
              className="text-[#EFF4FF] uppercase tracking-wide"
              style={{ fontFamily: 'Anton, sans-serif', fontSize: '16px' }}
            >
              Orbis.Nft
            </span>

            {/* Desktop nav */}
            <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
              <ul className="flex gap-10">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="uppercase text-[#EFF4FF] hover:text-[#6FFF00] transition-colors"
                      style={{ fontFamily: 'Anton, sans-serif', fontSize: '13px' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop social icons */}
            <SocialIcons className="hidden lg:flex" />
          </div>

          {/* Hero content */}
          <div className="flex-1 flex flex-col justify-center lg:justify-end pb-0 lg:pb-20">
            <div className="lg:ml-32 max-w-full lg:max-w-[780px]">
              <div className="relative inline-block">
                <h1
                  className="uppercase text-[#EFF4FF] leading-[1.05] lg:leading-[1]"
                  style={{
                    fontFamily: 'Anton, sans-serif',
                    fontSize: 'clamp(40px, 8vw, 90px)',
                  }}
                >
                  Beyond earth
                  <br />
                  and ( its ) familiar
                  <br />
                  boundaries
                </h1>

                {/* Cursive accent */}
                <span
                  className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 text-[#6FFF00] -rotate-1 opacity-90 mix-blend-exclusion pointer-events-none select-none"
                  style={{
                    fontFamily: 'Condiment, cursive',
                    fontSize: 'clamp(24px, 3.5vw, 48px)',
                  }}
                >
                  Nft collection
                </span>
              </div>

              {/* Mobile social icons */}
              <SocialIcons className="lg:hidden mt-8 justify-center" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: ABOUT ─────────────────────────────────── */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
        />

        <div className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 min-h-screen flex flex-col justify-between">
          {/* Top row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-0">
            {/* Left heading */}
            <div className="relative">
              <h2
                className="uppercase text-[#EFF4FF] leading-none"
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 60px)',
                }}
              >
                Hello!
                <br />
                I'm orbis
              </h2>
              <span
                className="absolute -bottom-4 right-0 text-[#6FFF00] rotate-2 opacity-95 mix-blend-exclusion pointer-events-none select-none"
                style={{
                  fontFamily: 'Condiment, cursive',
                  fontSize: 'clamp(36px, 4.5vw, 68px)',
                }}
              >
                Orbis
              </span>
            </div>

            {/* Right paragraph */}
            <p
              className="uppercase text-[#EFF4FF] max-w-[266px] leading-relaxed"
              style={{ fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 'clamp(14px, 1.2vw, 16px)' }}
            >
              A digital object fixed beyond time and place. An exploration of distance, form, and
              silence in space
            </p>
          </div>

          {/* Bottom decorative rows */}
          <div className="flex flex-row justify-between mt-16 lg:mt-0">
            <div className="flex flex-col gap-6 w-[48%]">
              {[0, 1].map((i) => (
                <p
                  key={i}
                  className="uppercase text-[#EFF4FF] opacity-10 leading-relaxed"
                  style={{ fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 'clamp(11px, 1vw, 13px)' }}
                >
                  A digital object fixed beyond time and place. An exploration of distance, form,
                  and silence in space
                </p>
              ))}
            </div>

            <div className="hidden lg:flex flex-col gap-6 w-[48%]">
              {[0, 1].map((i) => (
                <p
                  key={i}
                  className="uppercase text-[#EFF4FF] opacity-10 leading-relaxed"
                  style={{ fontFamily: 'ui-monospace, Consolas, monospace', fontSize: '13px' }}
                >
                  A digital object fixed beyond time and place. An exploration of distance, form,
                  and silence in space
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: NFT GRID ──────────────────────────────── */}
      <section className="relative w-full bg-[#010828] py-16 lg:py-24">
        <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0 mb-12 lg:mb-16">
            <h2
              className="uppercase text-[#EFF4FF] leading-none"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(32px, 5vw, 60px)',
              }}
            >
              Collection of
              <br />
              <span className="ml-12 lg:ml-24 xl:ml-32">
                <span style={{ fontFamily: 'Condiment, cursive', color: '#6FFF00' }}>Space</span>
                {' '}objects
              </span>
            </h2>

            {/* SEE ALL CREATORS button */}
            <div className="flex flex-col items-start gap-2 cursor-pointer group">
              <div className="flex items-baseline gap-3">
                <span
                  className="uppercase text-[#EFF4FF] leading-none"
                  style={{
                    fontFamily: 'Anton, sans-serif',
                    fontSize: 'clamp(32px, 5vw, 60px)',
                  }}
                >
                  SEE
                </span>
                <div className="flex flex-col leading-tight">
                  <span
                    className="uppercase text-[#EFF4FF]"
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      fontSize: 'clamp(20px, 3vw, 36px)',
                    }}
                  >
                    ALL
                  </span>
                  <span
                    className="uppercase text-[#EFF4FF]"
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      fontSize: 'clamp(20px, 3vw, 36px)',
                    }}
                  >
                    CREATORS
                  </span>
                </div>
              </div>
              <div className="w-full h-[6px] lg:h-[10px] bg-[#6FFF00] rounded-sm" />
            </div>
          </div>

          {/* NFT Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NFT_CARDS.map((card, i) => (
              <div
                key={i}
                className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors"
              >
                {/* Square video */}
                <div className="relative w-full overflow-hidden rounded-[24px]" style={{ paddingBottom: '100%' }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src={card.url}
                  />
                </div>

                {/* Overlay bar */}
                <div className="liquid-glass rounded-[20px] px-5 py-4 mt-3 flex items-center justify-between">
                  <div>
                    <p
                      className="uppercase text-[#EFF4FF]/70 leading-tight"
                      style={{ fontFamily: 'ui-monospace, Consolas, monospace', fontSize: '11px' }}
                    >
                      Rarity Score:
                    </p>
                    <p
                      className="uppercase text-[#EFF4FF] leading-tight mt-0.5"
                      style={{ fontFamily: 'Anton, sans-serif', fontSize: '16px' }}
                    >
                      {card.score}
                    </p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0 cursor-pointer">
                    <ChevronRight size={20} color="#fff" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CTA ───────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-6 sm:px-10">
          <div className="relative text-right">
            {/* "Go beyond" cursive */}
            <span
              className="absolute -top-6 sm:-top-10 left-0 text-[#6FFF00] mix-blend-exclusion opacity-95 pointer-events-none select-none"
              style={{
                fontFamily: 'Condiment, cursive',
                fontSize: 'clamp(17px, 4vw, 68px)',
              }}
            >
              Go beyond
            </span>

            {/* Main heading */}
            <h2
              className="uppercase text-[#EFF4FF] leading-tight"
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(16px, 4.5vw, 60px)',
              }}
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
        <div
          className="absolute"
          style={{ left: '8%', bottom: '15%' }}
        >
          <div
            className="liquid-glass flex flex-col overflow-hidden"
            style={{
              borderRadius: 'clamp(0.5rem, 1.5vw, 1.25rem)',
              width: 'clamp(48px, 14vw, 268px)',
            }}
          >
            {[Mail, X, GitBranch].map((Icon, i) => (
              <button
                key={i}
                className={`flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer ${
                  i < 2 ? 'border-b border-white/10' : ''
                }`}
                style={{
                  width: '100%',
                  height: 'clamp(48px, 14vw, 72px)',
                }}
              >
                <Icon size={20} color="#EFF4FF" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
