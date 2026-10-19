/**
 * Smooth Drawer: bottom sheet adapted from KokonutUI (https://kokonutui.com)
 * @license MIT. Stripped of shadcn/vaul deps; uses motion + lucide-react only.
 * Drag down or tap the backdrop / Escape to dismiss.
 */
import React, { useEffect, useId } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { X } from "lucide-react"

const SmoothDrawer = ({ open, onOpenChange, title, children }) => {
  const reduce = useReducedMotion()
  const titleId = useId()

  useEffect(() => {
    if (!open) return undefined
    const onKey = e => e.key === "Escape" && onOpenChange(false)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [open, onOpenChange])

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring", damping: 32, stiffness: 320 }

  return (
    <AnimatePresence>
      {open && (
        <div className="kk-drawer-root">
          <motion.div
            className="kk-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            className="kk-drawer-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={spring}
            drag={reduce ? false : "y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500)
                onOpenChange(false)
            }}
          >
            <div className="kk-drawer-grip" aria-hidden="true" />
            <div className="kk-drawer-head">
              <h3 id={titleId}>{title}</h3>
              <button
                type="button"
                className="kk-drawer-close"
                aria-label="Close"
                onClick={() => onOpenChange(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="kk-drawer-body">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default SmoothDrawer
