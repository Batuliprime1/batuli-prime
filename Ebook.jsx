import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import EbookCover from '../components/EbookCover'
import EbookModal from '../components/EbookModal'
import { COLORS, EBOOK } from '../utils/constants'
import { track } from '../utils/analytics'

const LESSONS = [
  { icon: '🏠', title: 'Home is not a building',       desc: 'Discover why your mindset is your most valuable real estate — the one no one can take.' },
  { icon: '💪', title: 'Resilience under pressure',    desc: 'Practical frameworks for keeping going when everything around you says stop.' },
  { icon: '🎯', title: 'Clarity after loss',            desc: 'How losing everything can paradoxically lead to a clearer, stronger direction.' },
  { icon: '🔥', title: 'Turning pain into purpose',    desc: 'The transformation from victim of circumstance to architect of your own destiny.' },
  { icon: '🌟', title: 'Dream protection strategies',  desc: 'How to guard your vision against doubt, discouragement, and delay — every day.' },
  { icon: '🚀', title: 'Taking the first step anyway', desc: 'Action frameworks for moving forward even when you feel completely unready.' },
]

const REVIEWS = [
  { name: 'Sarah T.',    loc: 'Dar es Salaam',   text: 'This book hit me at the right time. I was about to give up — so glad I didn\'t.', stars: 5 },
  { name: 'Michael K.', loc: 'Nairobi, Kenya',   text: 'Raw, real, and deeply motivating. Batuli\'s story made me feel my struggles are not in vain.', stars: 5 },
  { name: 'Fatuma M.',  loc: 'Mwanza, Tanzania', text: 'I read it in one sitting. Every page reminded me why I started. A must-read for every dreamer.', stars: 5 },
]

const FAQS = [
  { q: 'What format is the ebook?',          a: 'The ebook is delivered as a PDF file, readable on any phone, tablet, or computer.' },
  { q: 'How do I receive it after purchase?', a: 'You receive instant access — after payment confirmation, the PDF is sent directly to your WhatsApp.' },
  { q: 'Is it available in Swahili?',         a: 'The current edition is in English. A Swahili edition is in active development.' },
  { q: 'How do I pay?',                       a: 'We accept M-Pesa, Tigo Pesa, Airtel Money, and Bank Transfer. Payment instructions are sent via WhatsApp.' },
  { q: 'What if I don\'t find it helpful?',   a: 'Reach out to us within 7 days of purchase and we\'ll make it right — no questions asked.' },
]

export default function Ebook({ openEbook }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <Helmet>
        <title>Ebook — "I Lost a Home, But Not My Dream" | Batuli Prime</title>
        <meta name="description" content="Get the inspiring ebook 'I Lost a Home, But Not My Dream' by Batuli Prime. An uplifting story of resilience, hope, and chasing your dreams. Instant PDF download." />
      </Helmet>

      {/* Hero */}
      <section style={{ padding: '90px 20px 70px', background: `linear-gradient(135deg, #071020, ${COLORS.navy2})`, borderBottom: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 940, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 52, alignItems: 'center' }}
             className="two-col">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 26, height: 2, background: COLORS.gold }}/>
              <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Featured Ebook</span>
            </div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem,5vw,3rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 14, lineHeight: 1.2 }}>
              "{EBOOK.title}"
            </h1>
            <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.55)', marginBottom: 6 }}>
              <strong style={{ color: COLORS.gold2 }}>Author:</strong> {EBOOK.author}
            </p>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: COLORS.gold2, fontWeight: 700, marginBottom: 16 }}>{EBOOK.price}</div>
            <p style={{ fontSize: 15, color: 'rgba(244,246,251,0.62)', lineHeight: 1.88, marginBottom: 22, maxWidth: 490 }}>
              {EBOOK.desc}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {EBOOK.features.map(f => (
                <span key={f} style={{ fontSize: 12, padding: '5px 12px', background: 'rgba(201,146,26,0.1)', border: `1px solid rgba(201,146,26,0.28)`, borderRadius: 20, color: COLORS.gold2, fontWeight: 600 }}>{f}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={() => { track.ebookBuyClick(); openEbook() }} style={{
                padding: '13px 30px', background: COLORS.gold, color: COLORS.navy,
                border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
              }}>Buy Now — {EBOOK.price}</button>
              <button onClick={() => { track.ebookSample(); window.open(EBOOK.amazon, '_blank') }} style={{
                padding: '13px 24px', background: 'transparent', color: COLORS.gold,
                border: `1.5px solid rgba(201,146,26,0.4)`, borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
              }}>View on Amazon</button>
            </div>
          </Reveal>

          <Reveal delay={0.2} dir="right">
            <EbookCover size="lg" onClick={() => { track.ebookBuyClick(); openEbook() }} />
          </Reveal>
        </div>
      </section>

      {/* Key Lessons */}
      <section style={{ padding: '72px 20px', background: COLORS.navy }}>
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>What's Inside</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 40 }}>
              Key lessons from the <em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>book.</em>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 18 }}>
            {LESSONS.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.08}>
                <div style={{ background: COLORS.navy2, border: `1px solid ${COLORS.line}`, borderRadius: 12, padding: '26px 22px' }}>
                  <div style={{ fontSize: 30, marginBottom: 14 }}>{l.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.gold2, marginBottom: 8 }}>{l.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(244,246,251,0.58)', lineHeight: 1.78 }}>{l.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '72px 20px', background: COLORS.navy2 }}>
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Reader Reviews</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 36 }}>
              What readers <em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>are saying.</em>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 18 }}>
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <div style={{ background: COLORS.navy, border: `1px solid ${COLORS.line}`, borderRadius: 12, padding: '24px 20px' }}>
                  <div style={{ color: COLORS.gold, fontSize: 14, marginBottom: 12 }}>{'★'.repeat(r.stars)}</div>
                  <p style={{ fontSize: 13, color: 'rgba(244,246,251,0.72)', lineHeight: 1.82, marginBottom: 14, fontStyle: 'italic' }}>"{r.text}"</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#F4F6FB' }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>{r.loc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 20px', background: COLORS.navy }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>FAQ</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 32 }}>
              Frequently Asked <em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>Questions.</em>
            </h2>
          </Reveal>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div style={{ background: COLORS.navy2, border: `1px solid ${COLORS.line}`, borderRadius: 10, marginBottom: 10, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', padding: '16px 20px',
                    background: 'none', border: 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    color: '#F4F6FB', fontSize: 14, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', gap: 12,
                  }}>
                  {f.q}
                  <span style={{ color: COLORS.gold, fontSize: 20, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform .2s', lineHeight: 1 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 20px 18px', fontSize: 13, color: 'rgba(244,246,251,0.62)', lineHeight: 1.82, borderTop: `1px solid ${COLORS.line}` }}>
                    <div style={{ paddingTop: 14 }}>{f.a}</div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Secure buy */}
      <section style={{ padding: '72px 20px', textAlign: 'center', background: '#071020', borderTop: `1px solid ${COLORS.line}` }}>
        <Reveal>
          <EbookCover size="sm" onClick={() => { track.ebookBuyClick(); openEbook() }} />
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,4vw,2rem)', color: '#F4F6FB', fontWeight: 700, margin: '28px 0 12px' }}>
            Get your copy today.
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.45)', marginBottom: 30 }}>Instant digital download. Read anywhere, on any device.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => { track.ebookBuyClick(); openEbook() }} style={{
              padding: '13px 32px', background: COLORS.gold, color: COLORS.navy,
              border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
            }}>🔒 Secure Purchase — {EBOOK.price}</button>
            <button onClick={() => window.open(EBOOK.amazon, '_blank')} style={{
              padding: '13px 24px', background: 'transparent', color: COLORS.gold,
              border: `1.5px solid rgba(201,146,26,0.4)`, borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}>Also on Amazon</button>
          </div>
          <p style={{ fontSize: 11, color: 'rgba(244,246,251,0.25)', marginTop: 16 }}>✓ PDF format · ✓ Delivered via WhatsApp · ✓ M-Pesa accepted</p>
        </Reveal>
      </section>

      <style>{`@media(max-width:640px){ .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
