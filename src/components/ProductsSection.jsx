import React, { use } from "react";
import { useState } from "react";
import Products from "./Products";
import Carts from "./Carts";

const ProductsSection = ({ productsPromise, cartItems, setCartItems }) => {
  const products = use(productsPromise);

  const [tab, setTab] = useState("Products");

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

        <div className="mb-10 flex mx-auto justify-center items-center">
          <span className="border border-gray-300 rounded-full gap-2 flex">
            <button
              onClick={() => setTab("Products")}
              className={`btn rounded-full font-bold ${tab === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-ghost"}`}
            >
              Products
            </button>
            <button
              onClick={() => setTab("Cart")}
              className={`btn rounded-full font-bold ${tab === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-ghost"}`}
            >
              Cart ({cartItems.length})
            </button>
          </span>
        </div>

        {tab === "Products" && <Products products={products} setCartItems={setCartItems} cartItems={cartItems} />}

        {tab === "Cart" && <Carts setCartItems={setCartItems} cartItems={cartItems} />}
      </div>
    </div>
  );
};

export default ProductsSection;
