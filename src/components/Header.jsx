import { Link, useLocation, useNavigate } from 'react-router-dom'
import { siteConfig } from '../data/resume'
import { trackResumeDownload } from '../utils/analytics'
import Logo from './Logo'

export const navItems = [
  { id: 'about', label: 'About', section: 'about' },
  { id: 'experience', label: 'Experience', section: 'experience' },
  { id: 'skills', label: 'Skills', section: 'skills' },
  { id: 'dashboards', label: 'Dashboards', path: '/dashboards' },
  { id: 'case-studies', label: 'Case Studies', path: '/case-studies' },
  { id: 'toolbox', label: 'Tool Box', path: '/toolbox' },
  { id: 'contact', label: 'Contact', section: 'contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  function handleNav(item) {
    if (item.path) {
      navigate(item.path)
      return
    }

    if (location.pathname === '/') {
      scrollTo(item.section)
      return
    }

    navigate(`/#${item.section}`)
  }

  function isActive(item) {
    if (item.path) return location.pathname === item.path
    if (location.pathname !== '/') return false
    if (item.section === 'about' && !location.hash) return true
    return location.hash === `#${item.section}`
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo-mark" aria-label="Home">
          <Logo />
        </Link>

        <nav className="nav">
          {navItems
            .filter((item) => siteConfig.showToolbox || item.id !== 'toolbox')
            .map((item) => (
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

        <a
          className="btn btn-header-resume"
          href={siteConfig.resumePdf}
          download
          onClick={() => trackResumeDownload('header')}
        >
          <span aria-hidden="true">↓</span> Resume
        </a>
      </div>
    </header>
  )
}
