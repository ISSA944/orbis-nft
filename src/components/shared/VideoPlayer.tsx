import { useRef, useEffect, useCallback, memo } from 'react'

interface VideoPlayerProps {
  src: string
  className?: string
  priority?: boolean
}

function VideoPlayer({ src, className = '', priority = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Safari/iOS fallback: loop attr sometimes doesn't fire ended event
  const handleEnded = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    el.currentTime = 0
    el.play().catch(() => {})
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    if (priority) {
      el.play().catch(() => {})
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [priority])

  return (
    <video
      ref={videoRef}
      src={src}
      preload={priority ? 'auto' : 'none'}
      muted
      playsInline
      loop
      onEnded={handleEnded}
      className={className}
      aria-hidden="true"
    />
  )
}

export default memo(VideoPlayer)
