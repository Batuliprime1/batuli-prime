import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import { COLORS } from '../utils/constants'

const SKILLS = [
  { icon: '✍️', title: 'Script Writing',          desc: 'Write compelling scripts for AI videos, stories, and social content that hook audiences from the first second.' },
  { icon: '🖼️', title: 'AI Image Creation',        desc: 'Master Grok and similar tools to generate stunning, consistent AI images for brands, videos, and content.' },
  { icon: '🎬', title: 'Google Flow Video',         desc: 'Use Google Flow to produce smooth, cinematic AI video sequences directly from your prompts.' },
  { icon: '🎙️', title: 'Voiceovers (ElevenLabs)',  desc: 'Create natural, expressive AI voiceovers in Swahili, English, and more — studio quality from your phone.' },
  { icon: '✂️', title: 'CapCut Editing',            desc: 'Edit professional-grade videos on mobile — transitions, subtitles, music, and effects in minutes.' },
  { icon: '💰', title: 'Social Media Monetization', desc: 'Turn your skills into income on TikTok, Facebook, and YouTube through ads, partnerships, and digital products.' },
]

const VALUES = [
  { icon: '⚡', name: 'Excellence',    desc: 'Every deliverable we produce is held to a standard that could not be mistaken for anyone else\'s work.' },
  { icon: '🌍', name: 'African Pride', desc: 'Deeply rooted in East African culture and storytelling — building for Africa, from Africa.' },
  { icon: '🔥', name: 'Innovation',    desc: 'We embrace AI and technology as the creative language of our generation.' },
  { icon: '🤝', name: 'Impact',        desc: 'Every project we touch should leave people, businesses, and communities measurably better.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Batuli Prime</title>
        <meta name="description" content="Batuli Prime helps people in Tanzania and East Africa learn AI tools, create videos, write stories, and earn online. Founded by a published author and AI video producer." />
      </Helmet>

      {/* Page hero */}
      <div style={{ padding: '90px 20px 70px', background: `linear-gradient(135deg, #071020, ${COLORS.navy2})`, textAlign: 'center', borderBottom: `1px solid ${COLORS.line}` }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
            <span style={{ fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Our Story</span>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem,6vw,3.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 16 }}>
            About <span style={{ color: COLORS.gold2 }}>Batuli Prime</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(244,246,251,0.6)', maxWidth: 580, margin: '0 auto', lineHeight: 1.85 }}>
            Helping people across East Africa learn AI tools, create content, tell stories, and build sustainable income online.
          </p>
        </Reveal>
      </div>

      <div style={{ maxWidth: 940, margin: '0 auto', padding: '72px 20px' }}>

        {/* Split: story + mission */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center', marginBottom: 80 }}
             className="two-col">
          <Reveal dir="left">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 24, height: 2, background: COLORS.gold }}/>
              <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
              Built by a creator,<br/><em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>for creators.</em>
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.62)', lineHeight: 1.9, marginBottom: 14 }}>
              Founded by Baturi — a published Amazon author, AI video producer, and digital entrepreneur based in Tanzania — Batuli Prime exists to prove that you don't need expensive equipment or a foreign degree to build something extraordinary.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.62)', lineHeight: 1.9, marginBottom: 14 }}>
              Our flagship AI series, <em style={{ color: COLORS.gold2 }}>Mtaa Stories</em>, has reached over 4.6 million viewers. Our viral Juma's Chips video hit 154K views. We produced a TANROADS documentary for a World Bank-funded project — all using a smartphone and AI tools.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(244,246,251,0.62)', lineHeight: 1.9 }}>
              Now we teach others to do the same.
            </p>
          </Reveal>

          <Reveal dir="right">
            <div style={{ background: COLORS.navy2, border: `1px solid ${COLORS.line}`, borderRadius: 16, padding: '32px 28px' }}>
              {[
                { label: 'Mission', text: 'Make AI skills accessible to every African creator, regardless of budget or background.' },
                { label: 'Vision',  text: 'A generation of East African creators earning independently through AI and digital skills.' },
                { label: 'Method', text: 'Mobile-first, practical, Swahili/English bilingual training with real, measurable results.' },
              ].map((item, i) => (
                <div key={item.label} style={{ marginBottom: i < 2 ? 24 : 0, paddingBottom: i < 2 ? 24 : 0, borderBottom: i < 2 ? `1px solid rgba(201,146,26,0.12)` : 'none' }}>
                  <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 7 }}>{item.label}</div>
                  <div style={{ fontSize: 14, color: 'rgba(244,246,251,0.68)', lineHeight: 1.75 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Training curriculum */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
            <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>What You Learn</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 40 }}>
            Our training <em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>curriculum.</em>
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18, marginBottom: 80 }}>
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div style={{ background: COLORS.navy2, border: `1px solid ${COLORS.line}`, borderRadius: 12, padding: '26px 22px' }}>
                <div style={{ fontSize: 30, marginBottom: 14 }}>{s.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.gold2, marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(244,246,251,0.58)', lineHeight: 1.78 }}>{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Values */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, background: COLORS.gold }}/>
            <span style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold2, fontWeight: 700 }}>Our Values</span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', color: '#F4F6FB', fontWeight: 700, marginBottom: 36 }}>
            What we <em style={{ color: COLORS.gold2, fontStyle: 'italic' }}>stand for.</em>
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18 }}>
          {VALUES.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <div style={{ background: COLORS.navy2, border: `1px solid ${COLORS.line}`, borderRadius: 12, padding: '24px 20px' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: COLORS.gold, marginBottom: 8, fontFamily: 'Georgia, serif' }}>{v.name}</div>
                <div style={{ fontSize: 13, color: 'rgba(244,246,251,0.58)', lineHeight: 1.75 }}>{v.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:640px){ .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
