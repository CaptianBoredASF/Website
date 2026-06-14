import { useState } from 'react'
import { caseStudies } from '../data/resume'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CaseStudiesPage() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0]?.id ?? null)
  const study = caseStudies.find((item) => item.id === activeStudy)

  if (!study) return null

  return (
    <>
      <Header />

      <main>
        <section className="section page-hero">
          <div className="container page-hero-inner">
            <p className="eyebrow">Portfolio</p>
            <h1 className="section-title">Case Studies</h1>
            <p className="section-lead">
              Selected programs highlighting strategy, execution, and measurable business impact.
            </p>
            <nav className="case-study-nav" aria-label="Case study topics">
              {caseStudies.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`case-study-nav-btn ${activeStudy === item.id ? 'active' : ''}`}
                  onClick={() => setActiveStudy(item.id)}
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
              {study.image && (
                <div className="case-study-hero-image-wrap">
                  <img
                    src={study.image}
                    alt={study.imageAlt ?? study.title}
                    className="case-study-hero-image"
                  />
                </div>
              )}

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
                  <ul>
                    {study.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
                {study.impact && (
                  <div className="case-study-block">
                    <h4>Impact</h4>
                    <p className="case-study-text">{study.impact}</p>
                  </div>
                )}
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
