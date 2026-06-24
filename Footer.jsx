import Logo from './Logo'
import { NAV_LINKS, BRAND, COLORS, WHATSAPP_URL } from '../utils/constants'
import { track } from '../utils/analytics'

export default function Footer({ goTo }) {
  const year = new Date().getFullYear()

  const waClick = () => {
    track.whatsappClick('footer')
    window.open(WHATSAPP_URL(), '_blank', 'noopener,noreferrer')
  }

  const linkStyle = {
    fontSize: 13,
    color: 'rgba(244,246,251,0.45)',
    display: 'block',
    marginBottom: 9,
    cursor: 'pointer',
    transition: 'color .2s',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: 'inherit',
    textAlign: 'left',
  }

  const hoverLink = e => e.currentTarget.style.color = COLORS.gold
  const leaveLink = e => e.currentTarget.style.color = 'rgba(244,246,251,0.45)'

  return (
    <footer style={{
      background: '#040c18',
      borderTop: `1px solid ${COLORS.line}`,
      padding: '56px 20px 28px',
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 40,
          marginBottom: 48,
        }}>
          {/* Brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            <Logo size="sm" onClick={() => goTo('Home')} />
            <p style={{ fontSize: 13, color: 'rgba(244,246,251,0.45)', lineHeight: 1.8, marginTop: 16, marginBottom: 20 }}>
              Teaching AI skills, creating content, and building futures across East Africa.
            </p>
            <button onClick={waClick} style={{
              padding: '10px 20px',
              background: '#25D366', color: '#fff',
              border: 'none', borderRadius: 8,
              fontSize: 13, fontWeight: 700, cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              💬 WhatsApp Us
            </button>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 16 }}>Navigation</div>
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => goTo(l)} style={linkStyle}
                onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
                {l}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 16 }}>Services</div>
            {['AI Video Creation', 'Story Writing', 'Voiceovers', 'Social Media', 'Business Promos'].map(s => (
              <button key={s} onClick={() => goTo('Services')} style={linkStyle}
                onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
                {s}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, marginBottom: 16 }}>Connect</div>
            <a href={`mailto:${BRAND.email}`} style={{ ...linkStyle, display: 'block', textDecoration: 'none' }}
              onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
              📧 {BRAND.email}
            </a>
            <a href={BRAND.youtube} target="_blank" rel="noopener noreferrer"
              style={{ ...linkStyle, display: 'block', textDecoration: 'none' }}
              onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
              📺 @BCreativeAIStories
            </a>
            <a href={BRAND.tiktok} target="_blank" rel="noopener noreferrer"
              style={{ ...linkStyle, display: 'block', textDecoration: 'none' }}
              onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
              🎵 @_bcreative
            </a>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
              style={{ ...linkStyle, display: 'block', textDecoration: 'none' }}
              onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
              📸 @mtaa.stories
            </a>
            <a href={BRAND.amazon} target="_blank" rel="noopener noreferrer"
              style={{ ...linkStyle, display: 'block', textDecoration: 'none' }}
              onMouseEnter={hoverLink} onMouseLeave={leaveLink}>
              📖 Book on Amazon
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid rgba(201,146,26,0.1)`,
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 10,
        }}>
          <div style={{ fontSize: 12, color: 'rgba(244,246,251,0.2)' }}>
            © {year} Batuli Prime. All rights reserved. · Tanzania, East Africa
          </div>
          <div style={{ fontSize: 12, color: 'rgba(244,246,251,0.2)' }}>
            AI Stories · Digital Products · Online Training
          </div>
        </div>
      </div>
    </footer>
  )
}
