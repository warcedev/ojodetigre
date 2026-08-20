import { useEffect, useRef } from 'react'
import ParticleField from './ParticleField'

const logo = '/OJODETIGRE.png'

export default function Hero() {
  const glowRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    function handleMouseMove(e) {
      const glow = glowRef.current
      if (!glow) return
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      glow.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero__glow" ref={glowRef} aria-hidden="true" />
      <ParticleField />
      <div className="container hero__content">
        <img src={logo} alt="" className="hero__logo" />
        <p className="eyebrow">Distribuidora de perfumes originales</p>
        <h1 className="hero__title">
          Fragancias de las mejores marcas,
          <br />a tu medida
        </h1>
        <p className="hero__subtitle">
          Perfumes de alta gama en frasco completo o en versiones decant desde 10ml.
          Autenticidad garantizada, envíos a todo el país.
        </p>
        <div className="hero__actions">
          <a href="#catalogo" className="btn btn--gold">
            Ver catálogo
          </a>
          <a href="#contacto" className="btn btn--ghost">
            Contactanos
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
