import { usePortfolio } from '../hooks/usePortfolio'

export default function CompanyLogo({ company }) {
  const { portfolio } = usePortfolio()
  const style = portfolio.companies[company] ?? {
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
