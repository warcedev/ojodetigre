export function formatPrice(value) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value)
}

export function cartKey(productId, sizeLabel) {
  return `${productId}__${sizeLabel}`
}
