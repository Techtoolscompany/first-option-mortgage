'use client'

import { useEffect, useRef, ReactNode } from 'react'
import Lenis from '@studio-freight/lenis'

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}
