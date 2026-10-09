import React from "react"
import data from "../data"

const Navbar = () => (
  <nav>
    <a className="nav-logo" href="#hero">
      Ashiq Ali
    </a>
    <ul className="nav-links">
      {data.nav.map(item => (
        <li key={item.href}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
    <a href={data.cv.file} download className="btn btn-primary nav-cv">
      {data.cv.label}
    </a>
  </nav>
)

export default Navbar
