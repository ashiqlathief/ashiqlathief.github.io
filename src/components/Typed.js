import React from "react"
import TypewriterTitle from "./kokonut/type-writer"

const Typed = ({ phrases }) => (
  <TypewriterTitle
    sequences={phrases.map(text => ({ text, deleteAfter: true }))}
    typingSpeed={70}
    deleteSpeed={35}
    startDelay={600}
    pauseBeforeDelete={1500}
    className="justify-start font-[family-name:var(--serif)] font-semibold tracking-normal text-[color:var(--accent)] dark:text-[color:var(--accent)]"
    textClassName="text-[calc(1.1rem+1px)] sm:text-[calc(1.6rem+1px)] leading-[1.7]"
  />
)

export default Typed
