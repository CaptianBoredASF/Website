import { useEffect, useRef, useState } from 'react'

function toEmbedUrl(url, width, height) {
  const base = url.split('?:')[0].split('?')[0]
  return `${base}?:showVizHome=no&:embed=true&:display_count=no&:tabs=no&:toolbar=no&:size=${width},${height}`
}

function toPublicUrl(url) {
  return url.split('?:')[0].split('?')[0]
}

export default function TableauEmbed({ url, title, embedWidth = 1200, embedHeight = 900 }) {
  const wrapRef = useRef(null)
  const [size, setSize] = useState({ width: embedWidth, height: embedHeight })

  useEffect(() => {
    const element = wrapRef.current
    if (!element) return undefined

    const updateSize = () => {
      const width = Math.max(Math.round(element.clientWidth), 320)
      const height = Math.round(width * (embedHeight / embedWidth))
      setSize({ width, height })
    }

    updateSize()
    const observer = new ResizeObserver(updateSize)
    observer.observe(element)
    return () => observer.disconnect()
  }, [embedWidth, embedHeight])

  const embedUrl = toEmbedUrl(url, size.width, size.height)

  return (
    <div className="tableau-embed-wrap">
      <div
        ref={wrapRef}
        className="tableau-embed"
        role="region"
        aria-label={title}
        style={{ height: `${size.height}px` }}
      >
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          scrolling="no"
          allowFullScreen
          className="tableau-iframe"
          width={size.width}
          height={size.height}
        />
      </div>
      <p className="tableau-fallback">
        Dashboard not loading?{' '}
        <a href={toPublicUrl(url)} target="_blank" rel="noopener noreferrer">
          Open it on Tableau Public
        </a>
      </p>
    </div>
  )
}

export { toPublicUrl }
