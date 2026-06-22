import { usePortfolio } from '../hooks/usePortfolio'

export default function Logo() {
  const { portfolio } = usePortfolio()
  const initial = portfolio.branding.logoInitial

  return (
    <svg
      className="logo-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 78 44"
      fill="none"
      aria-hidden="true"
    >
      <text
        x="20"
        y="36"
        fill="#3B82F6"
        fontFamily="'Instrument Serif', Georgia, 'Times New Roman', serif"
        fontSize="38"
      >
        {initial}
      </text>
      <text
        x="2"
        y="36"
        fill="#FFFFFF"
        fontFamily="'Instrument Serif', Georgia, 'Times New Roman', serif"
        fontSize="38"
      >
        {initial}
      </text>
    </svg>
  )
}
