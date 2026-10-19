import React, { useEffect, useState } from "react"
import data from "../data"
import { MorphicNavbar } from "./kokonut/morphic-navbar"

const items = Object.fromEntries(
  data.nav.map(item => [item.href, { name: item.label }]),
)

// Highlights the nav link of the section currently under the top of the screen.
const useScrollSpy = hrefs => {
  const [active, setActive] = useState(hrefs[0])
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35
      let current = hrefs[0]
      hrefs.forEach(href => {
        const el = document.getElementById(href.slice(1))
        if (el && el.getBoundingClientRect().top <= line) current = href
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [hrefs])
  return active
}

const hrefs = Object.keys(items)

const Navbar = () => {
  const active = useScrollSpy(hrefs)
  return (
    <header className="site-nav">
      <a className="nav-logo" href="#hero">
        Ashiq Ali
      </a>
      <MorphicNavbar
        items={items}
        activePath={active}
        className="nav-morphic"
      />
      <a href={data.cv.file} download className="btn btn-primary nav-cv">
        {data.cv.label}
      </a>
    </header>
  )
}

export default Navbar
