import { Link } from 'react-router-dom'
import { BottleIcon } from './icons'
import { formatPrice } from '../utils'
import { useOnScreen } from '../hooks/useOnScreen'

export default function ProductCard({ product, delay = 0 }) {
  const [ref, visible] = useOnScreen()
  const fromPrice = Math.min(...product.sizes.map((s) => s.price))

  return (
    <article
      ref={ref}
      className={`product-card reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <Link to={`/producto/${product.id}`} className="product-card__art">
        {product.image ? (
          <img src={product.image} alt={`${product.brand} ${product.name}`} className="product-card__photo" />
        ) : (
          <BottleIcon className="product-card__bottle" />
        )}
      </Link>
      <div className="product-card__body">
        <p className="product-card__brand">{product.brand}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__family">{product.family}</p>

        <div className="product-card__footer">
          <div className="product-card__price-wrap">
            <span className="product-card__price-label">Desde</span>
            <span className="product-card__price">{formatPrice(fromPrice)}</span>
          </div>
          <Link to={`/producto/${product.id}`} className="btn btn--gold btn--small">
            Ver Más
          </Link>
        </div>
      </div>
    </article>
  )
}
