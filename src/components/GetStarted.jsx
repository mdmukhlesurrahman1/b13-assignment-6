import React from "react";
import userPng from "../../src/assets/user.png";
import packagePng from "../../src/assets/package.png";
import rocketPng from "../../src/assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="py-10 md:py-25 bg-base-200">
      <div className="w-[95%] md:w-[85%] max-w-300 mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          Get Started in 3 Steps
        </h1>
        <p className="text-[#627382] text-center mb-5 md:mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid md:grid-cols-3 gap-7">

          <div className="h-85 bg-white shadow-sm rounded-xl flex flex-col justify-center items-center p-6 relative">
            <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-10 w-10 font-bold text-white absolute top-5 right-5">
              01
            </div>
            <div className="h-25 w-25 rounded-full bg-base-300 flex justify-center items-center mb-4">
              <img src={userPng} alt="" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Create Account
            </h2>
            <p className="text-[#627382] text-center">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="h-85 bg-white shadow-sm rounded-xl flex flex-col justify-center items-center p-6 relative">
            <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-10 w-10 font-bold text-white absolute top-5 right-5">
              02
            </div>
            <div className="h-25 w-25 rounded-full bg-base-300 flex justify-center items-center mb-4">
              <img src={packagePng} alt="" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Choose Products
            </h2>
            <p className="text-[#627382] text-center">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="h-85 bg-white shadow-sm rounded-xl flex flex-col justify-center items-center p-6 relative">
            <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-10 w-10 font-bold text-white absolute top-5 right-5">
              03
            </div>
            <div className="h-25 w-25 rounded-full bg-base-300 flex justify-center items-center mb-4">
              <img src={rocketPng} alt="" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Start Creating
            </h2>
            <p className="text-[#627382] text-center">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
