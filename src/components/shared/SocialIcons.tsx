import { memo } from 'react'
import { Mail, X, GitBranch } from 'lucide-react'

interface SocialIconsProps {
  className?: string
  layout?: 'row' | 'column'
}

function SocialIcons({ className = '', layout = 'row' }: SocialIconsProps) {
  const icons = [Mail, X, GitBranch] as const
  const isColumn = layout === 'column'

  return (
    <div className={`flex ${isColumn ? 'flex-col' : 'gap-3'} ${className}`}>
      {icons.map((Icon, i) => (
        <button
          key={i}
          aria-label={['Email', 'Twitter / X', 'GitHub'][i]}
          className={`liquid-glass flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer ${
            isColumn
              ? `w-full border-b border-white/10 last:border-b-0`
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
