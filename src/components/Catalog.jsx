import { useMemo, useState } from 'react'
import { CATEGORIES, PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'
import { useOnScreen } from '../hooks/useOnScreen'

export default function Catalog({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [headingRef, headingVisible] = useOnScreen()

  const filtered = useMemo(() => {
    if (activeCategory === 'Todos') return PRODUCTS
    return PRODUCTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div ref={headingRef} className={`section-heading reveal ${headingVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Catálogo</p>
          <h2>Nuestras fragancias</h2>
          <div className="divider" />
          <p className="section-heading__subtitle">
            Elegí la presentación que prefieras y agregala al carrito. Coordinamos el pedido
            completo por WhatsApp.
          </p>
        </div>

        <div className="category-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-pill ${cat === activeCategory ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
              delay={(index % 3) * 90}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
