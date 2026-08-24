import { useState } from 'react'
import { useOnScreen } from '../hooks/useOnScreen'

const FAQS = [
  {
    q: '¿Qué es un decant?',
    a: 'Un decant es una porción pequeña de perfume para probar sin comprar el frasco completo.',
  },
  {
    q: '¿Cómo elijo el tamaño?',
    a: 'Puedes filtrar nuestro catálogo por tamaños para encontrar el que mejor se adapte a tu uso y presupuesto.',
  },
  {
    q: '¿Cuáles son los métodos de pago?',
    a: 'Aceptamos tarjeta de crédito, transferencia bancaria y pago contra entrega para que elijas la forma más cómoda.',
  },
  {
    q: '¿Cómo funciona el carrito?',
    a: 'Añade productos y revisa tu selección antes de proceder al pago de manera sencilla y segura.',
  },
  {
    q: '¿Puedo devolver un decant?',
    a: 'Por higiene, no aceptamos devoluciones de decants abiertos o usados.',
  },
  {
    q: '¿Cómo garantizan la calidad del producto?',
    a: 'Trabajamos con proveedores confiables y almacenamos los decants en condiciones óptimas para preservar su aroma.',
  },
]

function FaqItem({ q, a, open, onToggle, delay }) {
  const [ref, visible] = useOnScreen()
  return (
    <div
      ref={ref}
      className={`faq-item reveal ${visible ? 'is-visible' : ''} ${open ? 'is-open' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <button type="button" className="faq-item__question" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-item__icon" aria-hidden="true" />
      </button>
      <div className="faq-item__answer-wrap">
        <div className="faq-item__answer">
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  const [headingRef, headingVisible] = useOnScreen()

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div ref={headingRef} className={`section-heading reveal ${headingVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Todo lo que necesitás saber</h2>
          <div className="divider" />
        </div>

        <div className="faq-list">
          {FAQS.map((item, index) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              delay={(index % 3) * 90}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
