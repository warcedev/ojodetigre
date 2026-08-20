import { useOnScreen } from '../hooks/useOnScreen'

const VALUES = [
  {
    title: '100% Originales',
    text: 'Trabajamos únicamente con perfumes originales de las marcas más reconocidas del mundo.',
  },
  {
    title: 'Decants desde 10ml',
    text: 'Probá una fragancia antes de invertir en el frasco completo, con la misma calidad del original.',
  },
  {
    title: 'Envíos a todo el país',
    text: 'Despachamos tu pedido con cuidado y rapidez a cualquier punto del país.',
  },
]

function ValueCard({ title, text, delay }) {
  const [ref, visible] = useOnScreen()
  return (
    <div
      ref={ref}
      className={`value-card reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function About() {
  const [copyRef, copyVisible] = useOnScreen()

  return (
    <section id="nosotros" className="about">
      <div className="container about__grid">
        <div ref={copyRef} className={`about__copy reveal ${copyVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Nosotros</p>
          <h2>Una selección curada, para quienes eligen distinguirse</h2>
          <div className="divider" style={{ marginLeft: 0 }} />
          <p>
            Ojo de Tigre es una distribuidora de perfumes dedicada a acercar las fragancias más
            deseadas del mundo a un precio justo. Seleccionamos marcas icónicas y las ofrecemos
            tanto en su presentación original como en versiones fraccionadas, para que cada
            cliente encuentre su aroma ideal sin resignar calidad.
          </p>
          <p>
            Cada pedido se prepara a mano, cuidando el detalle desde la selección del frasco hasta
            el empaque final.
          </p>
        </div>
        <div className="about__values">
          {VALUES.map((value, index) => (
            <ValueCard key={value.title} {...value} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
