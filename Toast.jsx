import { useEffect } from 'react'

export default function Toast({ message, show, type = 'success', onClose }) {
  useEffect(() => {
    if (!show) return
    const t = setTimeout(onClose, 3500)
    return () => clearTimeout(t)
  }, [show, onClose])

  const colors = {
    success: { bg: '#C9921A', color: '#0B1B3A' },
    error:   { bg: '#B53A2E', color: '#fff' },
    info:    { bg: '#1A3166', color: '#E8B84B' },
  }
  const c = colors[type] ?? colors.success

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 96, left: '50%',
        transform: `translateX(-50%) translateY(${show ? 0 : 60}px)`,
        background: c.bg, color: c.color,
        padding: '12px 24px',
        borderRadius: 8,
        fontSize: 14, fontWeight: 700,
        letterSpacing: '0.04em',
        transition: 'transform .35s cubic-bezier(.22,.68,0,1.2)',
        zIndex: 700,
        pointerEvents: 'none',
        boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
        maxWidth: 'calc(100vw - 40px)',
        textAlign: 'center',
        whiteSpace: 'pre-line',
      }}
    >
      {message}
    </div>
  )
}
