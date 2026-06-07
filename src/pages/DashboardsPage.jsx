import { useState } from 'react'
import { tableauProjects } from '../data/resume'
import TableauEmbed from '../components/TableauEmbed'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DashboardsPage() {
  const [activeProject, setActiveProject] = useState(tableauProjects[0]?.id ?? null)
  const selected = tableauProjects.find((p) => p.id === activeProject)

  return (
    <>
      <Header />

      <main>
        <section className="section page-hero">
          <div className="container page-hero-inner">
            <p className="eyebrow">Portfolio</p>
            <h1 className="section-title">Tableau Dashboards</h1>
            <p className="section-lead">
              Interactive workbooks published on Tableau Public. Click a project to explore.
            </p>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
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
      </main>

      <Footer />
    </>
  )
}
