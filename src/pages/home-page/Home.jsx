import React from 'react'
import Banner from './Banner'
import SubBanner from './SubBanner'
import Product from './Product'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SubBanner></SubBanner>
      <div className='my-16' >
      <Product></Product>
      </div>
    </div>
  )
}

export default Home
