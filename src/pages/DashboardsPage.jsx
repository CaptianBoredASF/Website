import { tableauProjects } from '../data/resume'
import TableauEmbed from '../components/TableauEmbed'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
              Interactive workbooks published on Tableau Public. Each dashboard is shown in its own section below.
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
          <div className="container">
            <nav className="dashboards-jump-nav" aria-label="Dashboard sections">
              {tableauProjects.map((project) => (
                <a key={project.id} href={`#${project.id}`} className="dashboards-jump-link">
                  {project.title}
                </a>
              ))}
            </nav>

            <div className="dashboards-list">
              {tableauProjects.map((project) => (
                <article key={project.id} id={project.id} className="project-detail">
                  <div className="project-header">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.url.split('?:')[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Open on Tableau Public
                    </a>
                  </div>
                  <TableauEmbed
                    url={project.url}
                    title={project.title}
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
