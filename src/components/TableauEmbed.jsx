import { useEffect, useRef } from 'react'

export default function TableauEmbed({ url, title }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !url) return

    container.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'
    script.async = true
    script.onload = () => {
      if (window.tableau && container) {
        new window.tableau.Viz(container, {
          width: '100%',
          height: '600',
          url,
          hideTabs: true,
          hideToolbar: false,
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      container.innerHTML = ''
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [url])

  return (
    <div
      ref={containerRef}
      className="tableau-embed"
      role="region"
      aria-label={title}
    />
  )
}
