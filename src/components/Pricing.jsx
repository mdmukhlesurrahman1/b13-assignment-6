import React from "react";
import tik from "../../src/assets/tik.png";

const Pricing = () => {
  return (
    <div className="py-10 md:py-25">
      <div className="w-[95%] md:w-[85%] max-w-300 mx-auto">
        <h1 className="text-2xl md:text-5xl font-extrabold text-center mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382] text-center mb-5 md:mb-10">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        <div className="grid md:grid-cols-3 gap-7">
          {/* -------------------1------------------- */}

          <div className="bg-base-200 shadow-sm rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-bold text-2xl">Starter</h2>
                <p className="text-[#627382]">Perfect for getting started</p>
              </div>
              <h3 className="font-bold text-xl text-[#627382]">
                <span className="text-4xl text-gray-900">$0</span>/Month
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img src={tik} />
                  <p className="text-[#627382]">Access to 10 free tools</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tik} />
                  <p className="text-[#627382]">Basic templates</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tik} />
                  <p className="text-[#627382]">Community support</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tik} />
                  <p className="text-[#627382]">1 project per month</p>
                </div>
              </div>
            </div>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full w-full">
              Get Started Free
            </button>
          </div>

          {/* -------------------2------------------- */}

          <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white shadow-sm rounded-xl p-6 space-y-6 relative">
            <div className="badge bg-[#FEF3C6] text-[#BB4D00] py-4 font-bold rounded-full absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%]">Most Popular</div>
            <div className="space-y-2">
              <h2 className="font-bold text-2xl">Pro</h2>
              <p className="">Best for professionals</p>
            </div>
            <h3 className="font-bold text-xl">
              <span className="text-4xl">$29</span>/Month
            </h3>
            <div className="space-y-2">
              <p>✔ Access to all premium tools</p>
              <p>✔ Unlimited templates</p>
              <p>✔ Priority support</p>
              <p>✔ Unlimited projects</p>
              <p>✔ Cloud sync</p>
              <p>✔ Advanced analytics</p>
            </div>
            <div className="bg-white rounded-full">
              <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold rounded-full w-full">
                Start Pro Trial
              </button>
            </div>
          </div>

          {/* -------------------------------------- */}

          <div className="bg-base-200 shadow-sm rounded-xl p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="font-bold text-2xl">Enterprise</h2>
              <p className="text-[#627382]">For teams and businesses</p>
            </div>
            <h3 className="font-bold text-xl text-[#627382]">
              <span className="text-4xl text-gray-900">$99</span>/Month
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img src={tik} />
                <p className="text-[#627382]">Everything in Pro</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tik} />
                <p className="text-[#627382]">Team collaboration</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tik} />
                <p className="text-[#627382]">Custom integrations</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tik} />
                <p className="text-[#627382]">Dedicated support</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tik} />
                <p className="text-[#627382]">SLA guarantee</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tik} />
                <p className="text-[#627382]">Custom branding</p>
              </div>
            </div>

            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full w-full">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
