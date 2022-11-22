import React from "react";
import { addToDb } from "../../utilities/fakedb";
import Product from "../Product/Product";
import "./Shop.css";

export default function Shop() {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  React.useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop">
      <div className="product-component">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            product={product}
            key={product.id}
          />
        ))}
      </div>
      <div className="shop-component">
        <h3>Order Summary</h3>
        <p>Items Selected : {cart.length}</p>
      </div>
    </div>
  );
}
