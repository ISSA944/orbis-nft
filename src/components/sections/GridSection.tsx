import NFTCard from '../shared/NFTCard'
import { NFT_CARDS } from '../../constants/nft'
import { FONT, FONT_SIZE, COLORS } from '../../constants/styles'

export default function GridSection() {
  return (
    <section id="gallery" className="relative w-full py-16 lg:py-24" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0 mb-12 lg:mb-16">
          <h2
            className="uppercase leading-none"
            style={{ ...FONT.anton, ...FONT_SIZE.sectionHeading, color: COLORS.cream }}
          >
            Collection of
            <br />
            <span className="ml-12 lg:ml-24 xl:ml-32">
              <span style={{ ...FONT.condiment, color: COLORS.neon }}>Space</span>
              {' '}Objects
            </span>
          </h2>

          {/* Explore CTA */}
          <div className="flex flex-col items-start gap-2 cursor-pointer group">
            <div className="flex items-baseline gap-3">
              <span
                className="uppercase leading-none"
                style={{ ...FONT.anton, ...FONT_SIZE.sectionHeading, color: COLORS.cream }}
              >
                EXPLORE
              </span>
              <div className="flex flex-col leading-tight">
                <span
                  className="uppercase"
                  style={{ ...FONT.anton, fontSize: 'clamp(20px, 3vw, 36px)', color: COLORS.cream }}
                >
                  ALL
                </span>
                <span
                  className="uppercase"
                  style={{ ...FONT.anton, fontSize: 'clamp(20px, 3vw, 36px)', color: COLORS.cream }}
                >
                  WORKS
                </span>
              </div>
            </div>
            <div className="w-full h-[6px] lg:h-[10px] rounded-sm" style={{ backgroundColor: COLORS.neon }} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NFT_CARDS.map((card) => (
            <NFTCard key={card.url} url={card.url} score={card.score} />
          ))}
        </div>
      </div>
    </section>
  )
}
