import { products } from '../../data'
import './Styles.css'
import Card from '../../UI/Card'


function Accesories({query}) {
  const items = products.filter(item => item.category === 'accessories')
  return (
    <div className='categories-wrapper'>
      <h2>ACCESSORIES</h2>
        <div className='products'>
          {items.filter(prod => prod.name.toLowerCase().includes(query)).map((item => {
            return(
              <Card name={item.name} image={item.image} price={item.price} key={item.id} id={item.id} status='30%OFF'/>
            )
          }))}
        </div>
    </div>
  )
}

export default Accesories