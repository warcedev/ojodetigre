import { useEffect, useState } from 'react'
import { BagIcon, CloseIcon, MenuIcon } from './icons'
import { useBump } from '../hooks/useBump'

const logo = '/OJODETIGRE.png'

const LINKS = [
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const bump = useBump(cartCount)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__bar container">
        <a href="#top" className="brand">
          <img src={logo} alt="Ojo de Tigre" />
          <span>Ojo de Tigre</span>
        </a>

        <nav className="site-nav site-nav--desktop">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <button type="button" className="icon-btn cart-btn" onClick={onOpenCart} aria-label="Ver carrito">
            <BagIcon width={20} height={20} />
            {cartCount > 0 && (
              <span className={`cart-btn__badge ${bump ? 'is-bump' : ''}`}>{cartCount}</span>
            )}
          </button>
          <button
            type="button"
            className="icon-btn site-nav__toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="site-nav site-nav--mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
