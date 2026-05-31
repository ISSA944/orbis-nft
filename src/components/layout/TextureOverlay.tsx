import { memo } from 'react'

const overlayStyle = {
  backgroundImage: 'url(/texture.png)',
  backgroundSize: 'cover',
  mixBlendMode: 'lighten' as const,
}

function TextureOverlay() {
  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none opacity-60"
      style={overlayStyle}
      aria-hidden="true"
    />
  )
}

export default memo(TextureOverlay)
