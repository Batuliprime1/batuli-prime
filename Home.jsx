import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import EbookCover from '../components/EbookCover'
import { COLORS, WHATSAPP_URL } from '../utils/constants'
import { track } from '../utils/analytics'

const STATS = [
  { num: '4.6M+', lbl: 'Total Viewers' },
  { num: '154K',  lbl: 'Viral Views'   },
  { num: '33+',   lbl: 'Episodes Made' },
  { num: '100+',  lbl: 'Students Trained'},
]

const FEATURES = [
  { icon: '🎬', title: 'AI Video Production',   desc: 'Create professional AI-animated videos using Grok, Google Flow, and CapCut — from your phone.' },
  { icon: '📖', title: 'Story Writing',          desc: 'Craft compelling scripts, AI stories, and content that captures audiences at first glance.' },
  { icon: '🎙️', title: 'Voiceover Services',     desc: 'Studio-quality AI voiceovers via ElevenLabs — Swahili, English, and more.' },
  { icon: '📱', title: 'Social Media Growth',    desc: 'Build an audience and monetize content on TikTok, Facebook, and YouTube.' },
  { icon: '💼', title: 'Business Promotions',   desc: 'AI-powered promo videos and campaigns for businesses across East Africa.' },
  { icon: '🎓', title: 'Online Training',        desc: 'Structured courses from beginner to advanced, with WhatsApp support included.' },
]

const TESTIMONIALS = [
  { name: 'Christina M.', role: 'AI Creator Student', text: 'Batuli Prime imenifundisha kutengeneza video za AI kutoka sifuri. Sasa nina wateja wangu wenyewe!', stars: 5 },
  { name: 'Vonnie K.',    role: 'Digital Creator',     text: 'The AI Video Blueprint ebook changed how I think about online income. Step-by-step na rahisi kuelewa.', stars: 5 },
  { name: 'James O.',     role: 'Entrepreneur, DSM',  text: 'Nimeweza kutengeneza content ya biashara yangu kwa kutumia AI. Mauzo yameongezeka zaidi ya 40%.', stars: 5 },
  { name: 'Amina S.',     role: 'Content Creator',    text: 'Training ya Batuli Prime ni ya vitendo kabisa. Simu yangu sasa ni studio yangu!', stars: 5 },
]

function FeatureCard({ icon, title, desc }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? COLORS.navy3 : COLORS.navy2,
        border: `1px solid ${hov ? COLORS.gold : COLORS.line}`,
        borderRadius: 12, padding: '28px 22px',
        transition: 'all .25s',
        transform: hov ? 'translateY(-3px)' : 'none',
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
      <div style={{ fontSize: 16, fontWeight: 700, color: '#F4F6FB', marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'rgba(244,246,251,0.6)', lineHeight: 1.75 }}>{desc}</div>
    </div>
  )
}

function Stars({ count }) {
  return <span style={{ color: COLORS.gold, fontSize: 14 }}>{'★'.repeat(count)}</span>
}

export default function Home({ goTo, openEbook }) {
  return (
    <>
      <Helmet>
        <title>Batuli Prime — Learn AI, Create Content, Build Your Future</title>
        <meta name="description" content="Tanzania's top AI skills training and digital content brand. Learn AI video creation, get our ebook, and build real online income — starting with your smartphone." />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #071020 0%, #0B1B3A 55%, #112249 100%)',
        padding: '80px 20px 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid bg */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: `linear-gradient(rgba(201,146,26,1) 1px,transparent 1px),linear-gradient(90deg,rgba(201,146,26,1) 1px,transparent 1px)`,
          backgroundSize: '52px 52px',
        }}/>
        {/* Gold orb */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '15%', right: '-8%',
          width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,146,26,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>

        <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}
             className="hero-grid">
          <div>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                <div style={{ width: 26, height: 2, background: COLORS.gold }}/>
                <span style={{ fontSize: 11, letterSpacing: '0.26em', color: COLORS.gold2, fontWeight: 700, textTransform: 'uppercase' }}>
                  AI Stories · Digital Products · Online Training
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 'clamp(2rem, 6vw, 3.8rem)',
                color: '#F4F6FB', lineHeight: 1.15,
                fontWeight: 700, marginBottom: 20,
              }}>
                Learn AI,<br/>Create Content,<br/>
                <em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>Build Your Future.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p style={{ fontSize: 16, color: 'rgba(244,246,251,0.68)', lineHeight: 1.8, maxWidth: 490, marginBottom: 36, fontWeight: 300 }}>
                Batuli Prime teaches you how to use AI tools to create stunning videos, write stories, and build sustainable income online — starting with just your smartphone.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button onClick={() => { track.navClick('Courses'); goTo('Courses') }}
                  style={{
                    padding: '13px 30px', background: COLORS.gold, color: COLORS.navy,
                    border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 800,
                    cursor: 'pointer', letterSpacing: '0.06em', fontFamily: 'inherit',
                    transition: 'all .2s', boxShadow: '0 4px 16px rgba(201,146,26,0.35)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = COLORS.gold2; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = COLORS.gold; e.currentTarget.style.transform = 'none' }}
                >
                  Join Training
                </button>
                <button onClick={openEbook}
                  style={{
                    padding: '13px 30px', background: 'transparent', color: COLORS.gold,
                    border: `1.5px solid rgba(201,146,26,0.4)`,
                    borderRadius: 8, fontSize: 14, fontWeight: 700,
                    cursor: 'pointer', letterSpacing: '0.06em', fontFamily: 'inherit',
                    transition: 'all .2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.gold; e.currentTarget.style.background = 'rgba(201,146,26,0.07)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,146,26,0.4)'; e.currentTarget.style.background = 'transparent' }}
                >
                  Get the Ebook
                </button>
              </div>
            </Reveal>

            {/* Stats strip */}
            <Reveal delay={0.45}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
                gap: 16, marginTop: 52,
                paddingTop: 32, borderTop: `1px solid rgba(201,146,26,0.18)`,
              }}>
                {STATS.map(s => (
                  <div key={s.lbl}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.gold2, fontFamily: 'Georgia, serif' }}>{s.num}</div>
                    <div style={{ fontSize: 10, color: 'rgba(244,246,251,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 3 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 3D Ebook */}
          <Reveal delay={0.2} dir="right">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <EbookCover size="lg" onClick={openEbook} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: COLORS.gold, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>Featured Ebook</div>
                <button onClick={openEbook} style={{
                  padding: '9px 22px', background: COLORS.gold, color: COLORS.navy,
                  border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 800,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}>
                  Get Your Copy
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <style>{`.hero-grid { @media (max-width:640px) { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{
        overflow: 'hidden',
        borderTop: `1px solid ${COLORS.line}`,
        borderBottom: `1px solid ${COLORS.line}`,
        background: COLORS.navy2, padding: '13px 0',
      }} aria-hidden="true">
        <div style={{ display: 'flex', gap: 48, width: 'max-content', animation: 'marquee 22s linear infinite' }}>
          {[...Array(2)].flatMap(() =>
            ['AI Stories', '◆', 'Digital Products', '◆', 'Online Training', '◆', 'Video Creation', '◆', 'AI Skills', '◆', 'Tanzania', '◆', 'East Africa', '◆', 'Beyond Ordinary'].map((w, i) => (
              <span key={`${w}-${i}`} style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: w === '◆' ? 'rgba(244,246,251,0.2)' : COLORS.gold, whiteSpace: 'nowrap', fontWeight: 600 }}>{w}</span>
            ))
          )}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section style={{ padding: '80px 20px', background: COLORS.navy }} aria-label="Our services">
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.7rem,4vw,2.6rem)', color: '#F4F6FB', marginBottom: 14, fontWeight: 700 }}>
              Your AI journey starts <em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>here.</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(244,246,251,0.55)', maxWidth: 520, marginBottom: 48, lineHeight: 1.8 }}>
              We combine practical AI skills training with real creative production — so you don't just learn, you earn.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <FeatureCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EBOOK BANNER ── */}
      <section style={{ padding: '80px 20px', background: '#071020' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}
             className="hero-grid">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Featured Ebook</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,3.5vw,2.3rem)', color: '#F4F6FB', marginBottom: 16, fontWeight: 700, lineHeight: 1.25 }}>
              "I Lost a Home, But Not My Dream"
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(244,246,251,0.6)', lineHeight: 1.85, marginBottom: 16, maxWidth: 480 }}>
              An inspiring true story of resilience, hope, and the courage to keep chasing your dreams despite life's hardest challenges.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {['📄 PDF Download', '⚡ Instant Access', '🌟 Motivational'].map(f => (
                <span key={f} style={{ fontSize: 12, padding: '5px 12px', background: 'rgba(201,146,26,0.1)', border: `1px solid rgba(201,146,26,0.28)`, borderRadius: 20, color: COLORS.gold2, fontWeight: 600 }}>{f}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button onClick={openEbook} style={{
                padding: '12px 28px', background: COLORS.gold, color: COLORS.navy,
                border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
              }}>Buy Now</button>
              <button onClick={openEbook} style={{
                padding: '12px 24px', background: 'transparent', color: COLORS.gold,
                border: `1.5px solid rgba(201,146,26,0.4)`, borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
              }}>Read Sample</button>
            </div>
          </Reveal>
          <Reveal delay={0.2} dir="right">
            <EbookCover size="md" onClick={openEbook} />
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '80px 20px', background: COLORS.navy2 }} aria-label="Student testimonials">
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Testimonials</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#F4F6FB', marginBottom: 40, fontWeight: 700 }}>
              What our <em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>students say.</em>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.09}>
                <div style={{ background: COLORS.navy, border: `1px solid ${COLORS.line}`, borderRadius: 12, padding: '24px 20px' }}>
                  <Stars count={t.stars} />
                  <p style={{ fontSize: 13, color: 'rgba(244,246,251,0.72)', lineHeight: 1.8, margin: '12px 0 14px', fontStyle: 'italic' }}>"{t.text}"</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#F4F6FB' }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: COLORS.gold, marginTop: 2 }}>{t.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ padding: '72px 20px', textAlign: 'center', background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.gold2} 100%)` }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem,4vw,2.5rem)', color: COLORS.navy, fontWeight: 800, marginBottom: 12 }}>
            Ready to start building your future?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(11,27,58,0.7)', marginBottom: 30 }}>
            Join hundreds of creators already learning AI with Batuli Prime.
          </p>
          <button onClick={() => goTo('Courses')} style={{
            padding: '14px 40px', background: COLORS.navy, color: COLORS.gold2,
            border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 800,
            cursor: 'pointer', letterSpacing: '0.05em', fontFamily: 'inherit',
          }}>
            Enroll Today →
          </button>
        </Reveal>
      </section>
    </>
  )
}
