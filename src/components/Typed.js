import React, { useEffect, useRef } from "react"

const Typed = ({ phrases }) => {
  const ref = useRef(null)

  useEffect(() => {
    let pi = 0
    let ci = 0
    let deleting = false
    let timer

    function type() {
      const phrase = phrases[pi]
      if (!deleting) {
        ref.current.textContent = phrase.slice(0, ++ci)
        if (ci === phrase.length) {
          deleting = true
          timer = setTimeout(type, 1800)
          return
        }
      } else {
        ref.current.textContent = phrase.slice(0, --ci)
        if (ci === 0) {
          deleting = false
          pi = (pi + 1) % phrases.length
          timer = setTimeout(type, 400)
          return
        }
      }
      timer = setTimeout(type, deleting ? 45 : 80)
    }

    timer = setTimeout(type, 600)
    return () => clearTimeout(timer)
  }, [phrases])

  return (
    <>
      <span id="typed-text" ref={ref}></span>
      <span className="cursor"></span>
    </>
  )
}

export default Typed
