import React from "react"
import data from "../data"

const Skills = () => (
  <div id="skills" style={{ background: "transparent", padding: "6rem 0" }}>
    <div
      id="skills-section"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 3rem",
        background: "transparent",
      }}
    >
      <div className="section-header reveal">
        <span className="section-num">03. Capabilities</span>
        <h2 className="section-title">
          Tech <em>stack</em>
        </h2>
      </div>
      <div className="skills-icon-grid">
        {data.skills.map(s => (
          <div
            className={`skill-icon-card reveal ${s.delay}`.trim()}
            key={s.title}
          >
            <img
              className="sic-img"
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
