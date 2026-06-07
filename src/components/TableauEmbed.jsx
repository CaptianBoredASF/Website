function toEmbedUrl(url) {
  const base = url.split('?:')[0].split('?')[0]
  return `${base}?:showVizHome=no&:embed=true&:display_count=no`
}

function toPublicUrl(url) {
  return url.split('?:')[0].split('?')[0]
}

export default function TableauEmbed({ url, title }) {
  const embedUrl = toEmbedUrl(url)

  return (
    <div className="tableau-embed" role="region" aria-label={title}>
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        allowFullScreen
        className="tableau-iframe"
      />
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
