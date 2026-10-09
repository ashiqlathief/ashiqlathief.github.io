import React, { useEffect } from "react"
import BackgroundIcons from "./BackgroundIcons"
import "../styles/main.css"

const Layout = ({ children }) => {
  // Scroll-reveal: fade elements in as they enter the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("visible")
        }),
      { threshold: 0.1 },
    )
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el))

    const onLoad = () =>
      document
        .querySelectorAll("#hero .reveal")
        .forEach(el => el.classList.add("visible"))
    if (document.readyState === "complete") onLoad()
    else window.addEventListener("load", onLoad)

    return () => {
      observer.disconnect()
      window.removeEventListener("load", onLoad)
    }
  }, [])

  return (
    <>
      <BackgroundIcons />
      {children}
    </>
  )
}

export default Layout
