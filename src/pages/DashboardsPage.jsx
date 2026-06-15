import { tableauProjects } from '../data/resume'
import TableauEmbed from '../components/TableauEmbed'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProjectDescription({ text }) {
  if (text.startsWith('Overview:')) {
    return (
      <p>
        <span className="dashboard-overview-label">Overview:</span>
        {text.slice('Overview:'.length)}
      </p>
    )
  }

  return <p>{text}</p>
}

export default function DashboardsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section page-hero">
          <div className="container page-hero-inner">
            <p className="eyebrow">Portfolio</p>
            <h1 className="section-title">Tableau Dashboards</h1>
            <p className="section-lead">
              Interactive workbooks published on Tableau Public.
            </p>
            <div className="dashboards-data-note">
              <h2 className="dashboards-data-note-title">About the Data</h2>
              <p className="dashboards-data-note-text">
                All dashboards on this site utilize AI-generated sample data created through custom
                ChatGPT and Claude prompts. The datasets, SQL models, LLM, and business scenarios are
                designed to demonstrate analytics, reporting, and supply chain decision-making
                capabilities. No company, customer, or proprietary business data is included.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="dashboards-wide-wrap">
            <div className="dashboards-list">
              {tableauProjects.map((project) => (
                <article key={project.id} id={project.id} className="project-detail">
                  <div className="project-header">
                    <div className="project-header-text">
                      {project.title ? <h3>{project.title}</h3> : null}
                      <ProjectDescription text={project.description} />
                      {project.tags?.length > 0 ? (
                        <div className="tags">
                          {project.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="project-header-actions">
                      <a
                        href={project.url.split('?:')[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        Open on Tableau Public
                      </a>
                    </div>
                  </div>
                  <TableauEmbed
                    url={project.url}
                    title={project.title || project.description.slice(0, 80)}
                    embedWidth={project.embedWidth}
                    embedHeight={project.embedHeight}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
