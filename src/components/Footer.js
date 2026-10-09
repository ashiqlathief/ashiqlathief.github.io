import React from "react"
import data from "../data"

const Footer = () => (
  <footer>
    {data.footer.map(t => (
      <span key={t}>{t}</span>
    ))}
  </footer>
)

export default Footer
