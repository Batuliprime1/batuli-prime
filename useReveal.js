import { useState, useEffect, useRef } from 'react'

/**
 * Trigger a CSS reveal animation when element enters viewport.
 * Returns [ref, isVisible].
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}

/**
 * Detect if user prefers reduced motion.
 */
export function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefers(mq.matches)
    const handler = (e) => setPrefers(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return prefers
}
