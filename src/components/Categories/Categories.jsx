import React from 'react';
import woman from "../../images/woman.png";
import men from "../../images/men.png";
import children from "../../images/children.png";
import accesories from "../../images/accesories.png";
import './Categories.css';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div id='categories'>
      <h2 className='title'>CATEGORIES</h2>
      <div className='categories-section' id='categories'>
        <Link to={'categories/women'} className="category">
          <img src={woman} alt="Women" />
          <span className="button">Women</span>
        </Link>
        
        <Link to={'categories/children'} className="category">
          <img src={children} alt="Children" />
          <span className="button">Children</span>
        </Link>

        <Link to={'categories/men'} className="category">
          <img src={men} alt="Men" />
          <span className="button">Men</span>
        </Link>

        <Link to={'categories/accessories'} className="category">
          <img src={accesories} alt="Accessories" />
          <span className="button">Accessories</span>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
