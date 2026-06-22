/** @typedef {import('./index.js').PortfolioConfig} PortfolioConfig */

export const DEFAULT_PAGES = {
  dashboards: {
    eyebrow: 'Portfolio',
    title: 'Dashboards',
    lead: 'Interactive workbooks and visual analytics.',
  },
  caseStudies: {
    eyebrow: 'Portfolio',
    title: 'Case Studies',
    lead: 'Selected programs highlighting strategy, execution, and measurable impact.',
  },
  toolbox: {
    eyebrow: 'Resources',
    title: 'Tool Box',
    lead: 'Frameworks, roadmaps, and practical professional resources.',
  },
}

/**
 * Normalize and validate a portfolio configuration object.
 * @param {PortfolioConfig} config
 * @returns {PortfolioConfig}
 */
export function definePortfolio(config) {
  if (!config?.slug) {
    throw new Error('Portfolio config requires a slug')
  }

  if (!config.profile?.name) {
    throw new Error(`Portfolio "${config.slug}" requires profile.name`)
  }

  return {
    ...config,
    assets: config.assets ?? {},
    branding: config.branding ?? { logoInitial: config.profile.name.charAt(0) },
    pages: { ...DEFAULT_PAGES, ...config.pages },
    companies: config.companies ?? {},
  }
}

/**
 * @param {PortfolioConfig} portfolio
 * @param {string} section
 */
export function hasPortfolioSection(portfolio, section) {
  if (!portfolio) return false

  switch (section) {
    case 'about':
      return (portfolio.about?.paragraphs?.length ?? 0) > 0
    case 'highlights':
      return (portfolio.highlights?.length ?? 0) > 0
    case 'experience':
      return (portfolio.experience?.length ?? 0) > 0
    case 'education':
      return (portfolio.education?.length ?? 0) > 0
    case 'skills':
      return (portfolio.skillGroups?.some((group) => group.skills?.length) ?? false)
    case 'dashboards':
      return (portfolio.dashboards?.projects?.length ?? 0) > 0
    case 'caseStudies':
      return (portfolio.caseStudies?.length ?? 0) > 0
    case 'toolbox':
      return (
        portfolio.profile.showToolbox !== false
        && (portfolio.toolbox?.items?.length ?? 0) > 0
      )
    case 'contact':
      return Boolean(
        portfolio.profile.email
        || portfolio.profile.phone
        || portfolio.profile.linkedin,
      )
    case 'resume':
      return Boolean(portfolio.assets?.resumePdf)
    default:
      return false
  }
}

/**
 * Build a path within the current portfolio route namespace.
 * @param {string} basePath - '' for root Nathaniel routes, '/portfolio/slug' otherwise
 * @param {string} [segment]
 */
export function portfolioPath(basePath, segment) {
  if (!segment) {
    return basePath || '/'
  }

  return basePath ? `${basePath}/${segment}` : `/${segment}`
}
