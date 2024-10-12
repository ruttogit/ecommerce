import "./Cart.css";

function Cart({ cart, cartItemsQuantity,setCart }) {

    const handleRemoveFromCart = (id) =>{
        const updatedCart = cart.filter((item) => item.id !== id);

        setCart(updatedCart);
    }



    const handlePlusQuantity = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }; // Increase quantity
            }

            return item;
        });
        
        // Update cart state
        setCart(updatedCart);
    };

    const handleMinusQuantity = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1; // Prevent going below 1
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        // Update cart state
        setCart(updatedCart);
    };

    return (
        <div className='cart'>
            <h2 className='cart-title'>Your Cart ({cartItemsQuantity} items)</h2>
            <div className="cart-items">
                <div className="cart-item-list">
                    {cart.map((item) => {
                        return (
                            <div className="cart-card" key={item.id}>
                                <div className="cart-left">
                                    <div className="cart-thumnail">
                                        <img src={item.image} alt='' />
                                    </div>
                                    <div className="cart-details">
                                        <div className="top">
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div className="bottom">
                                            <div className="bottom-left">
                                                <h4>@${item.price}</h4>
                                            </div>
                                            <div className="bottom-right">
                                                <button className="delete-btn" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-center">
                                    <div className="cart-quantity">
                                        <div onClick={() => handleMinusQuantity(item.id)}>-</div>
                                        <div>{item.quantity}</div>
                                        <div onClick={() => handlePlusQuantity(item.id)}>+</div>
                                    </div>
                                </div>
                                <div className="cart-right">
                                    <div className="price">
                                        <h3>${(item.price * item.quantity).toFixed(2)}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="cart-totals">
                    <div className="cart-total-prices">
                        <div className="subtotal">
                            <h3>Sub-total</h3>
                            <p>${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                        </div>
                        
                        <div className="grand-total">
                            <h2>Grand Total</h2>
                            <p>${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="button-checkout">
                        <button className='btn'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
