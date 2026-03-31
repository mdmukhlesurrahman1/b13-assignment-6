import React from "react";

const Products = ({ products }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {products.map((product) => {
        console.log(product);
        return (
          <div className="card bg-base-200 shadow-sm">
            <div className="badge badge-soft badge-primary rounded-full absolute top-2.5 right-2.5">
              {product.tag}
            </div>
            <div className="card-body space-y-3">
              <div className="w-15 h-15 border-gray-300 border-2 rounded-full flex justify-center items-center">
                <img
                  src={product.icon}
                  alt=""
                  width="32px"
                />
              </div>
              <h2 className="card-title text-2xl font-black">{product.name}</h2>
              <p className="text-[#627382] line-clamp-2">
                {product.description}
              </p>
              <h3>
                <span className="text-2xl font-bold">${product.price}</span>/{product.period}
              </h3>


              <div className="flex items-center gap-2">
                <img src="../../src/assets/tik.png" />
                <p className="text-[#627382]">{product.features}</p>
              </div>

              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
