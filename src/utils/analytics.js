/** Fire GA4 custom event when a resume PDF download is clicked. */
export function trackResumeDownload(linkLocation) {
  if (typeof window.gtag !== 'function') return

  window.gtag('event', 'resume_download', {
    link_location: linkLocation,
    file_name: 'resume.pdf',
  })
}
