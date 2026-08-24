import { Link } from 'react-router-dom'
import { InstagramIcon, WhatsAppIcon } from './icons'
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from '../config'

const logo = '/OJODETIGRE.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Link to="/#top" className="brand">
          <img src={logo} alt="Ojo de Tigre" />
          <span>Ojo de Tigre</span>
        </Link>

        <nav className="site-footer__nav">
          <Link to="/#nosotros">Nosotros</Link>
          <Link to="/#catalogo">Catálogo</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/#contacto">Contacto</Link>
        </nav>

        <div className="site-footer__social">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon width={18} height={18} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon width={18} height={18} />
          </a>
        </div>
      </div>
      <p className="site-footer__legal">© {year} Ojo de Tigre. Todos los derechos reservados.</p>
    </footer>
  )
}
