import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const removeHandler = id => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        removeHandler={removeHandler}
                    ></ReviewItems>)
                }
                {
                    cart.length === 0 && <h2>No items to review, Please <Link to="/">Shop</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button>
                            Proceed Shipping
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders; <h2>this is orders</h2>