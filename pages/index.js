import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variation</p>
      </div>

      <div className='products-container'>
        {["Products 1", "Products 2"].map((prod) => (
          prod
        ))}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home