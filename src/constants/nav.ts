export const NAV_LINKS = ['Home', 'Gallery', 'Mint NFT', 'FAQ', 'Contact'] as const

export const HERO_NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export type SocialIconKey = 'twitter' | 'github' | 'mail'

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string
  href: string
  icon: SocialIconKey
}> = [
  { label: 'Twitter / X', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'Email', href: 'mailto:hello@orbis.nft', icon: 'mail' },
]
