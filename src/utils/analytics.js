const GA_ID = 'G-QKVHHVPKRD'

export function isAnalyticsEnabled() {
  if (typeof window === 'undefined') return false

  const { hostname } = window.location
  if (hostname === 'localhost' || hostname === '127.0.0.1') return false
  if (localStorage.getItem('ga_opt_out') === '1') return false
  if (window[`ga-disable-${GA_ID}`]) return false

  return typeof window.gtag === 'function'
}

/** Fire GA4 custom event when a resume PDF download is clicked. */
export function trackResumeDownload(linkLocation) {
  if (!isAnalyticsEnabled()) return

  window.gtag('event', 'resume_download', {
    link_location: linkLocation,
    file_name: 'resume.pdf',
  })
}

/** Opt out of analytics on this browser (persists until cleared). */
export function optOutOfAnalytics() {
  localStorage.setItem('ga_opt_out', '1')
  window[`ga-disable-${GA_ID}`] = true
}

/** Re-enable analytics on this browser. */
export function optInToAnalytics() {
  localStorage.removeItem('ga_opt_out')
  delete window[`ga-disable-${GA_ID}`]
}
