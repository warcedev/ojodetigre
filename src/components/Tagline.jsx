import { useOnScreen } from '../hooks/useOnScreen'

export default function Tagline() {
  const [ref, visible] = useOnScreen()

  return (
    <section className="tagline">
      <div ref={ref} className={`container tagline__inner reveal ${visible ? 'is-visible' : ''}`}>
        <p className="tagline__line tagline__line--muted">No vendemos perfumes.</p>
        <p className="tagline__line tagline__line--gold">Ofrecemos el arte de oler distinto.</p>
      </div>
    </section>
  )
}
