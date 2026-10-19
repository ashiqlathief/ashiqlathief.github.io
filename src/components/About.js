import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import data from "../data"
import Parts from "./Parts"

const { now, next } = data.hero.journey
const timeline = [
  [
    "2023–24",
    "GET Lab, Universität Paderborn",
    "Rescue robot object handling on a Kinova Gen3: AprilTag pose estimation, PBVS, ROS 2.",
  ],
  [
    "Thesis",
    "Safe 3D drone navigation",
    "Diffusion predictive control with hard safety constraints, from Isaac Sim to a real Crazyflie.",
  ],
  ["Now", now.kicker, now.text],
  ["Next", next.kicker, next.text],
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const rise = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
}

// The line fills in as the timeline scrolls through the viewport.
const Timeline = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  return (
    <div className="about-timeline" ref={ref}>
      <div className="tl-track" />
      <motion.div className="tl-fill" style={{ scaleY }} />
      <ol>
        {timeline.map(([when, title, text]) => (
          <motion.li
            key={when}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <span className="tl-dot" />
            <div className="tl-when">{when}</div>
            <h3 className="tl-title">{title}</h3>
            <p className="tl-text">{text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

const About = () => {
  const { about } = data
  const photoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  return (
    <section id="about">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: "4rem",
          alignItems: "start",
          marginBottom: "3rem",
        }}
        className="about-photo-layout"
      >
        <div
          className="reveal reveal-delay-1 about-photo-col"
          style={{ position: "sticky", top: "6rem" }}
        >
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--rule)",
              background: "var(--bg2)",
              aspectRatio: "3/4",
              position: "relative",
              boxShadow: "var(--shadow)",
            }}
            ref={photoRef}
          >
            <motion.img
              src={about.photo}
              alt={data.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                y: photoY,
                scale: 1.2,
              }}
              onError={e => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling.style.display = "flex"
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                right: "12px",
                background: "var(--accent)",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                boxShadow: "0 0 10px rgba(79,70,229,.6)",
              }}
            ></div>
          </div>
          <div
            style={{
              marginTop: "1rem",
              padding: ".75rem 1rem",
              background: "var(--surface)",
              border: "1px solid var(--rule)",
              borderRadius: "8px",
              boxShadow: "var(--shadow)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 600,
                fontSize: "calc(.9rem + 1px)",
                color: "var(--ink)",
              }}
            >
              {data.name}
            </div>
            <div
              style={{
                fontSize: "calc(.75rem + 1px)",
                color: "var(--ink3)",
                marginTop: ".2rem",
              }}
            >
              {about.photoTitle}
            </div>
          </div>
        </div>
        <div>
          <div className="section-header reveal">
            <span className="section-num">03. Background</span>
            <h2 className="section-title">
              About <em>me</em>
            </h2>
          </div>
          <motion.div
            className="about-text"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {about.paragraphs.map((parts, i) => (
              <motion.p key={i} variants={rise}>
                <Parts parts={parts} />
              </motion.p>
            ))}
            <div className="available-badge">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent2)",
                  display: "inline-block",
                }}
              ></span>
              {about.badge}
            </div>
          </motion.div>
          <div className="about-path reveal">
            <span className="section-num">My path</span>
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
