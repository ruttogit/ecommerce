import React from 'react'
import Hero from './Hero/Hero'
import Products from './Products/Products'
import Partners from './Parners/Partners'
import Categories from './Categories/Categories'

function Home() {
  return (
    <>
        <Hero/>
        <Products/>
        <Categories id="categories"/>
        <Partners/>
    </>
    
  )
}

export default Home