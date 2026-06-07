import { toolboxItems } from '../data/toolbox'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ToolBoxPage() {
  const slots = Array.from({ length: 4 }, (_, index) => toolboxItems[index] ?? null)

  return (
    <>
      <Header />

      <main>
        <section className="section page-hero">
          <div className="container page-hero-inner">
            <p className="eyebrow">Resources</p>
            <h1 className="section-title">Tool Box</h1>
            <p className="section-lead">
              Frameworks, roadmaps, and practical tools for supply chain and operations leaders.
            </p>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="toolbox-grid-wrap">
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
