import { useState } from 'react'
import { WHATSAPP_URL } from '../utils/constants'
import { track } from '../utils/analytics'
import { COLORS } from '../utils/constants'

/**
 * Course enrollment modal — collects name + phone, then routes to WhatsApp.
 * No backend required; payment is handled via WhatsApp conversation.
 */
export default function EnrollModal({ course, onClose }) {
  const [step,  setStep]  = useState(1)   // 1 = form, 2 = confirmation
  const [name,  setName]  = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  if (!course) return null

  const validate = () => {
    if (!name.trim())  { setError('Please enter your name.');  return false }
    if (!phone.trim()) { setError('Please enter your phone number.'); return false }
    setError('')
    return true
  }

  const handleEnroll = () => {
    if (!validate()) return
    track.courseEnroll(course.id)
    setStep(2)
  }

  const goWhatsApp = () => {
    const msg = `Hi Batuli Prime! 👋\n\nMy name is *${name.trim()}*.\nPhone: ${phone.trim()}\n\nI want to enroll in the *${course.name} Package* (${course.price}/month).\n\nPlease guide me on the next steps. Thank you!`
    window.open(WHATSAPP_URL(msg), '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div
      role="dialog" aria-modal="true"
      aria-label={`Enroll in ${course.name} package`}
      style={{
        position: 'fixed', inset: 0, zIndex: 800,
        background: 'rgba(4,12,24,0.88)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: '#112249', border: `1px solid ${COLORS.line}`,
        borderRadius: 16, padding: '36px 32px',
        maxWidth: 440, width: '100%',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        animation: 'fadeInUp .35s ease',
      }}>
        {/* Close */}
        <button onClick={onClose} aria-label="Close" style={{
          float: 'right', background: 'none', border: 'none',
          color: 'rgba(244,246,251,0.4)', fontSize: 22, cursor: 'pointer',
          marginTop: -8, marginRight: -8,
        }}>✕</button>

        {step === 1 ? (
          <>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 8 }}>
              Enroll Now
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#F4F6FB', marginBottom: 6 }}>
              {course.name} Package
            </h2>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 26, color: COLORS.gold2, marginBottom: 24 }}>
              {course.price}<span style={{ fontSize: 14, color: 'rgba(244,246,251,0.4)' }}>/month</span>
            </div>

            {/* What's included mini-list */}
            <div style={{ background: 'rgba(201,146,26,0.07)', borderRadius: 8, padding: '12px 16px', marginBottom: 24 }}>
              {course.features.slice(0, 4).map(f => (
                <div key={f} style={{ fontSize: 13, color: 'rgba(244,246,251,0.7)', marginBottom: 6, display: 'flex', gap: 8 }}>
                  <span style={{ color: COLORS.gold }}>✓</span>{f}
                </div>
              ))}
              {course.features.length > 4 && (
                <div style={{ fontSize: 12, color: COLORS.gold, marginTop: 4 }}>+{course.features.length - 4} more benefits</div>
              )}
            </div>

            {/* Form */}
            {[
              { label: 'Full Name *', value: name, set: setName, ph: 'Your name', type: 'text' },
              { label: 'Phone / WhatsApp *', value: phone, set: setPhone, ph: '+255 xxx xxx xxx', type: 'tel' },
            ].map(f => (
              <div key={f.label} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 7 }}>
                  {f.label}
                </label>
                <input
                  type={f.type} placeholder={f.ph} value={f.value}
                  onChange={e => f.set(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleEnroll()}
                  style={{
                    width: '100%', padding: '11px 14px',
                    background: '#0B1B3A', border: `1px solid ${COLORS.line}`,
                    borderRadius: 8, color: '#F4F6FB',
                    fontSize: 14, fontFamily: 'inherit', outline: 'none',
                  }}
                  onFocus={e => e.target.style.borderColor = COLORS.gold}
                  onBlur={e => e.target.style.borderColor = COLORS.line}
                />
              </div>
            ))}

            {error && <div style={{ fontSize: 13, color: '#E05C4B', marginBottom: 14 }}>⚠ {error}</div>}

            <button onClick={handleEnroll} style={{
              width: '100%', padding: 13,
              background: COLORS.gold, color: COLORS.navy,
              border: 'none', borderRadius: 8,
              fontSize: 14, fontWeight: 800, cursor: 'pointer',
              letterSpacing: '0.06em', fontFamily: 'inherit',
              transition: 'background .2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = COLORS.gold2}
              onMouseLeave={e => e.currentTarget.style.background = COLORS.gold}
            >
              Continue to WhatsApp →
            </button>
            <p style={{ fontSize: 11, color: 'rgba(244,246,251,0.3)', marginTop: 12, textAlign: 'center' }}>
              We'll confirm your enrollment via WhatsApp within 24 hours.
            </p>
          </>
        ) : (
          /* Step 2 — Confirmation */
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#F4F6FB', marginBottom: 12 }}>
              You're almost in!
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.65)', lineHeight: 1.8, marginBottom: 28 }}>
              Hi <strong style={{ color: COLORS.gold2 }}>{name}</strong>! Tap the button below to send your enrollment request to Batuli Prime on WhatsApp. We'll confirm and guide you through payment.
            </p>
            <button onClick={goWhatsApp} style={{
              width: '100%', padding: 14,
              background: '#25D366', color: '#fff',
              border: 'none', borderRadius: 8,
              fontSize: 15, fontWeight: 800, cursor: 'pointer',
              fontFamily: 'inherit', marginBottom: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              💬 Open WhatsApp & Enroll
            </button>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'rgba(244,246,251,0.4)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
              Maybe later
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
