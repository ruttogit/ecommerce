import React from 'react'
import Card from '../../UI/Card'
import { products } from '../../data'

function FeaturedProducts() {

  const limit = 4; // Change this number to adjust how many items to show
  const limitedItems = products.slice(0, limit); // Get the first 'limit' items
  return (
    <>
    <h2 className="title">
        FEATURED PRODUCTS
    </h2>
    <div className='products'>
    {    limitedItems.map((item) =>{
        return(
        <Card status='FEATURED' name={item.name} image={item.image} price={item.price} id={item.id} key={item.id}/>
    )
    })}

    </div>
    

   
    </>
  )
}

export default FeaturedProducts