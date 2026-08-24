import { useMemo, useState } from 'react'
import { CATEGORIES, PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'
import { useOnScreen } from '../hooks/useOnScreen'

const SORT_OPTIONS = [
  { value: 'default', label: 'Por defecto' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
  { value: 'name-asc', label: 'Nombre: A-Z' },
]

export default function Catalog({ activeCategory, onCategoryChange }) {
  const [sort, setSort] = useState('default')
  const [headingRef, headingVisible] = useOnScreen()

  const filtered = useMemo(() => {
    const list =
      activeCategory === 'Todos' ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === activeCategory)

    switch (sort) {
      case 'price-asc':
        return list.sort((a, b) => a.sizes[0].price - b.sizes[0].price)
      case 'price-desc':
        return list.sort((a, b) => b.sizes[0].price - a.sizes[0].price)
      case 'name-asc':
        return list.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return list
    }
  }, [activeCategory, sort])

  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div ref={headingRef} className={`section-heading reveal ${headingVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Catálogo</p>
          <h2>Nuestras fragancias</h2>
          <div className="divider" />
          <p className="section-heading__subtitle">
            Filtra por género, tamaño o colección para encontrar tu aroma ideal.
          </p>
        </div>

        <div className="catalog-toolbar">
          <div className="category-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${cat === activeCategory ? 'is-active' : ''}`}
                onClick={() => onCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="sort-select">
            <span>Ordenar por</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="product-grid">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={(index % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
