import { useState } from 'react'
import {
  siteConfig,
  about,
  experience,
  education,
  skills,
  tableauProjects,
} from './data/resume'
import TableauEmbed from './components/TableauEmbed'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [activeProject, setActiveProject] = useState(tableauProjects[0]?.id ?? null)
  const selected = tableauProjects.find((p) => p.id === activeProject)

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            {siteConfig.name}
          </a>
          <nav className="nav">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

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
              <button type="button" className="btn btn-primary" onClick={() => scrollTo('dashboards')}>
                View Dashboards
              </button>
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
                    <p className="company">{job.company}</p>
                    <p className="period">{job.period}</p>
                  </div>
                  <ul>
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
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
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboards" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Tableau Dashboards</h2>
            <p className="section-lead">
              Interactive workbooks published on Tableau Public. Click a project to explore.
            </p>

            <div className="project-tabs">
              {tableauProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={`project-tab ${activeProject === project.id ? 'active' : ''}`}
                  onClick={() => setActiveProject(project.id)}
                >
                  {project.title}
                </button>
              ))}
            </div>

            {selected && (
              <article className="project-detail">
                <div className="project-header">
                  <div>
                    <h3>{selected.title}</h3>
                    <p>{selected.description}</p>
                    <div className="tags">
                      {selected.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={selected.url.split('?:')[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    Open on Tableau Public
                  </a>
                </div>
                <TableauEmbed url={selected.url} title={selected.title} />
              </article>
            )}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-inner">
            <h2 className="section-title">Contact</h2>
            <p className="section-lead">Open to roles in analytics, BI, and data visualization.</p>
            <div className="contact-links">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              {siteConfig.domain && (
                <a href={siteConfig.domain}>{siteConfig.domain.replace('https://', '')}</a>
              )}
              <span className="muted">{siteConfig.location}</span>
              {siteConfig.linkedin && (
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
              {siteConfig.github && (
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </footer>
    </>
  )
}
