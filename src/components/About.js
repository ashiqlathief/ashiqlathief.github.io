import React from "react"
import data from "../data"
import Parts from "./Parts"

const About = () => {
  const { about } = data
  return (
    <section id="about">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "4rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}
        className="about-photo-layout"
      >
        <div>
          <div className="section-header reveal">
            <span className="section-num">01. Background</span>
            <h2 className="section-title">
              About <em>me</em>
            </h2>
          </div>
          <div className="about-text reveal">
            {about.paragraphs.map((parts, i) => (
              <p key={i}>
                <Parts parts={parts} />
              </p>
            ))}
            <div className="available-badge">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent2)",
                  display: "inline-block",
                }}
              ></span>
              {about.badge}
            </div>
          </div>
        </div>

        <div
          className="reveal reveal-delay-1"
          style={{ position: "sticky", top: "6rem" }}
        >
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--rule)",
              background: "var(--bg2)",
              aspectRatio: "3/4",
              position: "relative",
              boxShadow: "var(--shadow)",
            }}
          >
            <img
              src={about.photo}
              alt={data.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={e => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling.style.display = "flex"
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                right: "12px",
                background: "var(--accent)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                boxShadow: "0 0 10px rgba(79,70,229,.6)",
              }}
            ></div>
          </div>
          <div
            style={{
              marginTop: "1rem",
              padding: ".75rem 1rem",
              background: "var(--surface)",
              border: "1px solid var(--rule)",
              borderRadius: "8px",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: "calc(.9rem + 1px)",
                color: "var(--ink)",
              }}
            >
              {data.name}
            </div>
            <div
              style={{
                fontSize: "calc(.75rem + 1px)",
                color: "var(--ink3)",
                marginTop: ".2rem",
              }}
            >
              {about.photoTitle}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
        }}
        className="reveal"
      >
        {about.cards.map(card => (
          <div className="info-card" key={card.header}>
            <div className="ic-header">{card.header}</div>
            {card.rows.map(([label, val]) => (
              <div className="ic-row" key={label}>
                <span className="ic-label">{label}</span>
                <span className="ic-val">{val}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
