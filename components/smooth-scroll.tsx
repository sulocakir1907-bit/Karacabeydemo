'use client'

import { useEffect, useRef } from 'react'

export function SmoothScroll() {
  const lenisRef = useRef<InstanceType<typeof import('@studio-freight/lenis').default> | null>(null)

  useEffect(() => {
    // Dynamically import Lenis to avoid SSR issues
    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default
      
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      })

      function raf(time: number) {
        lenisRef.current?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return null
}
