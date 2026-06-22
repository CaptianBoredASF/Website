import { createContext, useEffect, useMemo } from 'react'
import { hasPortfolioSection, portfolioPath } from '../portfolios/schema'

export const PortfolioContext = createContext(null)

function PortfolioDocumentHead({ portfolio }) {
  useEffect(() => {
    const { profile, seo } = portfolio
    document.title = seo?.pageTitle
      ? `${profile.name} — ${seo.pageTitle}`
      : `${profile.name} — ${profile.title}`
  }, [portfolio])

  return null
}

export function PortfolioProvider({ portfolio, slug, basePath, children }) {
  const value = useMemo(
    () => ({
      portfolio,
      slug,
      basePath,
      hasSection: (section) => hasPortfolioSection(portfolio, section),
      path: (segment) => portfolioPath(basePath, segment),
    }),
    [portfolio, slug, basePath],
  )

  return (
    <PortfolioContext.Provider value={value}>
      <PortfolioDocumentHead portfolio={portfolio} />
      {children}
    </PortfolioContext.Provider>
  )
}
