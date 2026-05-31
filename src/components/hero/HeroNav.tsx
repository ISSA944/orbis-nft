import { Mail, GitBranch, X, Menu, XIcon } from 'lucide-react'
import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { HERO_NAV_LINKS, SOCIAL_LINKS } from '@/constants/nav'

const ICON_MAP = { mail: Mail, github: GitBranch, twitter: X } as const

function smoothScrollTo(href: string) {
  if (href.startsWith('#')) {
    const id = href.slice(1)
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.location.assign(href)
  }
}

export function HeroNav() {
  const [open, setOpen] = useState(false)

  const handleNav = useCallback((href: string) => {
    smoothScrollTo(href)
    setOpen(false)
  }, [])

  return (
    <header className="w-full max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between relative z-20">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          handleNav('#')
        }}
        className="font-bold text-white tracking-wider hover:opacity-80 transition-opacity"
      >
        ORBIS.NFT
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-1" aria-label="Main navigation">
        {HERO_NAV_LINKS.map((l) => (
          <Button
            key={l.label}
            variant="ghost"
            size="sm"
            onClick={() => handleNav(l.href)}
          >
            {l.label}
          </Button>
        ))}
      </nav>

      {/* Desktop socials */}
      <div className="hidden md:flex gap-1">
        {SOCIAL_LINKS.map((s) => {
          const Icon = ICON_MAP[s.icon]
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:bg-white/10 transition-colors"
            >
              <Icon size={18} />
            </a>
          )
        })}
      </div>

      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <XIcon size={20} /> : <Menu size={20} />}
      </Button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 mx-4 mt-2 rounded-lg border border-white/10 bg-black/95 backdrop-blur p-4 flex flex-col gap-2 md:hidden">
          {HERO_NAV_LINKS.map((l) => (
            <Button
              key={l.label}
              variant="ghost"
              className="justify-start w-full"
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </Button>
          ))}
          <div className="flex gap-2 mt-2 border-t border-white/10 pt-3">
            {SOCIAL_LINKS.map((s) => {
              const Icon = ICON_MAP[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
