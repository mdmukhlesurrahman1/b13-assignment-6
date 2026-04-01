import React from "react";
import { toast } from "react-toastify";
import tik from "../../src/assets/tik.png";

const tagStyles = {
  primary: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-cyan-100 text-cyan-800",
  danger: "bg-red-100 text-red-800",
  secondary: "bg-gray-100 text-gray-800",
};

const Product = ({ product, setCartItems, cartItems }) => {
  const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
  const notify = () => toast.success("✔ Added to Cart!");

  const handleBuyNow = () => {
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, product]);
      notify();
    }
  };
  return (
    <div className="card bg-base-200 shadow-sm">
      <div
        className={`badge badge-soft rounded-full absolute top-2.5 right-2.5 ${tagStyles[product.tagType]}`}
      >
        {product.tag}
      </div>
      <div className="card-body space-y-3">
        <div className="w-15 h-15 border-gray-300 border-2 rounded-full flex justify-center items-center">
          <img src={product.icon} alt="" width="32px" />
        </div>
        <h2 className="card-title text-2xl font-black">{product.name}</h2>
        <p className="text-[#627382] line-clamp-2">{product.description}</p>
        <h3>
          <span className="text-2xl font-bold">${product.price}</span>/
          {product.period}
        </h3>

        <div>
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={tik} />
              <p className="text-[#627382]">{feature}</p>
            </div>
          ))}
        </div>

        <button
          
          onClick={handleBuyNow}
          disabled={isAlreadyInCart}
          className={`btn text-white font-bold rounded-full ${
            isAlreadyInCart
              ? "bg-linear-to-r from-[#009118] to-[#008844]"
              : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
          }`}
        >
          {isAlreadyInCart ? "✔ Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default Product;
