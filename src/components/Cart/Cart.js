import React, { Children } from 'react';
import './Cart.css'

const Cart = ({ clearCart, cart, children }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3 className='cart-title'>
                Order Summary
            </h3>
            <p>Selected products : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : {+tax}</p>
            <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
            <div>
                {/* <button onClick={clearCart}>Clear Cart</button> */}
                {children}
            </div>
        </div>
    );
};

export default Cart;