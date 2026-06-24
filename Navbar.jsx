import { useState, useEffect } from 'react'
import Logo from './Logo'
import { NAV_LINKS, COLORS } from '../utils/constants'
import { track } from '../utils/analytics'

export default function Navbar({ page, goTo }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 700) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const navigate = (pg) => {
    track.navClick(pg)
    goTo(pg)
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          height: 62,
          padding: '0 20px',
          background: scrolled
            ? 'rgba(4,12,24,0.97)'
            : 'rgba(7,16,32,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${COLORS.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'background .3s',
        }}
      >
        {/* Logo */}
        <Logo size="sm" onClick={() => navigate('Home')} />

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 2, alignItems: 'center' }}
             className="desktop-nav">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => navigate(link)}
              aria-current={page === link ? 'page' : undefined}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: page === link
                  ? `1.5px solid ${COLORS.gold}`
                  : '1.5px solid transparent',
                cursor: 'pointer',
                color: page === link
                  ? COLORS.gold2
                  : 'rgba(244,246,251,0.6)',
                fontSize: 12.5,
                fontWeight: page === link ? 700 : 500,
                letterSpacing: '0.07em',
                padding: '6px 12px',
                borderRadius: '6px 6px 0 0',
                transition: 'color .2s, border-color .2s',
                fontFamily: 'inherit',
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => navigate('Contact')}
            style={{
              marginLeft: 10,
              padding: '8px 20px',
              background: COLORS.gold,
              color: COLORS.navy,
              border: 'none',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer',
              letterSpacing: '0.07em',
              fontFamily: 'inherit',
              transition: 'background .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = COLORS.gold2}
            onMouseLeave={e => e.currentTarget.style.background = COLORS.gold}
          >
            Get Started
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(p => !p)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            background: 'none', border: 'none',
            color: COLORS.gold, fontSize: 24, cursor: 'pointer',
            padding: 4, lineHeight: 1,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{
          position: 'fixed', top: 62, left: 0, right: 0, bottom: 0,
          background: 'rgba(4,12,24,0.98)',
          zIndex: 400,
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        {NAV_LINKS.map(link => (
          <button
            key={link}
            onClick={() => navigate(link)}
            style={{
              background: 'none', border: 'none',
              color: page === link ? COLORS.gold2 : 'rgba(244,246,251,0.8)',
              fontSize: 24, fontWeight: 700,
              padding: '14px 48px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              borderBottom: page === link ? `1px solid ${COLORS.gold}` : '1px solid transparent',
            }}
          >
            {link}
          </button>
        ))}
        <button
          onClick={() => navigate('Contact')}
          style={{
            marginTop: 20, padding: '14px 48px',
            background: COLORS.gold, color: COLORS.navy,
            border: 'none', borderRadius: 8,
            fontSize: 17, fontWeight: 800,
            cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          Get Started
        </button>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 700px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
