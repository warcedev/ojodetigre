import { WHATSAPP_NUMBER } from '../config'
import { WhatsAppIcon } from './icons'

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola! Quiero hacer una consulta.')}`

  return (
    <a href={href} target="_blank" rel="noreferrer" className="whatsapp-fab" aria-label="Escribinos por WhatsApp">
      <span className="whatsapp-fab__ring" aria-hidden="true" />
      <WhatsAppIcon width={24} height={24} />
    </a>
  )
}
