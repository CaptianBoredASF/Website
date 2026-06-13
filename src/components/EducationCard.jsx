export default function EducationCard({ degree, school, year, brand }) {
  if (!brand) {
    return (
      <div className="education-card">
        <strong>{degree}</strong>
        <span>{school}</span>
        <span className="muted">{year}</span>
      </div>
    )
  }

  const content = (
    <>
      <div className="education-card-content">
        <strong className="education-card-degree">{degree}</strong>
        <span className="education-card-school">{school}</span>
        <span className="education-card-year">{year}</span>
      </div>
      <div className="education-card-brand">
        <img
          src={brand.logo}
          alt=""
          className="education-card-logo"
          aria-hidden="true"
        />
        {brand.wordmark && (
          <img
            src={brand.wordmark}
            alt=""
            className="education-card-wordmark"
            aria-hidden="true"
          />
        )}
      </div>
    </>
  )

  const className = 'education-card education-card-branded'

  if (brand.url) {
    return (
      <a
        href={brand.url}
        className={className}
        style={{ '--education-brand': brand.color }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  return (
    <div className={className} style={{ '--education-brand': brand.color }}>
      {content}
    </div>
  )
}
