import './Styles.css'
import { products } from '../../data'
import Card from '../../UI/Card'
function Men({query}) {
  const items = products.filter(item => item.category === 'men')
  return (
    <div className='categories-wrapper'>
      <h2>MEN</h2>
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

export default Men