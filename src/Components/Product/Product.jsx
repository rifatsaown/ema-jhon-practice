import React from 'react';
import './Product.css';

export default function Product(props) {
  const {name , seller , price , ratings , img}=props.product;;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>By: {seller}</p>
      <p>${price}</p>
      <p>Rating: {ratings}</p>
      <button className='btn-cart'>add to cart</button>
    </div>
  )
}
