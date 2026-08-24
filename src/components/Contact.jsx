import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, WHATSAPP_CONTACT_NAME, WHATSAPP_NUMBER } from '../config'
import { InstagramIcon, WhatsAppIcon } from './icons'
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
    'Hola! Quiero consultar por sus decants.',
  )}`

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div ref={headingRef} className={`section-heading reveal ${headingVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Contacto</p>
          <h2>Estamos aquí para ayudarte siempre</h2>
          <div className="divider" />
        </div>

        <div className="contact-grid contact-grid--two">
          <ContactCard as="a" href={whatsappHref} target="_blank" rel="noreferrer" delay={0}>
            <WhatsAppIcon width={26} height={26} />
            <h3>WhatsApp</h3>
            <p>{WHATSAPP_CONTACT_NAME}</p>
            <p className="contact-card__meta">{PHONE_DISPLAY}</p>
          </ContactCard>
          <ContactCard as="a" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" delay={120}>
            <InstagramIcon width={26} height={26} />
            <h3>Instagram</h3>
            <p>{INSTAGRAM_HANDLE}</p>
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
