import React from "react"
import data from "../data"
import Highlight from "./Highlight"
import Parts from "./Parts"
import GithubIcon from "./GithubIcon"
import ContactForm from "./ContactForm"

const Contact = () => (
  <div id="contact" style={{ background: "transparent", padding: "6rem 0" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem" }}>
      <div className="contact-layout">
        <div className="contact-left reveal">
          <div className="section-header">
            <span className="section-num">04. Get in touch</span>
            <h2 className="section-title">
              Let's <em>connect</em>
            </h2>
          </div>
          <p className="contact-intro">
            <Parts parts={data.contact.intro} />
          </p>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${data.email}`}>
              <div className="cl-icon">✉</div>
              <div>
                <div className="cl-label">Email</div>
                <div className="cl-val">{data.email}</div>
              </div>
            </a>
            <a
              className="contact-link"
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="cl-icon"
                style={{
                  fontSize: "calc(.85rem + 1px)",
                  fontWeight: 700,
                  color: "#0077b5",
                }}
              >
                in
              </div>
              <div>
                <div className="cl-label">LinkedIn</div>
                <div className="cl-val">{data.linkedinHandle}</div>
              </div>
            </a>
            <a
              className="contact-link"
              href={data.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="cl-icon">
                <GithubIcon size="18" />
              </div>
              <div>
                <div className="cl-label">GitHub</div>
                <div className="cl-val">github.com/{data.githubHandle}</div>
              </div>
            </a>
          </div>
        </div>
        <div className="cta-box reveal reveal-delay-1">
          <h3>{data.contact.ctaTitle}</h3>
          <p>
            <Highlight text={data.contact.ctaText} />
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
)

export default Contact
