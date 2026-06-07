const companyStyles = {
  Chewy: { bg: '#1c4ed8', label: 'chewy', text: '#ffffff', fontSize: '0.72rem' },
  'T-Mobile': { bg: '#e20074', label: 'T', text: '#ffffff', fontSize: '1.1rem' },
  PepsiCo: { bg: '#0054a6', label: 'P', text: '#ffffff', fontSize: '1.1rem' },
  Kasco: { bg: '#334155', label: 'K', text: '#ffffff', fontSize: '1.1rem' },
  'Anheuser-Busch': { bg: '#c8102e', label: 'AB', text: '#ffffff', fontSize: '0.75rem' },
}

export default function CompanyLogo({ company }) {
  const style = companyStyles[company] ?? {
    bg: '#64748b',
    label: company.charAt(0),
    text: '#ffffff',
    fontSize: '1rem',
  }

  return (
    <div
      className="company-logo"
      style={{ backgroundColor: style.bg, color: style.text }}
      aria-hidden="true"
    >
      <span style={{ fontSize: style.fontSize }}>{style.label}</span>
    </div>
  )
}
