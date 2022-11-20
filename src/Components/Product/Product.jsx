import React from "react";
import { MdOutlineShoppingCart } from 'react-icons/md';
import "./Product.css";

export default function Product({ product, handleAddToCart }) {
  const { name, seller, price, ratings, img } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="product-price">Price : ${price}</p>
        <small>
          <p>Manufacter : {seller}</p>
          <p>Rating: {ratings} Star</p>
        </small>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <span className="btn-text">Add to Cart</span> <MdOutlineShoppingCart />
      </button>
    </div>
  );
}
