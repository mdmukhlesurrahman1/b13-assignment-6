import React from "react";
import circle from "../../src/assets/circle.png";
import play from "../../src/assets/play.png";
import banner from "../../src/assets/banner.png";

const Hero = () => {
  return (
    <div className="my-20 w-[95%] md:w-[85%] max-w-300 mx-auto flex flex-col-reverse lg:flex-row gap-15 items-center justify-between">
      <div className="flex-1  text-center justify-items-center lg:justify-items-start lg:text-left space-y-6">
        <span className="flex gap-2 items-center bg-[#E1E7FF] py-2 px-4 rounded-full w-fit">
          <img src={circle} />
          <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
            New: AI-Powered Tools Available
          </p>
        </span>
        <h1 className="font-extrabold text-5xl">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-gray-500">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-4">
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full">
            Explore Products
          </button>
          <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-0.5">
            <button className="btn font-bold rounded-full">
              <img src={play} />
              <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Watch Demo
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={banner} />
      </div>
    </div>
  );
};

export default Hero;
