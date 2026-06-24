// ── BRAND CONFIG ────────────────────────────────────────
export const BRAND = {
  name:        'Batuli Prime',
  tagline:     'AI Stories · Digital Products · Online Training',
  email:       'bcreative0111@gmail.com',
  whatsapp:    '255757342148',
  whatsappMsg: 'Hello Batuli Prime! I found your website and I am interested in learning more.',
  youtube:     'https://www.youtube.com/@BCreativeAIStories',
  tiktok:      'https://www.tiktok.com/@_bcreative',
  instagram:   'https://www.instagram.com/mtaa.stories',
  amazon:      'https://www.amazon.com',   // ← Replace with real Amazon book URL
  location:    'Tanzania, East Africa',
}

export const WHATSAPP_URL = (msg = BRAND.whatsappMsg) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`

// ── COLORS ──────────────────────────────────────────────
export const COLORS = {
  navy:   '#0B1B3A',
  navy2:  '#112249',
  navy3:  '#1A3166',
  dark:   '#071020',
  gold:   '#C9921A',
  gold2:  '#E8B84B',
  gold3:  '#F5D590',
  white:  '#F4F6FB',
  muted:  'rgba(244,246,251,0.55)',
  line:   'rgba(201,146,26,0.18)',
}

// ── NAV ─────────────────────────────────────────────────
export const NAV_LINKS = ['Home','About','Courses','Ebook','Services','Contact']

// ── PRICING ─────────────────────────────────────────────
export const COURSES = [
  {
    id: 'beginner',
    name: 'Beginner',
    price: 'TZS 20,000',
    priceNum: 20000,
    period: '/month',
    badge: null,
    featured: false,
    features: [
      '3 active training days/month',
      'WhatsApp support group',
      'Script Writing basics',
      'AI Image Creation (Grok)',
      'CapCut mobile editing',
      'Certificate of completion',
    ],
    whatsappMsg: 'Hi! I want to enroll in the Beginner Package (TZS 20,000/month). Please guide me.',
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    price: 'TZS 30,000',
    priceNum: 30000,
    period: '/month',
    badge: 'Most Popular',
    featured: true,
    features: [
      'Everything in Beginner',
      'Google Flow video creation',
      'ElevenLabs voiceovers',
      'Social media strategy',
      'Content monetization',
      '1-on-1 feedback sessions',
      'Priority WhatsApp support',
    ],
    whatsappMsg: 'Hi! I want to enroll in the Intermediate Package (TZS 30,000/month). Please guide me.',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: 'TZS 50,000',
    priceNum: 50000,
    period: '/month',
    badge: 'Elite Level',
    featured: false,
    features: [
      'Everything in Intermediate',
      'Full AI Creator Elite curriculum',
      'Brand building & psychology',
      'AI filmmaking techniques',
      'Monetization systems',
      'Original series development',
      'Personal mentorship',
      'Business consulting session',
    ],
    whatsappMsg: 'Hi! I want to enroll in the Advanced Package (TZS 50,000/month). Please guide me.',
  },
]

export const EBOOK = {
  title:    'I Lost a Home, But Not My Dream',
  author:   'Batuli Prime',
  price:    'TZS 15,000',
  priceNum: 15000,
  desc:     'An inspiring story of resilience, hope, and the courage to keep chasing your dreams despite life\'s hardest challenges.',
  features: ['Digital PDF Download', 'Instant Access After Purchase', 'Inspirational & Motivational'],
  amazon:   BRAND.amazon,
  whatsappMsg: 'Hi! I want to buy the ebook "I Lost a Home, But Not My Dream". How do I purchase it?',
}
