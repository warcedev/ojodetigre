import { useState } from 'react'
import { BottleIcon } from './icons'
import { formatPrice } from '../utils'
import { useOnScreen } from '../hooks/useOnScreen'

export default function ProductCard({ product, onAdd, delay = 0 }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].label)
  const [justAdded, setJustAdded] = useState(false)
  const [ref, visible] = useOnScreen()

  const size = product.sizes.find((s) => s.label === selectedSize)

  function handleAdd() {
    onAdd(product, size)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1400)
  }

  return (
    <article
      ref={ref}
      className={`product-card reveal ${visible ? 'is-visible' : ''} ${justAdded ? 'is-added' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <div className="product-card__art">
        <BottleIcon className="product-card__bottle" />
      </div>
      <div className="product-card__body">
        <p className="product-card__brand">{product.brand}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__family">{product.family}</p>

        <div className="product-card__sizes">
          {product.sizes.map((s) => (
            <button
              key={s.label}
              type="button"
              className={`size-pill ${s.label === selectedSize ? 'is-active' : ''}`}
              onClick={() => setSelectedSize(s.label)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(size.price)}</span>
          <button type="button" className="btn btn--gold btn--small" onClick={handleAdd}>
            {justAdded ? 'Agregado ✓' : 'Agregar'}
          </button>
        </div>
      </div>
    </article>
  )
}
