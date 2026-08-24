import { useEffect, useRef } from 'react'

export default function ParticleField({ count = 46 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width
    let height
    let particles
    let raf

    function resize() {
      width = canvas.width = canvas.offsetWidth * dpr
      height = canvas.height = canvas.offsetHeight * dpr
    }

    function makeParticles() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: (Math.random() * 1.4 + 0.5) * dpr,
        speed: (Math.random() * 0.22 + 0.05) * dpr,
        drift: (Math.random() - 0.5) * 0.14 * dpr,
        alpha: Math.random() * 0.4 + 0.25,
        twinkle: Math.random() * 0.014 + 0.004,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    function tick() {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.y -= p.speed
        p.x += p.drift
        p.phase += p.twinkle
        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        const a = p.alpha * (0.5 + 0.5 * Math.sin(p.phase))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(122, 93, 40, ${a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    makeParticles()
    tick()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
