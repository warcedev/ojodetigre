import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Catalog from './components/Catalog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { BagIcon } from './components/icons'
import { cartKey } from './utils'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function handleAdd(product, size) {
    const key = cartKey(product.id, size.label)
    setCart((prev) => {
      const existing = prev.find((item) => item.key === key)
      if (existing) {
        return prev.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item))
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          brand: product.brand,
          name: product.name,
          size: size.label,
          price: size.price,
          qty: 1,
        },
      ]
    })
    setCartOpen(true)
  }

  function handleUpdateQty(key, delta) {
    setCart((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0),
    )
  }

  function handleRemove(key) {
    setCart((prev) => prev.filter((item) => item.key !== key))
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <>
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <About />
        <Catalog onAdd={handleAdd} />
        <Contact />
      </main>
      <Footer />

      {cartCount > 0 && !cartOpen && (
        <button type="button" className="floating-cart" onClick={() => setCartOpen(true)}>
          <BagIcon width={20} height={20} />
          <span className="floating-cart__badge">{cartCount}</span>
        </button>
      )}

      <Cart
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
      />
    </>
  )
}

export default App
