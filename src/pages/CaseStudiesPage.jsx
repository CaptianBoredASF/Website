import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CaseStudiesPage() {
  const { studyId } = useParams()
  const navigate = useNavigate()
  const { portfolio, hasSection, path } = usePortfolio()
  const { caseStudies, pages } = portfolio
  const caseStudiesPath = path('case-studies')

  function resolveStudyId(id) {
    if (!id) return caseStudies[0]?.id ?? null
    return caseStudies.some((item) => item.id === id) ? id : caseStudies[0]?.id ?? null
  }

  const [activeStudy, setActiveStudy] = useState(() => resolveStudyId(studyId))
  const study = caseStudies.find((item) => item.id === activeStudy)

  useEffect(() => {
    setActiveStudy(resolveStudyId(studyId))
  }, [studyId, caseStudies])

  if (!hasSection('caseStudies')) {
    return <Navigate to={path()} replace />
  }

  function selectStudy(id) {
    setActiveStudy(id)
    navigate(id === caseStudies[0]?.id ? caseStudiesPath : `${caseStudiesPath}/${id}`, {
      replace: true,
    })
  }

  if (!study) return null

  return (
    <>
      <Header />

      <main>
        <section className="section page-hero">
          <div className="container page-hero-inner">
            <p className="eyebrow">{pages.caseStudies.eyebrow}</p>
            <h1 className="section-title">{pages.caseStudies.title}</h1>
            <p className="section-lead">{pages.caseStudies.lead}</p>
            <nav className="case-study-nav" aria-label="Case study topics">
              {caseStudies.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`case-study-nav-btn ${activeStudy === item.id ? 'active' : ''}`}
                  onClick={() => selectStudy(item.id)}
                >
                  {item.navLabel ?? item.title}
                </button>
              ))}
            </nav>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <article className="project-detail case-study-detail">
              <header className="case-study-header">
                <div className="case-study-header-text">
                  {study.company ? <p className="case-study-company">{study.company}</p> : null}
                  <h2 className="case-study-title">{study.title}</h2>
                </div>
                {study.pdf ? (
                  <a className="btn btn-primary case-study-pdf-btn" href={study.pdf} download>
                    <span aria-hidden="true">↓</span> Download PDF
                  </a>
                ) : null}
              </header>

              {study.image ? (
                <div className="case-study-hero-image-wrap">
                  <img
                    src={study.image}
                    alt={study.imageAlt ?? study.title}
                    className="case-study-hero-image"
                  />
                </div>
              ) : null}

              <div className="case-study-sections">
                <div className="case-study-block">
                  <h4>Challenge</h4>
                  <p className="case-study-text">{study.challenge}</p>
                </div>
                <div className="case-study-block">
                  <h4>Approach</h4>
                  <p className="case-study-text">{study.approach}</p>
                </div>
                <div className="case-study-block">
                  <h4>Results</h4>
                  {study.resultsIntro ? (
                    <p className="case-study-text">{study.resultsIntro}</p>
                  ) : null}
                  {study.resultsLabel ? (
                    <p className="case-study-results-label">{study.resultsLabel}</p>
                  ) : null}
                  <ul>
                    {study.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
                {study.impact ? (
                  <div className="case-study-block">
                    <h4>Impact</h4>
                    <p className="case-study-text">{study.impact}</p>
                  </div>
                ) : null}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
