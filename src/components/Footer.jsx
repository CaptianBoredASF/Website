import { siteConfig } from '../data/resume'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  )
}
