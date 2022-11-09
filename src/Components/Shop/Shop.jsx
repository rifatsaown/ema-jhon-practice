import React from "react";
import Product from "../Product/Product";
import "./Shop.css";

export default function Shop() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="shop">
      <div className="product-component">
        {products.map((product) => (
          <Product product={product} key={product.id}/>
        ))}
      </div>
      <div className="shop-component">
        <h3>Order Summary</h3>
      </div>
    </div>
  );
}
