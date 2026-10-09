import React, { useEffect, useRef } from "react"
import data from "../data"
import Highlight from "./Highlight"

const DUR = 2200

const Journey = () => {
  const { now, next, poster, video: videoSrc } = data.hero.journey
  const wrapRef = useRef(null)
  const stageRef = useRef(null)
  const videoRef = useRef(null)
  const nowRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const stage = stageRef.current
    const video = videoRef.current
    const hotspots = wrap.querySelectorAll(".journey-hotspot")
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches
    let state = null
    let rafId = null
    let animFrom = 0
    let animTo = 0
    let animStart = 0

    const metaReady = () =>
      video.readyState >= 1 && !isNaN(video.duration) && video.duration > 0
    const targetFor = which =>
      which === "next" ? Math.max(video.duration - 0.08, 0) : 0

    function step(t0) {
      const t = Math.min((t0 - animStart) / DUR, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      if (!video.seeking)
        video.currentTime = animFrom + (animTo - animFrom) * eased
      if (t < 1) rafId = requestAnimationFrame(step)
      else rafId = null
    }
    function animateTo(t) {
      if (reduceMotion) {
        video.currentTime = t
        return
      }
      cancelAnimationFrame(rafId)
      animFrom = video.currentTime || 0
      animTo = t
      animStart = performance.now()
      rafId = requestAnimationFrame(step)
    }
    function applyState() {
      if (metaReady()) animateTo(targetFor(state))
    }
    function setJourney(which) {
      state = which
      wrap.classList.toggle("is-next-active", which === "next")
      wrap.classList.toggle("is-now-active", which === "now")
      nowRef.current.classList.toggle("is-active", which === "now")
      nextRef.current.classList.toggle("is-active", which === "next")
      applyState()
    }

    video.addEventListener("loadedmetadata", applyState)
    if (video.readyState < 1) video.load()

    const cleanups = []
    hotspots.forEach(btn => {
      const which = btn.classList.contains("journey-hotspot--l")
        ? "now"
        : "next"
      ;["mouseenter", "focus", "click"].forEach(evt => {
        const fn = () => setJourney(which)
        btn.addEventListener(evt, fn)
        cleanups.push(() => btn.removeEventListener(evt, fn))
      })
    })
    const leave = () => setJourney(null)
    stage.addEventListener("mouseleave", leave)

    return () => {
      cancelAnimationFrame(rafId)
      video.removeEventListener("loadedmetadata", applyState)
      stage.removeEventListener("mouseleave", leave)
      cleanups.forEach(fn => fn())
    }
  }, [])

  return (
    <div className="journey-wrap" ref={wrapRef}>
      <div className="journey-stage-wrap" ref={stageRef}>
        <div
          className="journey-card journey-card--now"
          id="journey-now"
          ref={nowRef}
        >
          <p className="journey-card-kicker">{now.kicker}</p>
          <p>
            <Highlight text={now.text} />
          </p>
        </div>
        <div
          className="journey-card journey-card--next"
          id="journey-next"
          ref={nextRef}
        >
          <p className="journey-card-kicker">{next.kicker}</p>
          <p>
            <Highlight text={next.text} />
          </p>
        </div>
        <div
          className="journey-stage"
          role="img"
          aria-label="Where I am, and where I want to reach: two hands extending toward each other."
        >
          <video
            ref={videoRef}
            className="journey-video"
            muted
            playsInline
            preload="auto"
            poster={poster}
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <p className="journey-label journey-label--l" aria-hidden="true">
            {now.kicker}
          </p>
          <p className="journey-label journey-label--r" aria-hidden="true">
            {next.kicker}
          </p>
          <button
            className="journey-hotspot journey-hotspot--l"
            type="button"
            aria-describedby="journey-now"
          >
            <span className="visually-hidden">Where I am, show bio</span>
          </button>
          <button
            className="journey-hotspot journey-hotspot--r"
            type="button"
            aria-describedby="journey-next"
          >
            <span className="visually-hidden">
              Where I'm headed, show goals
            </span>
          </button>
        </div>
      </div>
      <p className="journey-hint">Hover or tap a side →</p>
    </div>
  )
}

export default Journey
