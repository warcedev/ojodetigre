import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BagIcon, CloseIcon, MenuIcon } from './icons'
import { useBump } from '../hooks/useBump'

const logo = '/OJODETIGRE.png'

const LINKS = [
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#categorias', label: 'Categorías' },
  { href: '/#catalogo', label: 'Catálogo' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contacto', label: 'Contacto' },
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
        <Link to="/#top" className="brand">
          <img src={logo} alt="Ojo de Tigre" />
          <span>Ojo de Tigre</span>
        </Link>

        <nav className="site-nav site-nav--desktop">
          {LINKS.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
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
            <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
