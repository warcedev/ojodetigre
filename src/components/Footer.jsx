import { InstagramIcon, WhatsAppIcon } from './icons'
import { WHATSAPP_NUMBER } from '../config'

const logo = '/OJODETIGRE.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a href="#top" className="brand">
          <img src={logo} alt="Ojo de Tigre" />
          <span>Ojo de Tigre</span>
        </a>

        <nav className="site-footer__nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="site-footer__social">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon width={18} height={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon width={18} height={18} />
          </a>
        </div>
      </div>
      <p className="site-footer__legal">© {year} Ojo de Tigre. Todos los derechos reservados.</p>
    </footer>
  )
}
