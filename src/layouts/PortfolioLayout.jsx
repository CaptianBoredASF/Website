import { Outlet } from 'react-router-dom'
import { PortfolioProvider } from '../context/PortfolioContext'
import { resolvePortfolio } from '../portfolios'

export default function PortfolioLayout({ slug, basePath }) {
  const portfolio = resolvePortfolio(slug)

  if (!portfolio) {
    return null
  }

  return (
    <PortfolioProvider portfolio={portfolio} slug={slug} basePath={basePath}>
      <Outlet />
    </PortfolioProvider>
  )
}
