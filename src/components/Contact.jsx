import { WHATSAPP_NUMBER } from '../config'
import { InstagramIcon, PinIcon, WhatsAppIcon } from './icons'
import { useOnScreen } from '../hooks/useOnScreen'

function ContactCard({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useOnScreen()
  return (
    <Tag
      ref={ref}
      className={`contact-card reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default function Contact() {
  const [headingRef, headingVisible] = useOnScreen()
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hola! Quiero consultar por sus perfumes.',
  )}`

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div ref={headingRef} className={`section-heading reveal ${headingVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu próxima fragancia</h2>
          <div className="divider" />
          <p className="section-heading__subtitle">
            Escribinos por WhatsApp para consultas, asesoramiento personalizado o seguimiento de
            tu pedido.
          </p>
        </div>

        <div className="contact-grid">
          <ContactCard as="a" href={whatsappHref} target="_blank" rel="noreferrer" delay={0}>
            <WhatsAppIcon width={26} height={26} />
            <h3>WhatsApp</h3>
            <p>Respuesta rápida para pedidos y consultas</p>
          </ContactCard>
          <ContactCard as="a" href="https://instagram.com" target="_blank" rel="noreferrer" delay={120}>
            <InstagramIcon width={26} height={26} />
            <h3>Instagram</h3>
            <p>@ojodetigre.perfumes</p>
          </ContactCard>
          <ContactCard className="contact-card--static" delay={240}>
            <PinIcon width={26} height={26} />
            <h3>Envíos</h3>
            <p>A todo el país por correo o cadetería</p>
          </ContactCard>
        </div>

        <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--gold contact-cta">
          <WhatsAppIcon width={18} height={18} />
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  )
}
