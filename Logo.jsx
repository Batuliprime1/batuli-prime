/**
 * BATULI PRIME logo — inline SVG so it loads instantly with no network request.
 * Prop: size ('sm' | 'md' | 'lg')
 */
export default function Logo({ size = 'md', onClick }) {
  const scales = { sm: 0.55, md: 0.75, lg: 1 }
  const s = scales[size] ?? 0.75
  const w = Math.round(320 * s)
  const h = Math.round(80 * s)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 80"
      width={w}
      height={h}
      fill="none"
      role="img"
      aria-label="Batuli Prime"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', flexShrink: 0 }}
    >
      <title>Batuli Prime</title>

      {/* Shield emblem */}
      <path d="M18 8 L38 4 L58 8 L58 40 Q58 58 38 68 Q18 58 18 40 Z"
            fill="#0B1B3A" stroke="#C9921A" strokeWidth="1.5"/>

      {/* B monogram */}
      <path d="M26 20 L26 52 M26 20 L34 20 Q40 20 40 27 Q40 34 34 34 L26 34 M26 34 L35 34 Q42 34 42 43 Q42 52 35 52 L26 52"
            stroke="#C9921A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* P monogram */}
      <path d="M44 52 L44 20 M44 20 L51 20 Q58 20 58 30 Q58 40 51 40 L44 40"
            stroke="#E8B84B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Crown dots */}
      <circle cx="28" cy="2" r="1.5" fill="#C9921A"/>
      <circle cx="38" cy="0" r="2"   fill="#E8B84B"/>
      <circle cx="48" cy="2" r="1.5" fill="#C9921A"/>

      {/* BATULI wordmark */}
      <text x="72" y="38"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="28" fontWeight="700" letterSpacing="4"
            fill="#F4F6FB">BATULI</text>

      {/* PRIME wordmark */}
      <text x="72" y="60"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="20" fontWeight="400" fontStyle="italic" letterSpacing="8"
            fill="#C9921A">PRIME</text>

      {/* Rule + tagline */}
      <line x1="72" y1="65" x2="310" y2="65" stroke="#C9921A" strokeWidth="0.8" opacity="0.45"/>
      <text x="72" y="76"
            fontFamily="Inter, Arial, sans-serif"
            fontSize="7" fontWeight="400" letterSpacing="3.5"
            fill="#C9921A" opacity="0.7">AI STORIES  ·  DIGITAL PRODUCTS  ·  TRAINING</text>

      {/* Star accent */}
      <path d="M305 36 L307 31 L309 36 L314 36 L310 39.5 L311.5 44.5 L307 41.5 L302.5 44.5 L304 39.5 L300 36 Z"
            fill="#C9921A" opacity="0.65"/>
    </svg>
  )
}
