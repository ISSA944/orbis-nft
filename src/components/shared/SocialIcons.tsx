import { memo } from 'react'
import { Mail, X, GitBranch } from 'lucide-react'

interface SocialIconsProps {
  className?: string
  layout?: 'row' | 'column'
}

const ICON_DATA = [
  { Icon: Mail, label: 'Email' },
  { Icon: X, label: 'Twitter / X' },
  { Icon: GitBranch, label: 'GitHub' },
] as const

function SocialIcons({ className = '', layout = 'row' }: SocialIconsProps) {
  const isColumn = layout === 'column'

  return (
    <div className={`flex ${isColumn ? 'flex-col' : 'gap-3'} ${className}`}>
      {ICON_DATA.map(({ Icon, label }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          className={`liquid-glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer ${
            isColumn
              ? 'w-full border-b border-white/10 last:border-b-0'
              : 'rounded-[1rem] w-14 h-14'
          }`}
          style={isColumn ? { height: 'clamp(48px, 14vw, 72px)' } : undefined}
        >
          <Icon size={20} color="#EFF4FF" />
        </button>
      ))}
    </div>
  )
}

export default memo(SocialIcons)
