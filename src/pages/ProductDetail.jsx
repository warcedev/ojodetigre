import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { BottleIcon, MinusIcon, PlusIcon } from '../components/icons'
import { formatPrice } from '../utils'

export default function ProductDetail({ onAdd }) {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p.id === id)

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]?.label)
  const [qty, setQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  if (!product) {
    return (
      <section className="product-detail">
        <div className="container product-detail__empty">
          <p>No encontramos esa fragancia.</p>
          <Link to="/#catalogo" className="btn btn--gold">
            Volver al catálogo
          </Link>
        </div>
      </section>
    )
  }

  const size = product.sizes.find((s) => s.label === selectedSize)

  function handleAdd() {
    onAdd(product, size, qty)
    setJustAdded(true)
    setQty(1)
    setTimeout(() => setJustAdded(false), 1600)
  }

  return (
    <section className="product-detail">
      <div className="container">
        <Link to="/#catalogo" className="product-detail__back">
          ← Volver al catálogo
        </Link>

        <div className="product-detail__grid">
          <div className="product-detail__art">
            {product.image ? (
              <img src={product.image} alt={`${product.brand} ${product.name}`} className="product-detail__photo" />
            ) : (
              <BottleIcon className="product-detail__bottle" />
            )}
          </div>

          <div className="product-detail__info">
            <p className="product-card__brand">{product.brand}</p>
            <h1 className="product-detail__name">{product.name}</h1>
            <p className="product-detail__family">{product.family}</p>

            <div className="product-card__sizes product-detail__sizes">
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

            <div className="product-detail__buy">
              <span className="product-detail__price">{formatPrice(size.price)}</span>
              <div className="qty-control">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Restar">
                  <MinusIcon width={14} height={14} />
                </button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Sumar">
                  <PlusIcon width={14} height={14} />
                </button>
              </div>
              <button type="button" className="btn btn--gold" onClick={handleAdd}>
                {justAdded ? 'Agregado ✓' : 'Agregar al carrito'}
              </button>
            </div>

            {product.notes && (
              <div className="product-detail__notes">
                <h2>Pirámide olfativa</h2>
                <dl>
                  <div className="product-detail__note">
                    <dt>Salida</dt>
                    <dd>{product.notes.salida}</dd>
                  </div>
                  <div className="product-detail__note">
                    <dt>Corazón</dt>
                    <dd>{product.notes.corazon}</dd>
                  </div>
                  <div className="product-detail__note">
                    <dt>Fondo</dt>
                    <dd>{product.notes.fondo}</dd>
                  </div>
                </dl>
                <p className="product-detail__review">{product.notes.review}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
