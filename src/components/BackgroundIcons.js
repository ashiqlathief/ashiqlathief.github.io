import React, { useEffect, useRef } from "react"

const iconFiles = [
  "aerial.svg",
  "aerial-imaging.svg",
  "ai.svg",
  "ai-research.svg",
  "ai-sophia.svg",
  "arm.svg",
  "arms.svg",
  "artificial-intelligence.svg",
  "computer.svg",
  "dummy.svg",
  "hand1.svg",
  "hand2.svg",
  "hand3.svg",
  "industry.svg",
  "pet.svg",
  "pet-robot.svg",
  "robot.svg",
  "robot2.svg",
  "robot3.svg",
  "robot4.png",
  "robot5.png",
  "robot6.svg",
  "robot-alien.svg",
  "robot-assistant.png",
  "rover1.svg",
  "rover2.svg",
]

const BackgroundIcons = () => {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current

    function generateIcons() {
      if (!container) return
      container.innerHTML = ""
      container.style.height = "0px" // reset first so it doesn't inflate scrollHeight

      if (window.innerWidth <= 480) return

      const W = window.innerWidth
      const H = document.body.offsetHeight
      container.style.height = H + "px"

      const colSpacing = window.innerWidth <= 768 ? 160 : 240
      const rowSpacing = 200
      const numCols = Math.ceil(W / colSpacing) + 1
      const numRows = Math.ceil(H / rowSpacing) + 1

      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          const img = document.createElement("img")
          const file = iconFiles[Math.floor(Math.random() * iconFiles.length)]
          img.src = "backgroundIcons/" + file
          img.className = "bg-icon"
          img.alt = ""
          img.draggable = false

          const jitterX = (Math.random() - 0.5) * colSpacing * 0.7
          const jitterY = (Math.random() - 0.5) * rowSpacing * 0.7
          const x = c * colSpacing + jitterX
          const y = r * rowSpacing + jitterY
          const rot = Math.random() * 360
          const size = 60 + Math.floor(Math.random() * 36) // 60-96px
          const opacity = 0.09 + Math.random() * 0.1 // 0.09-0.19

          img.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;transform:rotate(${rot}deg);opacity:${opacity};`
          container.appendChild(img)
        }
      }
    }

    generateIcons()
    // Regenerate after images/fonts load to get accurate scrollHeight
    window.addEventListener("load", generateIcons)

    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(generateIcons, 400)
    }
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("load", generateIcons)
      window.removeEventListener("resize", onResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return <div id="bg-icons" ref={ref}></div>
}

export default BackgroundIcons
