import { useOnScreen } from '../hooks/useOnScreen'

const CATEGORIES = [
  {
    title: 'Para Ella',
    text: 'Fragancias pensadas para resaltar tu esencia femenina.',
    value: 'Para Ella',
    image: '/category-para-ella.jpg',
  },
  {
    title: 'Para Él',
    text: 'Aromas intensos que marcan presencia.',
    value: 'Para Él',
    image: '/category-para-el.png',
  },
  {
    title: 'Colección Completa',
    text: 'Fragancias versátiles para cada ocasión.',
    value: 'Todos',
    image: '/category-coleccion-completa.jpg',
  },
]

function CategoryCard({ title, text, value, image, onSelectCategory, delay }) {
  const [ref, visible] = useOnScreen()
  return (
    <div
      ref={ref}
      className={`category-card reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <div className="category-card__art">
        <img src={image} alt={title} className="category-card__photo" />
      </div>
      <div className="category-card__body">
        <h3>{title}</h3>
        <p>{text}</p>
        <button type="button" className="btn btn--ghost btn--small" onClick={() => onSelectCategory(value)}>
          Ver Más
        </button>
      </div>
    </div>
  )
}

export default function Categories({ onSelectCategory }) {
  const [headingRef, headingVisible] = useOnScreen()

  return (
    <section id="categorias" className="categories">
      <div className="container">
        <div ref={headingRef} className={`section-heading reveal ${headingVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Categorías</p>
          <h2>Encontrá tu aroma ideal</h2>
          <div className="divider" />
          <p className="section-heading__subtitle">
            Filtra por género, tamaño o colección para encontrar tu aroma ideal.
          </p>
        </div>

        <div className="category-grid">
          {CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category.value}
              {...category}
              onSelectCategory={onSelectCategory}
              delay={index * 110}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
