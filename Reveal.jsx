import { useReveal, usePrefersReducedMotion } from '../hooks/useReveal'

const TRANSFORMS = {
  up:    'translateY(28px)',
  left:  'translateX(-28px)',
  right: 'translateX(28px)',
  none:  'none',
}

/**
 * Wrapper that animates children in on scroll.
 * Props: delay (seconds), dir ('up'|'left'|'right'|'none')
 */
export default function Reveal({ children, delay = 0, dir = 'up', style = {} }) {
  const [ref, visible] = useReveal()
  const reduced = usePrefersReducedMotion()

  return (
    <div
      ref={ref}
      style={{
        opacity:    reduced || visible ? 1 : 0,
        transform:  reduced || visible ? 'none' : TRANSFORMS[dir],
        transition: `opacity .55s ease ${delay}s, transform .55s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
