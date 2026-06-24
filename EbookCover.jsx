import { useState } from 'react'

const SIZES = {
  sm: { w: 110, h: 155, depth: 14, font: 8,  icon: 22, titleFont: 8  },
  md: { w: 160, h: 220, depth: 20, font: 11, icon: 30, titleFont: 11 },
  lg: { w: 220, h: 305, depth: 28, font: 14, icon: 42, titleFont: 15 },
}

/**
 * 3D CSS book cover — no images required.
 * Props: size ('sm'|'md'|'lg'), onClick
 */
export default function EbookCover({ size = 'md', onClick }) {
  const [hovered, setHovered] = useState(false)
  const { w, h, depth, icon, titleFont } = SIZES[size] ?? SIZES.md

  return (
    <div style={{ perspective: '900px', display: 'inline-block' }} aria-label="Ebook cover: I Lost a Home, But Not My Dream">
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        tabIndex={onClick ? 0 : -1}
        role={onClick ? 'button' : 'img'}
        style={{
          width: w, height: h,
          transform: hovered
            ? 'rotateY(-10deg) rotateX(3deg) translateY(-6px)'
            : 'rotateY(-22deg) rotateX(4deg)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          filter: 'drop-shadow(0 24px 44px rgba(0,0,0,0.6))',
          transition: 'transform .4s cubic-bezier(.22,.68,0,1.2)',
          cursor: onClick ? 'pointer' : 'default',
          animation: 'float 5s ease-in-out infinite',
        }}
      >
        {/* ── FRONT FACE ── */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(145deg, #1A3166 0%, #0B1B3A 55%, #071020 100%)',
          borderRadius: '3px 8px 8px 3px',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '18px 14px',
        }}>
          {/* Top gold stripe */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: 'linear-gradient(90deg, #C9921A, #F5D590, #C9921A)',
          }}/>

          {/* Publisher label */}
          <div style={{ position: 'absolute', top: 12, letterSpacing: '0.26em', fontSize: 7, color: '#E8B84B', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
            BATULI PRIME
          </div>

          {/* Decorative ring */}
          <div style={{
            width: icon * 2, height: icon * 2, borderRadius: '50%',
            border: '1px solid rgba(201,146,26,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 10, marginTop: 10,
          }}>
            <span style={{ fontSize: icon, filter: 'drop-shadow(0 0 8px rgba(201,146,26,0.7))' }}>🏠</span>
          </div>

          {/* Title */}
          <div style={{
            fontFamily: 'Georgia, serif', fontSize: titleFont,
            color: '#F4F6FB', textAlign: 'center', lineHeight: 1.4,
            fontWeight: 700, padding: '0 8px',
          }}>
            I Lost a Home,<br/>But Not My<br/>
            <span style={{ color: '#E8B84B', fontStyle: 'italic' }}>Dream</span>
          </div>

          {/* Bottom gold gradient */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 36,
            background: 'linear-gradient(to top, rgba(201,146,26,0.4), transparent)',
          }}/>
          <div style={{ position: 'absolute', bottom: 8, fontSize: 6, letterSpacing: '0.2em', color: '#E8B84B', fontFamily: 'sans-serif', textTransform: 'uppercase' }}>
            Inspiring Story
          </div>

          {/* Shimmer overlay on hover */}
          {hovered && (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer .8s ease',
            }}/>
          )}
        </div>

        {/* ── SPINE ── */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0,
          left: 0, width: depth,
          background: 'linear-gradient(to right, #040c18, #0B1B3A)',
          transform: `rotateY(-90deg) translateX(-${depth / 2}px)`,
          transformOrigin: 'left center',
          borderRadius: '3px 0 0 3px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontSize: 7, color: '#C9921A',
            writingMode: 'vertical-rl',
            letterSpacing: '0.12em',
            transform: 'rotate(180deg)',
            fontFamily: 'sans-serif', fontWeight: 700,
          }}>BATULI PRIME</span>
        </div>

        {/* ── BACK FACE ── */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#040c18',
          borderRadius: '3px 8px 8px 3px',
          transform: 'rotateY(180deg)',
          backfaceVisibility: 'hidden',
        }}/>
      </div>
    </div>
  )
}
