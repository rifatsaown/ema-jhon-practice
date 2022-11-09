import React from "react";
import "./Product.css";

export default function Product(props) {
  const { name, seller, price, ratings, img } = props.product;
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
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
}
