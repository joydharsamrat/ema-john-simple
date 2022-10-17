import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItems.css';

const ReviewItems = ({ product, removeHandler }) => {
    const { id, name, img, price, quantity, shipping } = product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="no-photo" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>Name: {name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => removeHandler(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;