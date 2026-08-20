import { useEffect, useRef, useState } from 'react'

export function useBump(value) {
  const [bump, setBump] = useState(false)
  const prev = useRef(value)

  useEffect(() => {
    if (value !== prev.current && value > prev.current) {
      setBump(true)
      const t = setTimeout(() => setBump(false), 420)
      prev.current = value
      return () => clearTimeout(t)
    }
    prev.current = value
  }, [value])

  return bump
}
