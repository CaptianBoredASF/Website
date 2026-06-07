const METRIC_PATTERN = /(\$[\d.,]+[BMK]?\+?|\d[\d,]*(?:\.\d+)?%\+?|\d[\d,]*(?:\.\d+)?%|\d[\d,]+\+)/g

function isMetric(value) {
  return /^\$[\d.,]+[BMK]?\+?$/.test(value)
    || /^\d[\d,]*(?:\.\d+)?%\+?$/.test(value)
    || /^\d[\d,]*(?:\.\d+)?%$/.test(value)
    || /^\d[\d,]+\+$/.test(value)
}

export default function HighlightText({ text }) {
  const parts = text.split(METRIC_PATTERN)

  return (
    <>
      {parts.map((part, index) =>
        isMetric(part) ? (
          <strong key={`${part}-${index}`} className="metric-highlight">
            {part}
          </strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      )}
    </>
  )
}
