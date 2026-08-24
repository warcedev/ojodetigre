import { useOnScreen } from '../hooks/useOnScreen'

const FEATURES = [
  {
    title: 'Calidad Asegurada',
    text: 'Fragancias 100% originales, cuidadosamente preservadas para garantizar pureza y autenticidad.',
  },
  {
    title: 'Envíos Veloces',
    text: 'Procesamos y enviamos tu pedido con rapidez y elegancia, directo a tus manos.',
  },
  {
    title: 'Asesoría Personalizada',
    text: 'Te ayudamos a encontrar la fragancia que refleje tu esencia única.',
  },
]

function FeatureCard({ title, text, delay }) {
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
  const [featuresHeadingRef, featuresHeadingVisible] = useOnScreen()

  return (
    <section id="nosotros" className="about">
      <div className="container about__grid">
        <div ref={copyRef} className={`about__copy reveal ${copyVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Acerca de Ojo de Tigre</p>
          <h2>Somos expertos en decants, ofreciendo lujo y frescura en cada fragancia</h2>
          <div className="divider" style={{ marginLeft: 0 }} />
          <p>
            Un decant es una porción pequeña de perfume original, pensada para que puedas
            descubrir tu próxima fragancia favorita sin resignar calidad ni comprar el frasco
            completo. Seleccionamos marcas icónicas y las preparamos a mano, cuidando cada
            detalle del proceso.
          </p>
        </div>
        <div ref={featuresHeadingRef} className={`about__values-wrap reveal ${featuresHeadingVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Lo mejor a tu disposición</p>
          <div className="about__values">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} delay={index * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
