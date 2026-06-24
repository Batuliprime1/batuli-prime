/**
 * Google Analytics 4 — event tracking utilities
 * Replace 'G-XXXXXXXXXX' in index.html with your real Measurement ID.
 */

const isGA = () => typeof window !== 'undefined' && typeof window.gtag === 'function'

/**
 * Track a page view (for SPA navigation)
 * @param {string} page - page name / path
 */
export function trackPage(page) {
  if (!isGA()) return
  window.gtag('event', 'page_view', {
    page_title: `Batuli Prime — ${page}`,
    page_location: window.location.href,
  })
}

/**
 * Track a custom event
 * @param {string} eventName
 * @param {object} params
 */
export function trackEvent(eventName, params = {}) {
  if (!isGA()) return
  window.gtag('event', eventName, params)
}

// Pre-built trackers for common actions
export const track = {
  navClick:       (page)    => trackEvent('navigation_click', { page }),
  ebookView:      ()        => trackEvent('ebook_page_view'),
  ebookBuyClick:  ()        => trackEvent('ebook_purchase_intent', { currency: 'TZS', value: 15000 }),
  ebookSample:    ()        => trackEvent('ebook_sample_click'),
  courseEnroll:   (plan)    => trackEvent('course_enroll_intent', { plan }),
  whatsappClick:  (src)     => trackEvent('whatsapp_click', { source: src }),
  contactSubmit:  ()        => trackEvent('contact_form_submit'),
  serviceClick:   (service) => trackEvent('service_click', { service }),
}
