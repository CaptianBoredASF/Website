import { Link, useLocation, useNavigate } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'
import { trackResumeDownload } from '../utils/analytics'
import Logo from './Logo'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function buildNavItems({ hasSection, path }) {
  const items = []

  if (hasSection('about') || hasSection('highlights')) {
    items.push({ id: 'about', label: 'About', section: 'about' })
  }
  if (hasSection('experience') || hasSection('education')) {
    items.push({ id: 'experience', label: 'Experience', section: 'experience' })
  }
  if (hasSection('skills')) {
    items.push({ id: 'skills', label: 'Skills', section: 'skills' })
  }
  if (hasSection('dashboards')) {
    items.push({ id: 'dashboards', label: 'Dashboards', path: path('dashboards') })
  }
  if (hasSection('caseStudies')) {
    items.push({ id: 'case-studies', label: 'Case Studies', path: path('case-studies') })
  }
  if (hasSection('toolbox')) {
    items.push({ id: 'toolbox', label: 'Tool Box', path: path('toolbox') })
  }
  if (hasSection('contact')) {
    items.push({ id: 'contact', label: 'Contact', section: 'contact' })
  }

  return items
}

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const { portfolio, hasSection, path } = usePortfolio()
  const { assets } = portfolio
  const homePath = path()
  const navItems = buildNavItems({ hasSection, path })

  function handleNav(item) {
    if (item.path) {
      navigate(item.path)
      return
    }

    if (location.pathname === homePath) {
      scrollTo(item.section)
      return
    }

    navigate(`${homePath}#${item.section}`)
  }

  function isActive(item) {
    if (item.path) {
      return location.pathname === item.path
    }

    if (location.pathname !== homePath) return false
    if (item.section === 'about' && !location.hash) return true
    return location.hash === `#${item.section}`
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to={homePath} className="logo-mark" aria-label="Home">
          <Logo />
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={isActive(item) ? 'active' : ''}
              onClick={() => handleNav(item)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {hasSection('resume') ? (
          <a
            className="btn btn-header-resume"
            href={assets.resumePdf}
            download
            onClick={() => trackResumeDownload('header', portfolio)}
          >
            <span aria-hidden="true">↓</span> Resume
          </a>
        ) : null}
      </div>
    </header>
  )
}
