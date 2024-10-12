import { useState } from 'react'
import logo from "../../icons/logo.svg"
import hambuger from "../../icons/icon-hamburger.svg"
import close from "../..//icons/icon-close.svg"
import "./Nav.css"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";

function Nav({cartItemsQuantity, setQuery}) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Define which paths should show the search input
  const visiblePaths = [
    '/categories/men',
    '/categories/women',
    '/categories/children',
    '/categories/accessories',
    '/allproducts'
  ];
  
  const showSearchInput = visiblePaths.includes(location.pathname);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);  // Close the menu
  }

  return (
    <>
      <div className="nav-bar">
        <div className="top-nav">
          <div className="nav-logo">
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </div>
          
          {showSearchInput && (
            <div className="search">
              <input type="search" placeholder='Search Product' onChange={e => setQuery(e.target.value.toLowerCase())} />
              <div className="search-icon"><CiSearch /></div>
            </div>
          )}

          <div className="right-nav">
            <Link to={'/cart'}>
              <div className="cart-icon">
                <div className="cart-quant">{cartItemsQuantity}</div>
                <div className="icon"><HiOutlineShoppingBag /></div>
              </div>
            </Link>

            <div className="icon"><FaRegUserCircle /></div>
            <div className="nav-button" onClick={handleClick}>
              {isOpen ? <img src={close} alt="Close Menu" /> : <img src={hambuger} alt="Open Menu" />}
            </div>
          </div>
        </div>

        <div className="links-nav">
          <ul className={isOpen ? 'menu ul' : 'ul'}>
            <NavLink to={'/'} onClick={handleLinkClick}>Home</NavLink>
            <NavLink to={'/allproducts'} onClick={handleLinkClick}>All Products</NavLink>
            <NavLink to={'/about'} onClick={handleLinkClick}>About</NavLink>
            <NavLink to={'/contact'} onClick={handleLinkClick}>Contact Us</NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
