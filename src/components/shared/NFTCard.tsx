import { memo } from 'react'
import { ChevronRight } from 'lucide-react'
import VideoPlayer from './VideoPlayer'
import { FONT, FONT_SIZE, COLORS } from '../../constants/styles'

interface NFTCardProps {
  url: string
  score: string
}

function NFTCard({ url, score }: NFTCardProps) {
  return (
    <div className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors">
      <div className="relative w-full overflow-hidden rounded-[24px]" style={{ paddingBottom: '100%' }}>
        <VideoPlayer
          src={url}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="liquid-glass rounded-[20px] px-5 py-4 mt-3 flex items-center justify-between">
        <div>
          <p
            className="uppercase leading-tight"
            style={{ ...FONT.mono, ...FONT_SIZE.rarityLabel, color: `${COLORS.cream}B3` }}
          >
            RARITY SCORE
          </p>
          <p
            className="uppercase leading-tight mt-0.5"
            style={{ ...FONT.anton, ...FONT_SIZE.rarityScore, color: COLORS.cream }}
          >
            {score}
          </p>
        </div>
        <button
          type="button"
          aria-label="View NFT details"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0 cursor-pointer"
        >
          <ChevronRight size={20} color="#fff" />
        </button>
      </div>
    </div>
  )
}

export default memo(NFTCard)
