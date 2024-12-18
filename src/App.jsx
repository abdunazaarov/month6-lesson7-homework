import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { Routes, Route, Link } from "react-router-dom"
import Header from './components/header/Header'
import Carousel from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Shipping from './pages/shipping/Shipping'
import Garant from './pages/garant/Garant'
import Return from './pages/return/Return'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import NotFound from './pages/notFound/NotFound'
import Products from './pages/products/Products'
import ProductDetail from './pages/productDetail/ProductDetail'
// import Product from './components/product/Product'


function App() {

  return (
    <>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/garant' element={<Garant />} />
        <Route path='/return' element={<Return />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/product' element={<Product/>}/> */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

      </Routes>
    </>
  )
}

export default App
