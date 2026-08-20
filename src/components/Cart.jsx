import { WHATSAPP_NUMBER } from '../config'
import { formatPrice } from '../utils'
import { BagIcon, CloseIcon, MinusIcon, PlusIcon, TrashIcon, WhatsAppIcon } from './icons'

function buildWhatsAppMessage(items, total) {
  const lines = items.map(
    (item) => `• ${item.brand} — ${item.name} (${item.size}) x${item.qty} — ${formatPrice(item.price * item.qty)}`,
  )
  return [
    'Hola! Quiero hacer el siguiente pedido:',
    '',
    ...lines,
    '',
    `Total: ${formatPrice(total)}`,
  ].join('\n')
}

export default function Cart({ open, items, onClose, onUpdateQty, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const count = items.reduce((sum, item) => sum + item.qty, 0)

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildWhatsAppMessage(items, total),
  )}`

  return (
    <>
      <div className={`cart-overlay ${open ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`cart-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="cart-drawer__header">
          <h3>
            <BagIcon width={18} height={18} /> Tu pedido
          </h3>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Cerrar carrito">
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <p className="cart-empty">Todavía no agregaste productos. Explorá el catálogo y sumá tus fragancias favoritas.</p>
          ) : (
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.key} className="cart-item">
                  <div className="cart-item__info">
                    <p className="cart-item__brand">{item.brand}</p>
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__size">{item.size}</p>
                  </div>
                  <div className="cart-item__controls">
                    <div className="qty-control">
                      <button type="button" onClick={() => onUpdateQty(item.key, -1)} aria-label="Restar">
                        <MinusIcon width={14} height={14} />
                      </button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => onUpdateQty(item.key, 1)} aria-label="Sumar">
                        <PlusIcon width={14} height={14} />
                      </button>
                    </div>
                    <span className="cart-item__price">{formatPrice(item.price * item.qty)}</span>
                    <button
                      type="button"
                      className="icon-btn cart-item__remove"
                      onClick={() => onRemove(item.key)}
                      aria-label="Quitar producto"
                    >
                      <TrashIcon width={16} height={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-total">
              <span>Total ({count} {count === 1 ? 'ítem' : 'ítems'})</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--gold cart-checkout">
              <WhatsAppIcon width={18} height={18} />
              Finalizar pedido por WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  )
}
