import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variation</p>
      </div>

      <div>
        {["Products 1", "Products 2"].map((prod) => (
          prod
        ))}
      </div>

      Footer
    </>
  )
}

export default Home