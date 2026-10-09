import React from "react"
import Highlight from "./Highlight"

// Renders a list of plain strings and { strong } parts.
const Parts = ({ parts }) =>
  parts.map((p, i) =>
    typeof p === "string" ? (
      <Highlight key={i} text={p} />
    ) : (
      <strong key={i}>{p.strong}</strong>
    ),
  )

export default Parts
