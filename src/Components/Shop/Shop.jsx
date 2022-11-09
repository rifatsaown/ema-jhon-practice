import React from "react";
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
        <h4>Items Selected : {cart.length}</h4>
      </div>
    </div>
  );
}
