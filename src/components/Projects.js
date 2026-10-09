import React from "react"
import data from "../data"
import Highlight from "./Highlight"

const Projects = () => (
  <section id="projects">
    <div className="section-header reveal">
      <span className="section-num">02. Selected work</span>
      <h2 className="section-title">
        Projects I've <em>built</em>
      </h2>
    </div>
    <div className="projects-grid">
      {data.projects.map(p => {
        // The whole slab links to the repo when there is one.
        const Slab = p.repo ? "a" : "div"
        const linkProps = p.repo
          ? {
              href: p.repo,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": `${p.title}: view on GitHub`,
            }
          : {}
        return (
          <Slab className="project-card reveal" key={p.index} {...linkProps}>
            <div className="pc-left">
              <div className="pc-index">{p.index}</div>
              <div className="pc-label">{p.label}</div>
              <div className="pc-title">{p.title}</div>
              <div className="pc-desc">
                <Highlight text={p.desc} />
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
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        background: "#1a1a1a",
                        display: "block",
                      }}
                    ></video>
                  </div>
                )}
              </div>
              <div className="pc-highlights">
                {p.highlights.map(h => (
                  <div className="pc-highlight" key={h}>
                    <span>
                      <Highlight text={h} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Slab>
        )
      })}
    </div>
  </section>
)

export default Projects
