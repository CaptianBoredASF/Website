import { Navigate } from 'react-router-dom'
import { usePortfolio } from '../hooks/usePortfolio'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ToolBoxPage() {
  const { portfolio, hasSection, path } = usePortfolio()
  const { pages, toolbox } = portfolio

  if (!hasSection('toolbox')) {
    return <Navigate to={path()} replace />
  }

  const slots = Array.from({ length: toolbox.slotCount }, (_, index) => toolbox.items[index] ?? null)

  return (
    <>
      <Header />

      <main>
        <section className="section page-hero">
          <div className="container page-hero-inner">
            <p className="eyebrow">{pages.toolbox.eyebrow}</p>
            <h1 className="section-title">{pages.toolbox.title}</h1>
            <p className="section-lead">{pages.toolbox.lead}</p>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="toolbox-grid-wrap">
              {toolbox.intro ? (
                <div className="toolbox-intro-box">
                  <h2 className="toolbox-intro-title">{toolbox.intro.title}</h2>
                  <p className="toolbox-intro-text">{toolbox.intro.text}</p>
                </div>
              ) : null}

              <div className="toolbox-grid">
                {slots.map((item, index) => (
                  <article key={item?.id ?? `empty-${index}`} className="toolbox-grid-item">
                    {item ? (
                      <>
                        <a
                          href={item.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="toolbox-grid-link"
                          aria-label={`Open ${item.title} full size`}
                        >
                          <img src={item.image} alt={item.alt} className="toolbox-grid-image" />
                        </a>
                        <p className="toolbox-grid-caption">{item.title}</p>
                      </>
                    ) : (
                      <div className="toolbox-grid-empty" aria-hidden="true" />
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
