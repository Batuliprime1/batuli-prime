import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import EnrollModal from '../components/EnrollModal'
import { COURSES, COLORS } from '../utils/constants'

function PriceCard({ plan, onEnroll }) {
  const [hov, setHov] = useState(false)
  const f = plan.featured
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: f ? `linear-gradient(145deg, ${COLORS.gold} 0%, #9e7214 100%)` : COLORS.navy2,
        border: `2px solid ${f ? COLORS.gold2 : hov ? COLORS.gold : COLORS.line}`,
        borderRadius: 16, padding: '36px 28px',
        transform: f ? 'scale(1.04)' : hov ? 'translateY(-4px)' : 'none',
        transition: 'all .25s',
        boxShadow: f ? `0 20px 56px rgba(201,146,26,0.28)` : 'none',
        position: 'relative',
      }}
    >
      {plan.badge && (
        <div style={{
          position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)',
          background: f ? COLORS.navy : COLORS.navy3,
          color: COLORS.gold2,
          padding: '5px 18px', borderRadius: 20, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          border: `1px solid rgba(201,146,26,0.4)`,
          whiteSpace: 'nowrap',
        }}>
          {plan.badge}
        </div>
      )}

      <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: f ? COLORS.navy : COLORS.gold, marginBottom: 10 }}>
        {plan.name} Package
      </div>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 34, fontWeight: 800, color: f ? COLORS.navy : '#F4F6FB', lineHeight: 1 }}>
        {plan.price}
      </div>
      <div style={{ fontSize: 12, color: f ? 'rgba(11,27,58,0.55)' : 'rgba(244,246,251,0.4)', marginBottom: 28 }}>{plan.period}</div>

      <div style={{ borderTop: `1px solid ${f ? 'rgba(11,27,58,0.15)' : COLORS.line}`, paddingTop: 22, marginBottom: 28 }}>
        {plan.features.map(feat => (
          <div key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: f ? 'rgba(11,27,58,0.85)' : 'rgba(244,246,251,0.68)', marginBottom: 11, lineHeight: 1.5 }}>
            <span style={{ color: f ? COLORS.navy : COLORS.gold, fontWeight: 800, flexShrink: 0 }}>✓</span>{feat}
          </div>
        ))}
      </div>

      <button onClick={() => onEnroll(plan)} style={{
        width: '100%', padding: 13, borderRadius: 8, border: 'none',
        background: f ? COLORS.navy : COLORS.gold,
        color: f ? COLORS.gold2 : COLORS.navy,
        fontSize: 14, fontWeight: 800, cursor: 'pointer',
        letterSpacing: '0.06em', fontFamily: 'inherit', transition: 'all .2s',
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = '.88'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Enroll Now →
      </button>
    </div>
  )
}

export default function Courses() {
  const [enrollCourse, setEnrollCourse] = useState(null)

  return (
    <>
      <Helmet>
        <title>Courses — Batuli Prime AI Training</title>
        <meta name="description" content="AI training courses in Tanzania. Beginner TZS 20,000/month, Intermediate TZS 30,000/month, Advanced TZS 50,000/month. Learn AI video creation, voiceovers, CapCut editing, and more." />
      </Helmet>

      <div style={{ padding: '90px 20px 70px', background: `linear-gradient(135deg, #071020, ${COLORS.navy2})`, textAlign: 'center', borderBottom: `1px solid ${COLORS.line}` }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
            <span style={{ fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Training Packages</span>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem,6vw,3.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 16 }}>
            Choose Your <span style={{ color: COLORS.gold2 }}>Learning Path</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(244,246,251,0.6)', maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>
            Flexible, practical AI training designed for Tanzanian creators. Start where you are, grow at your own pace.
          </p>
        </Reveal>
      </div>

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '72px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 24, alignItems: 'start', marginBottom: 60 }}>
          {COURSES.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
              <PriceCard plan={plan} onEnroll={setEnrollCourse} />
            </Reveal>
          ))}
        </div>

        {/* All-included */}
        <Reveal delay={0.3}>
          <div style={{ background: COLORS.navy2, border: `1px solid ${COLORS.line}`, borderRadius: 16, padding: '32px 28px' }}>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#F4F6FB', marginBottom: 20 }}>All packages include:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
              {['Mobile-first training (no PC needed)', 'Swahili & English instruction', 'Real project practice', 'Access to course materials', 'WhatsApp community support', 'Practical assignments & feedback'].map(feat => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(244,246,251,0.68)' }}>
                  <span style={{ color: COLORS.gold, fontWeight: 700 }}>✓</span>{feat}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {enrollCourse && (
        <EnrollModal course={enrollCourse} onClose={() => setEnrollCourse(null)} />
      )}
    </>
  )
}
