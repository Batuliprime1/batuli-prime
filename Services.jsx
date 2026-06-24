import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import { COLORS, WHATSAPP_URL } from '../utils/constants'
import { track } from '../utils/analytics'

const SERVICES = [
  {
    icon: '🎬', title: 'AI Video Creation',
    desc: 'Professional AI-animated videos for businesses, brands, NGOs, and content creators. From concept to final edit — using Grok, Google Flow, and CapCut. We\'ve produced viral content reaching millions of viewers across East Africa.',
    tags: ['Corporate Videos', 'Social Content', 'Documentaries', 'AI Animation'],
    msg: 'Hi Batuli Prime! I\'m interested in AI Video Creation services. Can we discuss my project?',
  },
  {
    icon: '📖', title: 'Story Writing',
    desc: 'Compelling scripts, AI-powered stories, and narrative content for series, ads, social media, and digital platforms. Bilingual Swahili & English. We\'ve written 33+ episodes of the hit Mtaa Stories series.',
    tags: ['Scripts', 'Series Writing', 'Ad Copy', 'Digital Stories'],
    msg: 'Hi Batuli Prime! I need Story Writing services. Can we talk about my project?',
  },
  {
    icon: '🎙️', title: 'Voiceover Services',
    desc: 'Studio-quality AI voiceovers in multiple languages and styles using ElevenLabs. Perfect for videos, audiobooks, advertisements, and e-learning content. Fast turnaround, professional quality.',
    tags: ['Swahili', 'English', 'Multiple Voices', 'Rapid Turnaround'],
    msg: 'Hi Batuli Prime! I need Voiceover services for my project. Can we discuss?',
  },
  {
    icon: '📱', title: 'Social Media Content',
    desc: 'Full social media content creation — reels, posts, short videos, and campaign strategies for TikTok, Facebook, Instagram, and YouTube. Consistent, engaging content that grows your audience and drives business.',
    tags: ['TikTok', 'Facebook Reels', 'YouTube Shorts', 'Content Calendar'],
    msg: 'Hi Batuli Prime! I need Social Media Content Creation services. Let\'s talk!',
  },
  {
    icon: '💼', title: 'Business Promotions',
    desc: 'AI-powered promotional videos and campaigns for businesses, product launches, and brands across Tanzania and East Africa. We\'ve worked on TANROADS documentaries and viral product campaigns.',
    tags: ['Product Videos', 'Brand Campaigns', 'Launch Content', 'Testimonials'],
    msg: 'Hi Batuli Prime! I need Business Promotion services for my brand. Can we discuss?',
  },
]

export default function Services() {
  const handleService = (msg) => {
    track.serviceClick(msg.split('!')[0].replace('Hi Batuli Prime! I', '').trim())
    window.open(WHATSAPP_URL(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Helmet>
        <title>Services — Batuli Prime AI Creative Services</title>
        <meta name="description" content="Professional AI creative services: AI video production, story writing, voiceovers, social media content, and business promotions for brands across East Africa." />
      </Helmet>

      <div style={{ padding: '90px 20px 70px', background: `linear-gradient(135deg, #071020, ${COLORS.navy2})`, textAlign: 'center', borderBottom: `1px solid ${COLORS.line}` }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
            <span style={{ fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>What We Offer</span>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem,6vw,3.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 16 }}>
            Our <span style={{ color: COLORS.gold2 }}>Services</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(244,246,251,0.6)', maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>
            Professional AI-powered creative services for businesses and brands across East Africa.
          </p>
        </Reveal>
      </div>

      <div style={{ maxWidth: 940, margin: '0 auto', padding: '72px 20px' }}>
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <div style={{
              background: COLORS.navy2, border: `1px solid ${COLORS.line}`,
              borderRadius: 14, padding: '36px 30px', marginBottom: 18,
              display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, alignItems: 'start',
              transition: 'border-color .25s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.gold}
              onMouseLeave={e => e.currentTarget.style.borderColor = COLORS.line}
            >
              <div style={{ fontSize: 44, lineHeight: 1 }}>{s.icon}</div>
              <div>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#F4F6FB', marginBottom: 12, fontWeight: 700 }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.62)', lineHeight: 1.85, marginBottom: 18 }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: '4px 11px', background: 'rgba(201,146,26,0.1)', border: `1px solid rgba(201,146,26,0.25)`, borderRadius: 20, color: COLORS.gold, fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
                <button onClick={() => handleService(s.msg)} style={{
                  padding: '10px 22px', background: 'transparent', color: COLORS.gold,
                  border: `1.5px solid rgba(201,146,26,0.4)`, borderRadius: 8,
                  fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                  transition: 'all .2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,146,26,0.1)'; e.currentTarget.style.borderColor = COLORS.gold }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,146,26,0.4)' }}
                >
                  💬 Request This Service →
                </button>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.35}>
          <div style={{ textAlign: 'center', marginTop: 52, padding: '48px 28px', background: `linear-gradient(135deg, ${COLORS.gold} 0%, #9e7214 100%)`, borderRadius: 16 }}>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: COLORS.navy, fontWeight: 800, marginBottom: 10 }}>
              Need something custom?
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(11,27,58,0.72)', marginBottom: 24 }}>
              Tell us your project and we'll build you a custom package.
            </p>
            <button onClick={() => { track.whatsappClick('services_cta'); window.open(WHATSAPP_URL('Hi Batuli Prime! I need a custom quote for a creative project. Can we talk?'), '_blank') }} style={{
              padding: '12px 32px', background: COLORS.navy, color: COLORS.gold2,
              border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              💬 Get a Custom Quote
            </button>
          </div>
        </Reveal>
      </div>
    </>
  )
}
