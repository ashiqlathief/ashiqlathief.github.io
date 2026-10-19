import React from "react"
import data from "../data"

const marqueeTags = [...new Set(data.projects.flatMap(p => p.tags))]

const Skills = () => (
  <div id="skills" className="skills-outer">
    <div id="skills-section" className="skills-inner">
      <div className="section-header reveal">
        <span className="section-num">02. Capabilities</span>
        <h2 className="section-title">
          Tech <em>stack</em>
        </h2>
      </div>
      <div className="skills-marquee" aria-hidden="true">
        <div className="skills-marquee-track">
          {[...marqueeTags, ...marqueeTags].map((t, i) => (
            <span className="skills-marquee-tag" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="skills-icon-grid">
        {data.skills.map(s => (
          <div
            className={`skill-icon-card reveal ${s.delay}`.trim()}
            key={s.title}
          >
            <img
              className="sic-img"
              loading="lazy"
              decoding="async"
              src={s.icon}
              alt={s.alt}
              onError={e => (e.currentTarget.style.display = "none")}
            />
            <div className="sic-title">{s.title}</div>
            <div className="sic-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Skills
