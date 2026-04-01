import React from "react";

const Workflow = () => {
  return (
    <div className="py-10 md:py-25 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="w-[95%] md:w-[85%] max-w-300 mx-auto">
        <h1 className="text-2xl md:text-5xl font-extrabold text-center mb-4 text-white">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-white text-center mb-5 md:mb-10">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="bg-white rounded-full">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold rounded-full">
              Explore Products
            </button>
          </div>
          <button className="btn btn-outline border-white rounded-full text-white font-bold">View Pricing</button>
        </div>
          <p className="text-white text-center">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Workflow;
