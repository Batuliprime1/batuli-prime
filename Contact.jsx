import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import { COLORS, BRAND, WHATSAPP_URL } from '../utils/constants'
import { track } from '../utils/analytics'

export default function Contact({ showToast }) {
  const [form,  setForm]  = useState({ name: '', email: '', subject: '', message: '' })
  const [busy,  setBusy]  = useState(false)

  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast('⚠ Please fill in all required fields.', 'error')
      return
    }
    setBusy(true)
    // Route message to WhatsApp (no backend needed)
    const msg = `📩 *New Website Message*\n\nName: *${form.name}*\nContact: ${form.email}\nSubject: ${form.subject || '(none)'}\n\nMessage:\n${form.message}`
    track.contactSubmit()
    window.open(WHATSAPP_URL(msg), '_blank', 'noopener,noreferrer')
    setForm({ name: '', email: '', subject: '', message: '' })
    setBusy(false)
    showToast('✓ Message sent! We\'ll reply within 24 hours.', 'success')
  }

  const inputStyle = {
    width: '100%', padding: '12px 14px',
    background: COLORS.navy, border: `1px solid ${COLORS.line}`,
    borderRadius: 8, color: '#F4F6FB', fontSize: 14,
    outline: 'none', fontFamily: 'inherit', transition: 'border-color .2s',
  }

  const CONTACT_ITEMS = [
    { icon: '💬', label: 'WhatsApp',     val: `+${BRAND.whatsapp}`,    action: () => { track.whatsappClick('contact_page'); window.open(WHATSAPP_URL(), '_blank') } },
    { icon: '📧', label: 'Email',         val: BRAND.email,             action: () => window.open(`mailto:${BRAND.email}`) },
    { icon: '📺', label: 'YouTube',       val: '@BCreativeAIStories',   action: () => window.open(BRAND.youtube, '_blank') },
    { icon: '🎵', label: 'TikTok',        val: '@_bcreative',           action: () => window.open(BRAND.tiktok, '_blank') },
    { icon: '📸', label: 'Instagram',     val: '@mtaa.stories',         action: () => window.open(BRAND.instagram, '_blank') },
    { icon: '📍', label: 'Location',      val: BRAND.location,          action: null },
  ]

  return (
    <>
      <Helmet>
        <title>Contact — Batuli Prime</title>
        <meta name="description" content="Contact Batuli Prime — AI training, ebook orders, and creative services. WhatsApp, email, or the contact form. Tanzania, East Africa." />
      </Helmet>

      <div style={{ padding: '90px 20px 70px', background: `linear-gradient(135deg, #071020, ${COLORS.navy2})`, textAlign: 'center', borderBottom: `1px solid ${COLORS.line}` }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
            <span style={{ fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Get In Touch</span>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem,6vw,3.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 16 }}>
            Contact <span style={{ color: COLORS.gold2 }}>Batuli Prime</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(244,246,251,0.6)', maxWidth: 480, margin: '0 auto', lineHeight: 1.85 }}>
            Ready to enroll, order a service, or have a question? We respond within 24 hours.
          </p>
        </Reveal>
      </div>

      <div style={{ maxWidth: 920, margin: '0 auto', padding: '72px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 44 }} className="two-col">

          {/* Info */}
          <Reveal dir="left">
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#F4F6FB', fontWeight: 700, marginBottom: 28 }}>Let's talk.</h2>

            {CONTACT_ITEMS.map(item => (
              <div
                key={item.label}
                onClick={item.action ?? undefined}
                style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  marginBottom: 12, padding: '13px 16px',
                  background: COLORS.navy2, border: `1px solid ${COLORS.line}`,
                  borderRadius: 10, transition: 'border-color .2s',
                  cursor: item.action ? 'pointer' : 'default',
                }}
                onMouseEnter={e => item.action && (e.currentTarget.style.borderColor = COLORS.gold)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = COLORS.line)}
              >
                <div style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(244,246,251,0.68)' }}>{item.val}</div>
                </div>
              </div>
            ))}

            <button
              onClick={() => { track.whatsappClick('contact_big_button'); window.open(WHATSAPP_URL(), '_blank', 'noopener,noreferrer') }}
              style={{
                width: '100%', marginTop: 8, padding: '14px',
                background: '#25D366', color: '#fff',
                border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 800,
                cursor: 'pointer', fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}
            >
              💬 Chat on WhatsApp Now
            </button>
          </Reveal>

          {/* Form */}
          <Reveal dir="right">
            <div style={{ background: COLORS.navy2, border: `1px solid ${COLORS.line}`, borderRadius: 16, padding: '36px 30px' }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#F4F6FB', marginBottom: 24 }}>Send a Message</h3>

              {[
                { label: 'Full Name *',          key: 'name',    type: 'text',  ph: 'Your full name' },
                { label: 'Email or WhatsApp *',  key: 'email',   type: 'text',  ph: 'Email or +255 xxx xxx xxx' },
                { label: 'Subject',              key: 'subject', type: 'text',  ph: 'What is this about?' },
              ].map(f => (
                <div key={f.key} style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 7 }}>{f.label}</label>
                  <input
                    type={f.type} placeholder={f.ph}
                    value={form[f.key]} onChange={set(f.key)}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = COLORS.gold}
                    onBlur={e => e.target.style.borderColor = COLORS.line}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 22 }}>
                <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 7 }}>Message *</label>
                <textarea
                  placeholder="Tell us how we can help you..."
                  value={form.message} onChange={set('message')} rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = COLORS.gold}
                  onBlur={e => e.target.style.borderColor = COLORS.line}
                />
              </div>

              <button onClick={handleSubmit} disabled={busy} style={{
                width: '100%', padding: '13px',
                background: busy ? 'rgba(201,146,26,0.5)' : COLORS.gold,
                color: COLORS.navy, border: 'none', borderRadius: 8,
                fontSize: 14, fontWeight: 800, cursor: busy ? 'not-allowed' : 'pointer',
                letterSpacing: '0.06em', fontFamily: 'inherit', transition: 'background .2s',
              }}>
                {busy ? 'Sending…' : 'Send Message via WhatsApp →'}
              </button>
              <p style={{ fontSize: 11, color: 'rgba(244,246,251,0.28)', marginTop: 12, textAlign: 'center' }}>
                Messages are delivered via WhatsApp. We reply within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`@media(max-width:640px){ .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
