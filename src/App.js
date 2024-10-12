import { Route, Routes, Outlet } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav/Nav";
import Men from './components/CategoryProducts/Men';
import Women from './components/CategoryProducts/Women';
import Children from './components/CategoryProducts/Children';
import Accessories from './components/CategoryProducts/Accesories';
import NotFound from './components/NotFound/NotFound'; // Ensure to create this component
import Product from "./components/Product/Product"
import About from "./components/About/About"
import { useState, useEffect } from "react";
import React from 'react'
import Contact from "./components/Contact/Contact";
import AllProducts from "./components/AllProducts/AllProducts";


// Pop Up 
function Popup({ message, onClose }) {
  return (
    <div className="popup">
      <p>{message}</p>
      <button className="close" onClick={onClose}>x</button>
    </div>
  );
}

// Layout for header and Footer
function Layout({cartItemsQuantity, setQuery}) {
  return (
    <>
      <Nav cartItemsQuantity={cartItemsQuantity} setQuery={setQuery}/>
      <Outlet />
      <Footer />
    </>
  );
}

// local sotrage
const cartFromLocalStorage= JSON.parse(localStorage.getItem("cart") || "[]")

function App() {
  // Querry for search
  const [query, setQuery] = useState('');

  // initialize popup state
  const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility
  const [popupMessage, setPopupMessage] = useState(''); // State for popup message
   
  // initialize cart
   const [cart, setCart] = useState(cartFromLocalStorage)


  useEffect(() =>{
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart])





 
  const handleAddtoCart = (item) => {
    const itemExists = cart.find((product) => product.id === item.id);
  
    if (itemExists) {
      // Show popup if already in the cart
      setPopupMessage('Added to cart');
      setPopupVisible(true);
    } else {
      // Add the item to the cart if it doesn't exist
      setCart([...cart, { ...item, quantity: 1 }]);
      
      setPopupMessage('Already added to Cart');
      setPopupVisible(true);
      
    }
  };






  useEffect(() => {
    if (popupVisible) {
      const timer = setTimeout(() => {
        setPopupVisible(false);
      }, 3000); // 3 seconds
  
      return () => clearTimeout(timer); // Clear the timer on cleanup
    }
  }, [popupVisible]);




  // cart quantity that will be used in cart component and nav component
  let cartItemsQuantity = cart.length


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout cart={cart} cartItemsQuantity={cartItemsQuantity} setQuery={setQuery}/>}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} cartItemsQuantity={cartItemsQuantity} setCart={setCart}/>} />
        <Route path="/product/:id" element={<Product handleAddtoCart={handleAddtoCart}/>}/>
        <Route path="categories/men" element={<Men query={query}/>} />
        <Route path="categories/women" element={<Women />} query={query}/>
        <Route path="categories/children" element={<Children query={query}/>} />
        <Route path="categories/accessories" element={<Accessories query={query}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/allproducts" element={<AllProducts query={query}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

      {/* Render popup if visible */}
      {popupVisible && (
        <Popup message={popupMessage} onClose={() => setPopupVisible(false)} />
      )}

    </>
     );

}

export default App;
