import React from "react";

const NavBar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0">
      <div className="navbar w-full md:w-[85%] max-w-300 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow font-bold"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <h1 class="text-xl lg:text-2xl font-black bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ml-2">
            DigiTools
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:gap-2">
          <div className="relative btn btn-ghost">
            <span className="absolute top-0 left-7 text-xs bg-red-500 rounded-full text-white px-1">0</span>
            <img src="../../src/assets/shopping-cart.png" width="20px" alt="" srcset="" />
          </div>

          <button className="btn btn-ghost p-2 lg:p-4">login</button>

          <a className="btn p-2 lg:p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
