import React from 'react'
import Header from '../../components/header/Header'
import Carousel from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import Katalog from '../../components/katalog/Katalog'
import Product from '../../components/product/Product'

const Home = () => {
  return (
    <>
      <Header/>
      <Carousel/>
      <Katalog/>
      <Product/>
      <Footer/>

    </>
    
  )
}

export default Home