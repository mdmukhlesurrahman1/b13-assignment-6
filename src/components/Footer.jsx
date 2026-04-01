import React from "react";
import fb from "../../src/assets/fb.png";
import insta from "../../src/assets/in.png";
import x from "../../src/assets/x.png";

const Footer = () => {
  return (
    <div className="pt-10 pb-8 md:pt-25 bg-[#101727]">
      <div className="w-[95%] md:w-[85%] max-w-300 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mx-4 text-white mb-10 md:mb-20">
          <div className="col-span-2">
            <h1 className="font-extrabold text-3xl md:text-5xl mb-5">
              DigiTools
            </h1>
            <p className="text-sm md:text-lg">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="space-y-4 mb-5">
            <p className="text-xl font-bold">Product</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Integrations</p>
          </div>

          <div className="space-y-4 mb-5">
            <p className="text-xl font-bold">Company</p>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
          </div>

          <div className="space-y-4">
            <p className="text-xl font-bold">Resources</p>
            <p>Documentation</p>
            <p>Help Center</p>
            <p>Community</p>
            <p>Contact</p>
          </div>

          <div className="space-y-4">
            <p className="text-xl font-bold">Social Links</p>
            <div className="flex gap-2 md:gap-4">
              <img src={fb} alt="" />
              <img src={insta} alt="" />
              <img src={x} alt="" />
            </div>
          </div>
        </div>
        <hr className="border-gray-400 mb-7" />
        <div className="text-white flex flex-col md:flex-row gap-4 justify-between items-center">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
