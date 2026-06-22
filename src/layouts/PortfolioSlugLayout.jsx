import { Navigate, Outlet, useParams } from 'react-router-dom'
import { PortfolioProvider } from '../context/PortfolioContext'
import { resolvePortfolio } from '../portfolios'

export default function PortfolioSlugLayout() {
  const { slug } = useParams()
  const portfolio = resolvePortfolio(slug)

  if (!portfolio) {
    return <Navigate to="/" replace />
  }

  return (
    <PortfolioProvider portfolio={portfolio} slug={slug} basePath={`/portfolio/${slug}`}>
      <Outlet />
    </PortfolioProvider>
  )
}
