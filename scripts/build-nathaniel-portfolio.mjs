import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const src = fs.readFileSync(path.join(root, 'src/data/portfolio.js'), 'utf8')
const body = src.replace(/^\/\/[^\n]*\n\/\/[^\n]*\n\nexport const portfolio = /, '')
const out = `import { definePortfolio } from './schema.js'

export default definePortfolio({
  slug: 'nathaniel',
  ${body.slice(1)}
`
fs.mkdirSync(path.join(root, 'src/portfolios'), { recursive: true })
fs.writeFileSync(path.join(root, 'src/portfolios/nathaniel.js'), out.replace(/\n}\n$/, '\n})\n'))
console.log('wrote nathaniel.js')
