
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'


const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, price, seller, ratings } = product;


    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p>Ratings : {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to cart
                <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;