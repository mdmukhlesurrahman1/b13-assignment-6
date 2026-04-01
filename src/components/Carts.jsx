import React from "react";
import { toast } from "react-toastify";
import cartImg from "../../src/assets/big-cart.png";

const Carts = ({ setCartItems, cartItems }) => {
  const removeToast = () => toast.error("Removed the Item!");

  const paymentToast = () => toast("Payment Successfully!");

  const handleDelete = (cart) => {
    const filterItem = cartItems.filter((c) => c.name != cart.name);
    setCartItems(filterItem);
    removeToast();
  };

  const handlePayment = () => {
    setCartItems([]);
    paymentToast();
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border border-gray-300 rounded-xl md:rounded-2xl p-4 md:p-8 space-y-6">
      <h2 className="font-bold text-xl md:text-2xl">Your Cart</h2>

      {cartItems.length != 0 ? (
        <div className="space-y-6">
          <div className="space-y-4">
            {cartItems.map((cart) => (
              <div className="rounded-xl md:rounded-2xl p-2 md:p-5 bg-base-300 flex items-center justify-between">
                <div className="w-15 h-15 border-gray-300 border-2 rounded-full flex justify-center items-center bg-white">
                  <img src={cart.icon} alt="" width="32px" />
                </div>
                <div className="flex-1 ml-2 md:ml-4 space-y-2">
                  <h2 className="font-bold text-lg md:text-xl">{cart.name}</h2>
                  <p className="text-[#627382] font-semibold">$ {cart.price}</p>
                </div>
                <button
                  onClick={() => handleDelete(cart)}
                  className="btn btn-soft btn-error"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#627382]">Total:</p>
            <h3 className="text-2xl font-bold">$ {total}</h3>
          </div>
          <button
            onClick={handlePayment}
            className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full w-full"
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center py-20 flex-col">
          <img src={cartImg} width="200px" />
          <p className="text-gray-500">Your Cart is Empty!</p>
        </div>
      )}
    </div>
  );
};

export default Carts;
