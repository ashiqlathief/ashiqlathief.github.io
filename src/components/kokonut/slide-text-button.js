/**
 * Adapted from KokonutUI slide-text-button (MIT, https://kokonutui.com)
 * Plain JS, Gatsby-friendly (renders a plain anchor), Tailwind v3 safe.
 */
import React from "react"
import { cn } from "../../lib/utils"

export default function SlideTextButton({
  text = "Browse Components",
  hoverText,
  href = "/",
  className,
  variant = "default",
  ...props
}) {
  const slideText = hoverText ?? text
  const variantStyles =
    variant === "ghost"
      ? "border border-black/10 text-black hover:bg-black/5"
      : "bg-black text-white hover:bg-black/90"

  return (
    <a
      className={cn(
        "group relative inline-flex h-11 min-h-[44px] items-center justify-center overflow-hidden rounded-lg px-8 text-base font-medium tracking-tighter no-underline transition-[background-color,transform] duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:scale-[0.97] motion-reduce:active:scale-100",
        variantStyles,
        className,
      )}
      href={href}
      {...props}
    >
      <span className="grid justify-items-center transition-transform duration-200 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none">
        <span className="col-start-1 row-start-1 flex items-center gap-2 opacity-100 transition-opacity duration-200 group-hover:opacity-0 group-focus-visible:opacity-0">
          <span>{text}</span>
        </span>
        <span
          aria-hidden="true"
          className="col-start-1 row-start-1 flex translate-y-full items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span>{slideText}</span>
        </span>
      </span>
    </a>
  )
}
