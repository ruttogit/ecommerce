import React from 'react'
import Card from '../../UI/Card'
import "../Products/Products.css"
import { products } from '../../data'


function NewArrival() {
  // const {name, image, id, price} = products
  // console.log(products)
  const limit = 4; // Change this number to adjust how many items to show
  const limitedItems = products.slice(-limit); // Get the first 'limit' items
  return (
    <>
    <h2 className='title'>NEW ARRIVALS</h2>
    <div className='products'>
    {limitedItems.map((item) =>{
      return(
            <Card name={item.name} image={item.image} price={item.price} status='NEW' key={item.id} id={item.id}/>
        )
    })}
    </div>
    </>

  )
}

export default NewArrival