import { usePortfolio } from '../hooks/usePortfolio'

export default function Footer() {
  const { portfolio } = usePortfolio()

  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {portfolio.profile.name}</p>
      </div>
    </footer>
  )
}
