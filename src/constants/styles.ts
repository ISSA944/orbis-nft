export const FONT = {
  anton: { fontFamily: 'Anton, sans-serif' },
  condiment: { fontFamily: 'Condiment, cursive' },
  mono: { fontFamily: 'ui-monospace, Consolas, monospace' },
} as const

export const FONT_SIZE = {
  logo: { fontSize: '16px' },
  nav: { fontSize: '13px' },
  heroHeading: { fontSize: 'clamp(40px, 8vw, 90px)' },
  heroAccent: { fontSize: 'clamp(24px, 3.5vw, 48px)' },
  sectionHeading: { fontSize: 'clamp(32px, 5vw, 60px)' },
  sectionAccent: { fontSize: 'clamp(36px, 4.5vw, 68px)' },
  ctaAccent: { fontSize: 'clamp(17px, 4vw, 68px)' },
  ctaHeading: { fontSize: 'clamp(16px, 4.5vw, 60px)' },
  bodyText: { fontSize: 'clamp(14px, 1.2vw, 16px)' },
  rarityLabel: { fontSize: '11px' },
  rarityScore: { fontSize: '16px' },
} as const

export const COLORS = {
  cream: '#EFF4FF',
  neon: '#6FFF00',
  bg: '#010828',
} as const
