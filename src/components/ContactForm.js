import React, { useState } from "react"
import data from "../data"

const empty = { name: "", email: "", message: "", company: "" } // company = honeypot

const ContactForm = () => {
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState("idle") // idle | sending | sent | error
  const endpoint = data.contact.formEndpoint

  const onChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    if (values.company) return // bot filled the hidden field

    // No form service configured: open the visitor's mail app, prefilled.
    if (!endpoint) {
      const subject = `Portfolio inquiry from ${values.name}`
      const body = `${values.message}\n\n${values.name}\n${values.email}`
      window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      })
      if (!res.ok) throw new Error(res.statusText)
      setValues(empty)
      setStatus("sent")
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label className="cf-field">
        <span className="cf-label">Full name</span>
        <input
          type="text"
          name="name"
          placeholder="e.g. Alex Morgan"
          value={values.name}
          onChange={onChange}
          required
          autoComplete="name"
        />
      </label>
      <label className="cf-field">
        <span className="cf-label">Email address</span>
        <input
          type="email"
          name="email"
          placeholder="alex@example.com"
          value={values.email}
          onChange={onChange}
          required
          autoComplete="email"
        />
      </label>
      <label className="cf-field">
        <span className="cf-label">Message</span>
        <textarea
          name="message"
          rows="3"
          placeholder="Briefly describe the role, project or idea..."
          value={values.message}
          onChange={onChange}
          required
        />
      </label>
      {/* honeypot: hidden from people, visible to bots */}
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={onChange}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        className="cf-hp"
      />
      <button
        type="submit"
        className="btn btn-primary cf-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </button>
      <p className="cf-status" role="status" aria-live="polite">
        {status === "sent" && "Thanks, your message was sent. I'll reply soon."}
        {status === "error" &&
          `Something went wrong. Please email me at ${data.email} instead.`}
      </p>
    </form>
  )
}

export default ContactForm
