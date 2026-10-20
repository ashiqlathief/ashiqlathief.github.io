import React, { useEffect, useRef, useState } from "react"
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

// Plays muted and looping while on screen, pauses when scrolled away.
const AutoVideo = ({ src, title }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || !("IntersectionObserver" in window)) return undefined
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      controls
      loop
      muted
      autoPlay
      playsInline
      preload="metadata"
      aria-label={`${title} demo video`}
    ></video>
  )
}

const Projects = () => {
  const [active, setActive] = useState(null)
  const project = active === null ? null : data.projects[active]

  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-num">01. Selected work</span>
        <h2 className="section-title">
          Projects I've <em>built</em>
        </h2>
      </div>
      <div className="pj-grid">
        {data.projects.map((p, i) => (
          <article
            className={`pj-card reveal${i === 0 ? " pj-featured" : ""}`}
            key={p.index}
          >
            {p.images && p.video && (
              <div className="pj-mosaic">
                <AutoVideo src={p.video} title={p.title} />
                {p.images.map(img => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    style={img.pos ? { objectPosition: img.pos } : undefined}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            )}
            {p.images && !p.video && (
              <div className="pj-photos">
                {p.images.map(img => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            )}
            {p.video && !p.images && (
              <div className="pj-media">
                <AutoVideo src={p.video} title={p.title} />
              </div>
            )}
            <div className="pj-body">
              <div className="pj-meta">
                <span className="pj-index">{p.index}</span>
                <span className="pc-label">{p.label}</span>
              </div>
              <h3 className="pj-title">{p.title}</h3>
              <div className="pc-desc">
                <Highlight text={p.desc} />
              </div>
              <div className="pc-highlights pc-highlights-inline pj-highlights">
                <Highlights items={p.highlights} />
              </div>
              <div className="pc-tags pj-tags">
                {p.tags.map(t => (
                  <span className="pc-tag" key={t}>
                    {t}
                  </span>
                ))}
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
