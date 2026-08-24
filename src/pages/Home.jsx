import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Tagline from '../components/Tagline'
import About from '../components/About'
import Faq from '../components/Faq'
import Categories from '../components/Categories'
import Catalog from '../components/Catalog'
import Contact from '../components/Contact'

export default function Home({ activeCategory, onCategoryChange, onSelectCategory }) {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
  }, [location])

  return (
    <>
      <Hero />
      <Tagline />
      <About />
      <Faq />
      <Categories onSelectCategory={onSelectCategory} />
      <Catalog activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
      <Contact />
    </>
  )
}
