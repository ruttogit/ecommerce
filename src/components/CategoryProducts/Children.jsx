import './Styles.css'
import Card from '../../UI/Card'
import { products } from '../../data'

function Children({query}) {
  const items = products.filter(item => item.category === 'children')
  return (
    <div className='categories-wrapper'>
      <h2>CHILDREN</h2>
        <div className='products'>
          {items.filter(prod => prod.name.toLowerCase().includes(query)).map((item) =>{
            return(
              <Card name={item.name} image={item.image} price={item.price} id={item.id}/>
            )
          })}
      </div>
    </div>
  )
}

export default Children