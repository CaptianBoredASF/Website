import { useState } from 'react'
import { caseStudies } from '../data/resume'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CaseStudiesPage() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0]?.id ?? null)
  const selected = caseStudies.find((study) => study.id === activeStudy)

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
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="project-tabs">
              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  type="button"
                  className={`project-tab ${activeStudy === study.id ? 'active' : ''}`}
                  onClick={() => setActiveStudy(study.id)}
                >
                  {study.title}
                </button>
              ))}
            </div>

            {selected && (
              <article className="project-detail case-study-detail">
                <div className="project-header">
                  <div>
                    <p className="case-study-company">{selected.company}</p>
                    <h3>{selected.title}</h3>
                    <p>{selected.description}</p>
                    <div className="tags">
                      {selected.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="case-study-sections">
                  <div className="case-study-block">
                    <h4>Challenge</h4>
                    <p>{selected.challenge}</p>
                  </div>
                  <div className="case-study-block">
                    <h4>Approach</h4>
                    <p>{selected.approach}</p>
                  </div>
                  <div className="case-study-block">
                    <h4>Results</h4>
                    <ul>
                      {selected.results.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
