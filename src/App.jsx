import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import { BagIcon } from './components/icons'
import { cartKey } from './utils'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Todos')

  function handleAdd(product, size, qty = 1) {
    const key = cartKey(product.id, size.label)
    setCart((prev) => {
      const existing = prev.find((item) => item.key === key)
      if (existing) {
        return prev.map((item) => (item.key === key ? { ...item, qty: item.qty + qty } : item))
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
          qty,
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

  function handleSelectCategory(category) {
    setActiveCategory(category)
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <>
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onSelectCategory={handleSelectCategory}
              />
            }
          />
          <Route path="/producto/:id" element={<ProductDetail onAdd={handleAdd} />} />
        </Routes>
      </main>
      <Footer />

      <WhatsAppButton />

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
