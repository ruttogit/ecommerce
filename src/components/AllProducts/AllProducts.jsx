import Card from '../../UI/Card'
import './AllProducts.css'
import { products } from '../../data'

function AllProducts({query}) {
    console.log(query)
  return (
    <div className='all-products'>
        <h2>ALL PRODUCTS</h2>
        <div className="products">
            {products.filter((prod) => prod.name.toLowerCase().includes(query)).map((item) => {
                return(
                <Card name={item.name} image={item.image} price={item.price} id={item.id} />
            )
            })}
        </div>
    </div>
  )
}

export default AllProducts