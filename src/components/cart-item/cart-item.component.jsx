import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './cart-item.styles.scss';

const CartItem = ({item: { imageUrl, price, name, quantity }}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>   
        </div>
    </div>
)

export default CartItem;