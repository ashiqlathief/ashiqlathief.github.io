import React from "react"
import data from "../data"

const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

// Longest terms first, so "Vision Transformer" wins over "Transformer".
const pattern = new RegExp(
  `(?<![\\w-])(${[...data.keyTerms]
    .sort((a, b) => b.length - a.length)
    .map(escape)
    .join("|")})(?![\\w-])`,
  "gi",
)

// Wraps every key term from data.keyTerms found in `text` in <mark class="kt">.
const Highlight = ({ text }) => {
  const out = []
  let last = 0
  let m
  pattern.lastIndex = 0
  while ((m = pattern.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push(
      <mark className="kt" key={m.index}>
        {m[0]}
      </mark>,
    )
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}

export default Highlight
