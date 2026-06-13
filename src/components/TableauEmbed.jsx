import { useEffect, useRef, useState } from 'react'

function toEmbedUrl(url, width, height) {
  const base = url.split('?:')[0].split('?')[0]
  return `${base}?:showVizHome=no&:embed=true&:display_count=no&:tabs=no&:toolbar=no&:size=${width},${height}`
}

function toPublicUrl(url) {
  return url.split('?:')[0].split('?')[0]
}

export default function TableauEmbed({ url, title, embedWidth = 1600, embedHeight = 927 }) {
  const wrapRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const element = wrapRef.current
    if (!element) return undefined

    const updateScale = () => {
      const width = element.clientWidth
      setScale(width / embedWidth)
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(element)
    return () => observer.disconnect()
  }, [embedWidth])

  const embedUrl = toEmbedUrl(url, embedWidth, embedHeight)
  const scaledHeight = Math.round(embedHeight * scale)

  return (
    <div className="tableau-embed-wrap">
      <div
        ref={wrapRef}
        className="tableau-embed"
        role="region"
        aria-label={title}
        style={{ height: `${scaledHeight}px` }}
      >
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          scrolling="no"
          allowFullScreen
          className="tableau-iframe"
          width={embedWidth}
          height={embedHeight}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
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
