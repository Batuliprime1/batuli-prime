import { useState, useEffect } from 'react'
import { WHATSAPP_URL, BRAND } from '../utils/constants'
import { track } from '../utils/analytics'

/**
 * Floating WhatsApp button — appears after 2s, pulses to draw attention.
 * Hides on scroll up (mobile UX best practice).
 */
export default function WhatsAppButton() {
  const [visible,  setVisible]  = useState(false)
  const [tooltip,  setTooltip]  = useState(false)
  const [lastY,    setLastY]    = useState(0)
  const [show,     setShow]     = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY
      setShow(y < lastY || y < 100)
      setLastY(y)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [lastY])

  const handleClick = () => {
    track.whatsappClick('floating_button')
    window.open(WHATSAPP_URL(), '_blank', 'noopener,noreferrer')
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 24, right: 20,
      zIndex: 600,
      display: 'flex', alignItems: 'center', gap: 10,
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity .3s, transform .3s',
    }}>
      {/* Tooltip */}
      {tooltip && (
        <div style={{
          background: '#25D366', color: '#fff',
          padding: '8px 14px', borderRadius: 8,
          fontSize: 13, fontWeight: 600,
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          animation: 'fadeIn .2s ease',
        }}>
          Chat with us!
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        aria-label={`Chat with ${BRAND.name} on WhatsApp`}
        style={{
          width: 58, height: 58, borderRadius: '50%',
          background: '#25D366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28,
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          animation: 'pulse-gold 2.5s ease-in-out infinite',
          transition: 'transform .2s, box-shadow .2s',
        }}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.92)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" fill="white" width="30" height="30" aria-hidden="true">
          <path d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.7c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1 1-3.9-.2-.4C6 20 5.4 18 5.4 15.9 5.4 10 10.1 5.3 16 5.3S26.6 10 26.6 15.9 21.9 26.6 16 26.6zm7.1-9.5c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.3 1.5c-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.6.1-.3 0-.5-.1-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.2 2.8 4.2 6.7 5.9 4 1.7 4 1.1 4.7 1 .7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.1-.3-.2-.7-.4z"/>
        </svg>
      </button>
    </div>
  )
}
