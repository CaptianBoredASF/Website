import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  siteConfig,
  about,
  experience,
  education,
  skillGroups,
} from '../data/resume'
import Header from '../components/Header'
import Footer from '../components/Footer'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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
          <div className="container hero-inner">
            <p className="eyebrow">Resume & Portfolio</p>
            <h1>
              <span className="hero-name">{siteConfig.name}</span>
              <span className="hero-title">{siteConfig.title}</span>
            </h1>
            <p className="hero-tagline">{siteConfig.tagline}</p>
            <div className="hero-actions">
              <Link to="/dashboards" className="btn btn-primary">
                View Dashboards
              </Link>
              <a className="btn btn-secondary" href={siteConfig.resumePdf} download>
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About</h2>
            <p className="about-text">{about.summary}</p>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {experience.map((job) => (
                <article key={`${job.company}-${job.period}`} className="timeline-item">
                  <div className="timeline-meta">
                    <h3>{job.role}</h3>
                    <p className="company">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ''}
                    </p>
                    <p className="period">{job.period}</p>
                  </div>
                  {job.highlights.length > 0 && (
                    <ul>
                      {job.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>

            <h3 className="subsection-title">Education</h3>
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
            <h2 className="section-title">Skills</h2>
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <h3 className="subsection-title">{group.label}</h3>
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
            <h2 className="section-title">Contact</h2>
            <p className="section-lead">Open to program leadership, supply chain, and operations roles.</p>
            <div className="contact-links">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              {siteConfig.phone && (
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}>{siteConfig.phone}</a>
              )}
              {siteConfig.domain && (
                <a href={siteConfig.domain}>{siteConfig.domain.replace('https://', '')}</a>
              )}
              <span className="muted">{siteConfig.location}</span>
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
