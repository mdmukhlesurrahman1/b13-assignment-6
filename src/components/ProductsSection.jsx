import React, { use } from "react";
import Products from "./Products";

const ProductsSection = ({productsPromise}) => {
  const products = use(productsPromise);

  return (
    <div className="py-15 md:py-30">
      <div className="w-[95%] md:w-[85%] max-w-300 mx-auto">
        <h1 className="font-extrabold text-2xl md:text-4xl text-center">
          Premium Digital Tools
        </h1>
        <p className="max-w-135 mx-auto text-center my-4">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div>
            
        </div>

        <Products products={products}/>
      </div>
    </div>
  );
};

export default ProductsSection;
