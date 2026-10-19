import React, { useState } from "react"
import { ArrowUpRight, ListChecks } from "lucide-react"
import data from "../data"
import Highlight from "./Highlight"
import SmoothDrawer from "./kokonut/smooth-drawer"

const Highlights = ({ items }) =>
  items.map(h => (
    <div className="pc-highlight" key={h}>
      <span>
        <Highlight text={h} />
      </span>
    </div>
  ))

const Projects = () => {
  const [active, setActive] = useState(null)
  const project = active === null ? null : data.projects[active]

  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-num">02. Selected work</span>
        <h2 className="section-title">
          Projects I've <em>built</em>
        </h2>
      </div>
      <div className="projects-grid">
        {data.projects.map((p, i) => (
          <article className="project-card reveal" key={p.index}>
            <div className="pc-left">
              <div className="pc-index">{p.index}</div>
              <div className="pc-label">{p.label}</div>
              <h3 className="pc-title">{p.title}</h3>
              <div className="pc-desc">
                <Highlight text={p.desc} />
              </div>
              <div className="pc-actions">
                {p.repo && (
                  <a
                    className="pc-btn"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title}: view on GitHub`}
                  >
                    GitHub <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                <button
                  type="button"
                  className="pc-btn pc-btn-details"
                  onClick={() => setActive(i)}
                >
                  <ListChecks size={16} aria-hidden="true" /> Key details
                </button>
              </div>
            </div>
            <div className="pc-right">
              <div>
                <div className="pc-tags">
                  {p.tags.map(t => (
                    <span className="pc-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.video && (
                  <div className="pc-media">
                    <video
                      src={p.video}
                      controls
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={`${p.title} demo video`}
                    ></video>
                  </div>
                )}
              </div>
              <div className="pc-highlights pc-highlights-inline">
                <Highlights items={p.highlights} />
              </div>
            </div>
          </article>
        ))}
      </div>
      <SmoothDrawer
        open={active !== null}
        onOpenChange={o => !o && setActive(null)}
        title={project ? project.title : ""}
      >
        {project && (
          <>
            <div className="pc-highlights">
              <Highlights items={project.highlights} />
            </div>
            {project.repo && (
              <a
                className="pc-btn"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </>
        )}
      </SmoothDrawer>
    </section>
  )
}

export default Projects
