import React from "react";
import Product from "./Product";

const Products = ({ products, setCartItems, cartItems}) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {products.map((product) => {
        return <Product key={product.id} product={product} setCartItems={setCartItems} cartItems={cartItems}  />;
      })}
    </div>
  );
};

export default Products;
