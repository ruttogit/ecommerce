import { Link } from "react-router-dom";
import "./Card.css";

function Card({ name, image, id, price, status }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="card">
        {status && <button className="status">{status}</button>}
        <div className="card-img">
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
        <h3>${price.toFixed(2)}</h3>
      </div>
    </Link>
  );
}

export default Card;
