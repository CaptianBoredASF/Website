import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nathaniel from './src/portfolios/nathaniel.js'

function portfolioHtmlPlugin() {
  const { profile, seo, analytics } = nathaniel
  const title = `${profile.name} — ${seo.pageTitle}`

  return {
    name: 'portfolio-html',
    transformIndexHtml(html) {
      return html
        .replace(/%GA_ID%/g, analytics.gaId)
        .replace(/%SEO_TITLE%/g, title)
        .replace(/%SEO_DESCRIPTION%/g, seo.description)
        .replace(/%SEO_AUTHOR%/g, profile.name)
        .replace(/%SEO_CANONICAL%/g, seo.canonical)
        .replace(/%SEO_OG_TITLE%/g, title)
        .replace(/%SEO_OG_DESCRIPTION%/g, seo.ogDescription)
        .replace(/%SEO_OG_URL%/g, seo.canonical)
    },
  }
}

export default defineConfig({
  plugins: [react(), portfolioHtmlPlugin()],
})
