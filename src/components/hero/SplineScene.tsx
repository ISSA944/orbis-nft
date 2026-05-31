import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineFallback() {
  return (
    <div
      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black"
      aria-hidden="true"
    >
      <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense fallback={<SplineFallback />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
