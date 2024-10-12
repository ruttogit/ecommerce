import './Styles.css'
import { products } from '../../data'
import Card from '../../UI/Card'

const items = products.filter(item => item.category === 'women')
function Women({query}) {
  return (
    <div className='categories-wrapper'>
      <h2>WOMEN</h2>      
        <div className='products'>
            {items.filter(prod => prod.name.toLowerCase().includes(query)).map((item) =>{
            return(
                <Card name={item.name} image={item.image} price={item.price} id={item.id} status={'20%OFF'}/>
            )
            })}
        </div>
    </div>
  )
}

export default Women