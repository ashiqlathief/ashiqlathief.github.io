/** Small copy-to-clipboard hook (KokonutUI style). SSR-safe. */
import { useCallback, useEffect, useRef, useState } from "react"

export default function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = useCallback(
    async text => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setCopied(false), timeout)
        return true
      } catch (e) {
        return false
      }
    },
    [timeout],
  )

  return { copied, copy }
}
