import { useLocation, useNavigate } from 'react-router-dom'

export const navItems = [
  { id: 'about', label: 'About', section: 'about' },
  { id: 'experience', label: 'Experience', section: 'experience' },
  { id: 'skills', label: 'Skills', section: 'skills' },
  { id: 'dashboards', label: 'Dashboards', path: '/dashboards' },
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

  return (
    <header className="site-header">
      <div className="container header-inner">
        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                (item.path && location.pathname === item.path) ||
                (!item.path && location.pathname === '/' && location.hash === `#${item.section}`)
                  ? 'active'
                  : ''
              }
              onClick={() => handleNav(item)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
