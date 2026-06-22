import { Navigate } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'
import TableauEmbed from '../components/TableauEmbed'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DashboardsPage() {
  const { portfolio, hasSection, path } = usePortfolio()
  const { pages, dashboards } = portfolio

  if (!hasSection('dashboards')) {
    return <Navigate to={path()} replace />
  }

  return (
    <>
      <Header />

      <main>
        <section className="section page-hero">
          <div className="container page-hero-inner">
            <p className="eyebrow">{pages.dashboards.eyebrow}</p>
            <h1 className="section-title">{pages.dashboards.title}</h1>
            <p className="section-lead">{pages.dashboards.lead}</p>
            {dashboards.dataNote ? (
              <div className="dashboards-data-note">
                <h2 className="dashboards-data-note-title">{dashboards.dataNote.title}</h2>
                <p className="dashboards-data-note-text">{dashboards.dataNote.text}</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="section section-alt">
          <div className="dashboards-wide-wrap">
            {dashboards.executiveSummary ? (
              <div className="dashboards-executive-summary">
                <h2 className="dashboards-executive-summary-title">
                  {dashboards.executiveSummary.title}
                </h2>
                {dashboards.executiveSummary.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="dashboards-executive-summary-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            <div className="dashboards-list">
              {dashboards.projects.map((project) => (
                <article key={project.id} id={project.id} className="project-detail">
                  <div className="project-header">
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
                    title={project.embedTitle}
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
