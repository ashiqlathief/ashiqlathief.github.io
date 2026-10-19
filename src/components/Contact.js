import React from "react"
import data from "../data"
import Parts from "./Parts"
import GithubIcon from "./GithubIcon"
import useCopyToClipboard from "./kokonut/use-copy-to-clipboard"
import { Check, Copy, Download, Mail } from "lucide-react"

const LinkedinIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const Contact = () => {
  const { copied, copy } = useCopyToClipboard()
  return (
    <div id="contact" className="contact-outer">
      <div className="contact-inner">
        <div className="contact-card reveal">
          <div className="section-header">
            <span className="section-num">04. Get in touch</span>
            <h2 className="section-title">
              Let's <em>connect</em>
            </h2>
          </div>
          <p className="contact-intro">
            <Parts parts={data.contact.intro} />
          </p>
          <div className="contact-card-actions">
            <a className="btn btn-primary" href={`mailto:${data.email}`}>
              <Mail size={16} aria-hidden="true" />
              {data.email}
            </a>
            <button
              type="button"
              className="btn btn-ghost contact-copy"
              onClick={() => copy(data.email)}
            >
              {copied ? (
                <Check size={16} aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <div className="contact-card-actions">
            <a
              className="btn btn-ghost"
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href={data.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size="16" /> GitHub
            </a>
            <a className="btn btn-ghost" href={data.cv.file} download>
              <Download size={16} aria-hidden="true" /> {data.cv.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
