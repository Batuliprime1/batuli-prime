import { useState } from 'react'
import EbookCover from './EbookCover'
import { EBOOK, WHATSAPP_URL, COLORS } from '../utils/constants'
import { track } from '../utils/analytics'

/**
 * Ebook purchase modal — 2-step flow: preview → WhatsApp order.
 * No backend needed; seller confirms payment and sends PDF via WhatsApp.
 */
export default function EbookModal({ onClose }) {
  const [step, setStep] = useState(1)   // 1 = preview, 2 = order form, 3 = confirm

  const [name,  setName]  = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const validate = () => {
    if (!name.trim())  { setError('Please enter your name.'); return false }
    if (!phone.trim()) { setError('Please enter your phone number.'); return false }
    setError('')
    return true
  }

  const handleOrder = () => {
    if (!validate()) return
    track.ebookBuyClick()
    setStep(3)
  }

  const goWhatsApp = () => {
    const msg = `Hi Batuli Prime! 📚\n\nMy name is *${name.trim()}*.\nPhone / M-Pesa: ${phone.trim()}\n\nI want to buy the ebook:\n*"I Lost a Home, But Not My Dream"*\nPrice: ${EBOOK.price}\n\nPlease guide me on how to pay and receive the ebook. Thank you!`
    window.open(WHATSAPP_URL(msg), '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div
      role="dialog" aria-modal="true" aria-label="Buy Ebook"
      style={{
        position: 'fixed', inset: 0, zIndex: 800,
        background: 'rgba(4,12,24,0.9)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: '#112249',
        border: `1px solid ${COLORS.line}`,
        borderRadius: 16,
        padding: '36px 32px',
        maxWidth: 480, width: '100%',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        animation: 'fadeInUp .35s ease',
        maxHeight: '90vh', overflowY: 'auto',
      }}>
        <button onClick={onClose} aria-label="Close" style={{
          float: 'right', background: 'none', border: 'none',
          color: 'rgba(244,246,251,0.4)', fontSize: 22, cursor: 'pointer',
          marginTop: -8, marginRight: -8,
        }}>✕</button>

        {step === 1 && (
          /* Step 1 — Preview */
          <>
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginBottom: 24 }}>
              <EbookCover size="sm" />
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 6 }}>Featured Ebook</div>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 17, color: '#F4F6FB', lineHeight: 1.3, marginBottom: 10 }}>
                  "{EBOOK.title}"
                </h2>
                <div style={{ fontSize: 12, color: 'rgba(244,246,251,0.5)', marginBottom: 10 }}>by {EBOOK.author}</div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 24, color: COLORS.gold2, fontWeight: 700 }}>{EBOOK.price}</div>
              </div>
            </div>

            <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.65)', lineHeight: 1.85, marginBottom: 20 }}>
              {EBOOK.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {EBOOK.features.map(f => (
                <div key={f} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'rgba(244,246,251,0.7)' }}>
                  <span style={{ color: COLORS.gold }}>✓</span>{f}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => { track.ebookBuyClick(); setStep(2) }} style={{
                flex: 1, padding: 13,
                background: COLORS.gold, color: COLORS.navy,
                border: 'none', borderRadius: 8,
                fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Buy Now — {EBOOK.price}
              </button>
              <button onClick={() => { track.ebookSample(); window.open(EBOOK.amazon, '_blank') }} style={{
                padding: '13px 18px',
                background: 'transparent', color: COLORS.gold,
                border: `1px solid rgba(201,146,26,0.4)`,
                borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Amazon
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          /* Step 2 — Order form */
          <>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 8 }}>Order Details</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#F4F6FB', marginBottom: 6 }}>Complete Your Order</h2>
            <p style={{ fontSize: 13, color: 'rgba(244,246,251,0.55)', marginBottom: 24, lineHeight: 1.7 }}>
              We'll send your ebook PDF via WhatsApp after confirming your M-Pesa or mobile payment.
            </p>

            {[
              { label: 'Full Name *', val: name, set: setName, ph: 'Your name', type: 'text' },
              { label: 'Phone / WhatsApp / M-Pesa *', val: phone, set: setPhone, ph: '+255 xxx xxx xxx', type: 'tel' },
            ].map(f => (
              <div key={f.label} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 7 }}>
                  {f.label}
                </label>
                <input
                  type={f.type} placeholder={f.ph}
                  value={f.val} onChange={e => f.set(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleOrder()}
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

            <div style={{ background: 'rgba(201,146,26,0.08)', borderRadius: 8, padding: '12px 14px', marginBottom: 20, fontSize: 13, color: 'rgba(244,246,251,0.6)', lineHeight: 1.7 }}>
              💳 Payment via M-Pesa, Tigo Pesa, Airtel Money, or Bank Transfer.<br/>
              📩 PDF sent to your WhatsApp within 1 hour of payment confirmation.
            </div>

            <button onClick={handleOrder} style={{
              width: '100%', padding: 13,
              background: COLORS.gold, color: COLORS.navy,
              border: 'none', borderRadius: 8,
              fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              Send Order via WhatsApp →
            </button>
            <button onClick={() => setStep(1)} style={{
              width: '100%', marginTop: 10,
              background: 'none', border: 'none',
              color: 'rgba(244,246,251,0.4)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              ← Back
            </button>
          </>
        )}

        {step === 3 && (
          /* Step 3 — WhatsApp confirm */
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>📚</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#F4F6FB', marginBottom: 12 }}>
              One tap away!
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.65)', lineHeight: 1.8, marginBottom: 28 }}>
              Hi <strong style={{ color: COLORS.gold2 }}>{name}</strong>! Tap below to send your order to Batuli Prime on WhatsApp. We'll confirm payment and send your PDF within 1 hour.
            </p>
            <button onClick={goWhatsApp} style={{
              width: '100%', padding: 14,
              background: '#25D366', color: '#fff',
              border: 'none', borderRadius: 8,
              fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}>
              💬 Complete Order on WhatsApp
            </button>
            <p style={{ fontSize: 11, color: 'rgba(244,246,251,0.3)', marginTop: 14 }}>
              Your order details are pre-filled. Just tap Send.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
