import { nathaniel } from '../portfolios'

const GA_ID = nathaniel.analytics?.gaId

export function isAnalyticsEnabled(gaId = GA_ID) {
  if (!gaId || typeof window === 'undefined') return false

  const { hostname } = window.location
  if (hostname === 'localhost' || hostname === '127.0.0.1') return false
  if (localStorage.getItem('ga_opt_out') === '1') return false
  if (window[`ga-disable-${gaId}`]) return false

  return typeof window.gtag === 'function'
}

/** Fire GA4 custom event when a resume PDF download is clicked. */
export function trackResumeDownload(linkLocation, portfolio) {
  const gaId = portfolio?.analytics?.gaId
  if (!gaId || !isAnalyticsEnabled(gaId)) return

  const resumeFileName = (portfolio.assets?.resumePdf ?? 'resume.pdf').replace(/^\//, '')

  window.gtag('event', 'resume_download', {
    link_location: linkLocation,
    file_name: resumeFileName,
  })
}

/** Opt out of analytics on this browser (persists until cleared). */
export function optOutOfAnalytics() {
  if (!GA_ID) return

  localStorage.setItem('ga_opt_out', '1')
  window[`ga-disable-${GA_ID}`] = true
}

/** Re-enable analytics on this browser. */
export function optInToAnalytics() {
  if (!GA_ID) return

  localStorage.removeItem('ga_opt_out')
  delete window[`ga-disable-${GA_ID}`]
}
