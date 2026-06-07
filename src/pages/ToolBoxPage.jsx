import { useState } from 'react'
import { toolboxItems } from '../data/toolbox'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ToolBoxPage() {
  const [activeItem, setActiveItem] = useState(toolboxItems[0]?.id ?? null)
  const selected = toolboxItems.find((item) => item.id === activeItem)

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
            <div className="project-tabs">
              {toolboxItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`project-tab ${activeItem === item.id ? 'active' : ''}`}
                  onClick={() => setActiveItem(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {selected && (
              <article className="project-detail toolbox-detail">
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
                    href={selected.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    Open Full Image
                  </a>
                </div>

                <div className="toolbox-image-wrap">
                  <img
                    src={selected.image}
                    alt={selected.alt}
                    className="toolbox-image"
                  />
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
