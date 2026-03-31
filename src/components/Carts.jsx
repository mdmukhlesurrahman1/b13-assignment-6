import React from "react";

const Carts = ({ setCartItems, cartItems }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-5 md:p-10 space-y-6">
      <h2 className="font-bold text-2xl">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map((cart) => (
          <div className="rounded-2xl p-5 bg-base-300 flex items-center justify-between">
            <div className="w-15 h-15 border-gray-300 border-2 rounded-full flex justify-center items-center bg-white">
              <img src={cart.icon} alt="" width="32px" />
            </div>
            <div className="flex-1 ml-4 space-y-2">
              <h2 className="font-bold text-xl">{cart.name}</h2>
              <p className="text-[#627382] font-semibold">$ {cart.price}</p>
            </div>
            <button className="btn btn-soft btn-error">Remove</button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#627382]">Total:</p>
        <h3 className="text-2xl font-bold">$0</h3>
      </div>
      <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full w-full">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Carts;
