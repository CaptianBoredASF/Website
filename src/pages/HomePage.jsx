import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  siteConfig,
  about,
  experience,
  education,
  skillGroups,
} from '../data/resume'
import { highlights } from '../data/highlights'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DashboardPreview from '../components/DashboardPreview'
import CompanyLogo from '../components/CompanyLogo'
import HighlightText from '../components/HighlightText'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function HighlightIcon({ type }) {
  if (type === 'chart') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19V5M10 19V9M16 19V12M22 19V7" />
      </svg>
    )
  }
  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
      </svg>
    )
  }
  if (type === 'people') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 19v-1a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')
    const timer = window.setTimeout(() => scrollTo(id), 100)
    return () => window.clearTimeout(timer)
  }, [location])

  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="hero-badge">
                <span className="hero-badge-dot" />
                {siteConfig.heroBadge}
              </p>
              <h1>
                <span className="hero-name">{siteConfig.name}</span>
                <span className="hero-title">{siteConfig.title}</span>
              </h1>
              <p className="hero-tagline">{siteConfig.tagline}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={siteConfig.resumePdf} download>
                  <span aria-hidden="true">↓</span> Download Resume
                </a>
                <Link to="/dashboards" className="btn btn-outline-light">
                  <span aria-hidden="true">▦</span> View Dashboards
                </Link>
                <Link to="/case-studies" className="btn btn-outline-light">
                  <span aria-hidden="true">☰</span> Case Studies
                </Link>
                {siteConfig.showToolbox ? (
                  <Link to="/toolbox" className="btn btn-outline-light">
                    <span aria-hidden="true">🛠</span> Tool Box
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="hero-visual">
              <DashboardPreview />
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="highlights-grid">
              {highlights.map((item) => (
                <article key={item.id} className={`highlight-card highlight-${item.id}`}>
                  <div className="highlight-icon">
                    <HighlightIcon type={item.icon} />
                  </div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <div className="about-content">
              <h2 className="section-title">About</h2>
              <p className="about-text">{about.summary}</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <h2 className="experience-heading">Experience</h2>
            <div className="experience-timeline">
              {experience.map((job) => (
                <article key={`${job.company}-${job.period}`} className="experience-entry">
                  <div className="experience-marker" aria-hidden="true" />
                  <div className="experience-card">
                    <div className="experience-card-left">
                      <CompanyLogo company={job.company} />
                      <h3>{job.role}</h3>
                      <p className="experience-meta">
                        <span className="experience-company">{job.company}</span>
                        <span className="experience-divider">|</span>
                        <span className="experience-period">{job.period}</span>
                      </p>
                    </div>
                    <div className="experience-card-right">
                      {job.highlights.length > 0 ? (
                        <>
                          <p className="experience-summary">
                            <HighlightText text={job.highlights[0]} />
                          </p>
                          {job.highlights.length > 1 && (
                            <ul className="experience-bullets">
                              {job.highlights.slice(1).map((item) => (
                                <li key={item}>
                                  <HighlightText text={item} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <p className="experience-summary muted">Role details available upon request.</p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <h3 className="education-heading">Education</h3>
            <div className="education-grid">
              {education.map((item) => (
                <div key={item.school} className="education-card">
                  <strong>{item.degree}</strong>
                  <span>{item.school}</span>
                  <span className="muted">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title section-title-center">Skills</h2>
            {skillGroups.map((group, index) => (
              <div key={group.label ?? `skills-${index}`} className="skill-group">
                {group.label && <h3 className="subsection-title">{group.label}</h3>}
                <div className="skills-grid">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact-inner">
            <h2 className="section-title section-title-center">Contact</h2>
            <div className="contact-links">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              {siteConfig.phone && (
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}>{siteConfig.phone}</a>
              )}
              {siteConfig.linkedin && (
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
