import { useState } from 'react'
import { WHATSAPP_NUMBER } from '../config'
import { useOnScreen } from '../hooks/useOnScreen'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [ref, visible] = useOnScreen()

  function handleSubmit(e) {
    e.preventDefault()
    const message = `Hola! Quiero suscribirme a las novedades y ofertas. Mi correo es: ${email}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section className="newsletter">
      <div ref={ref} className={`container newsletter__inner reveal ${visible ? 'is-visible' : ''}`}>
        <div className="newsletter__copy">
          <h2>Suscríbete hoy</h2>
          <p>Recibe ofertas exclusivas y novedades</p>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Tu correo"
          />
          <button type="submit" className="btn btn--gold btn--small">
            {sent ? 'Enviado ✓' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  )
}
