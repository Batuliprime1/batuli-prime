import { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'

import Navbar          from './components/Navbar'
import Footer          from './components/Footer'
import WhatsAppButton  from './components/WhatsAppButton'
import Toast           from './components/Toast'
import EbookModal      from './components/EbookModal'

import Home     from './pages/Home'
import About    from './pages/About'
import Courses  from './pages/Courses'
import Ebook    from './pages/Ebook'
import Services from './pages/Services'
import Contact  from './pages/Contact'

import { trackPage } from './utils/analytics'
import { NAV_LINKS }  from './utils/constants'

// ── toast state helper ─────────────────────────────────
const INITIAL_TOAST = { show: false, msg: '', type: 'success' }

export default function App() {
  const [page,        setPage]       = useState('Home')
  const [toast,       setToast]      = useState(INITIAL_TOAST)
  const [ebookOpen,   setEbookOpen]  = useState(false)

  // Navigate + scroll + analytics
  const goTo = useCallback((pg) => {
    if (!NAV_LINKS.includes(pg)) return
    setPage(pg)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    trackPage(pg)
  }, [])

  // Browser back/forward support (hash-based)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    const match = NAV_LINKS.find(l => l.toLowerCase() === hash.toLowerCase())
    if (match) setPage(match)
  }, [])

  useEffect(() => {
    window.location.hash = page.toLowerCase()
    document.title = page === 'Home'
      ? 'Batuli Prime — AI Stories · Digital Products · Online Training'
      : `${page} — Batuli Prime`
  }, [page])

  const showToast = useCallback((msg, type = 'success') => {
    setToast({ show: true, msg, type })
  }, [])

  const hideToast = useCallback(() => {
    setToast(INITIAL_TOAST)
  }, [])

  const openEbook  = useCallback(() => setEbookOpen(true),  [])
  const closeEbook = useCallback(() => setEbookOpen(false), [])

  // Shared page props
  const pageProps = { goTo, showToast, openEbook }

  const PAGES = {
    Home:     <Home     {...pageProps} />,
    About:    <About    {...pageProps} />,
    Courses:  <Courses  {...pageProps} />,
    Ebook:    <Ebook    {...pageProps} />,
    Services: <Services {...pageProps} />,
    Contact:  <Contact  {...pageProps} />,
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Skip to main content (a11y) */}
      <a href="#main-content" style={{
        position: 'absolute', top: -999, left: 0, zIndex: 9999,
        background: '#C9921A', color: '#0B1B3A',
        padding: '10px 18px', fontWeight: 700, fontSize: 14,
        borderRadius: '0 0 6px 0',
      }}
        onFocus={e => e.currentTarget.style.top = '0'}
        onBlur={e => e.currentTarget.style.top = '-999px'}
      >
        Skip to main content
      </a>

      <Navbar page={page} goTo={goTo} />

      <main id="main-content" style={{ paddingTop: 62, minHeight: '80vh' }}>
        {PAGES[page] ?? PAGES.Home}
      </main>

      <Footer goTo={goTo} />

      <WhatsAppButton />

      <Toast
        message={toast.msg}
        show={toast.show}
        type={toast.type}
        onClose={hideToast}
      />

      {ebookOpen && <EbookModal onClose={closeEbook} />}
    </>
  )
}
