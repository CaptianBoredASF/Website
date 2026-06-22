import nathaniel from './nathaniel.js'
import sarah from './sarah.js'

/** @typedef {import('./schema.js').PortfolioConfig} PortfolioConfig */

/** @type {Record<string, PortfolioConfig>} */
const registry = {
  [nathaniel.slug]: nathaniel,
  [sarah.slug]: sarah,
}

export const DEFAULT_PORTFOLIO_SLUG = nathaniel.slug

/**
 * @param {string | undefined | null} slug
 * @returns {PortfolioConfig | null}
 */
export function resolvePortfolio(slug) {
  if (!slug) return null
  return registry[slug] ?? null
}

export function listPortfolioSlugs() {
  return Object.keys(registry)
}

export { nathaniel, sarah }
