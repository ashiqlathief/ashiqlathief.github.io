import React from "react"
import data from "../data"
import Highlight from "./Highlight"
import Typed from "./Typed"
import Journey from "./Journey"

// NOTE: the original index.html never closed the #hero <div>, so every
// section after the hero rendered *inside* it. `children` preserves that
// exact DOM (and therefore identical layout and reveal behaviour).
const Hero = ({ children }) => (
  <div id="hero">
    <div className="orbit-wrap">
      <div className="orbit"></div>
      <div className="orbit"></div>
      <div className="orbit"></div>
    </div>
    <div className="hero-grid">
      <div>
        <div className="hero-eyebrow reveal">{data.hero.eyebrow}</div>
        <h1 className="hero-name reveal reveal-delay-1">
          Ashiq Ali
          <br />
          <span className="dim">Abdul Lathief</span>
        </h1>
        <div className="hero-typing-wrap reveal reveal-delay-2">
          <Typed phrases={data.hero.typedPhrases} />
        </div>
        <p className="hero-bio reveal reveal-delay-2">
          <Highlight text={data.hero.bio} />
        </p>
        <div className="hero-actions reveal reveal-delay-3">
          <a href="#projects" className="btn btn-primary">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            View work
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>
          <a href={`mailto:${data.email}`} className="btn btn-ghost">
            Email me
          </a>
          <a href={data.cv.file} download className="btn btn-ghost hero-cv">
            {data.cv.label}
          </a>
        </div>
      </div>
      <div>
        <Journey />
      </div>
    </div>
    {children}
  </div>
)

export default Hero
