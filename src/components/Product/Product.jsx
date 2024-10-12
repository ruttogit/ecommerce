import "./Product.css"
import { useParams } from "react-router-dom";
import { products } from "../../data";
import { useNavigate } from 'react-router-dom';

function Product({handleAddtoCart}) {
  let { id } = useParams();
  const item = products.find(item => item.id === parseInt(id));
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate(-1); // Go back to the previous page
};
 
  return (
    <div className="product-wrapper">
      <div className="product-left">
        <img src={item.image} alt="" />
      </div>
      <div className="product-right">
        <h2>{item.name}</h2>
        <div className="dividor"></div>
        <div className="detail">
          <h4>WAS</h4>
          <p className="was">$55</p>
        </div>
        <div className="dividor"></div>
        <div className="detail">
          <h4>Quantity</h4>
          <p>1</p>
        </div>
        <div className="dividor"></div>
        <div className="detail">
          <h4>PRICE</h4>
          <p>{item.price}</p>
        </div>
        <div className="dividor"></div>
        <div className="detail">
          <span>Nec rerum ultricies in ligula repudiandae nullam nostrum saepe praesent odio quia facilisis dapibus erat eros laboris? Ornare donec repellat, ridiculus aptent. Cursus! Habitasse, hendrerit illum lacinia interdum, optio ab magnam voluptates, similique nisl vestibulum tempor. Esse dolor voluptatibus tenetur aptent dictumst!</span>
        </div>
        <div className="products-buttons">
          <button className="go-back-btn" onClick={goBackToHome}>Go back</button>
          <button className="add-to-cart-btn" onClick={() => handleAddtoCart(item)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product