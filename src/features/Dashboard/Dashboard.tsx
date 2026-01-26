import React from "react";
import heroImage from "../../assets/iStock-2229439197.jpg"; 
import CreditSafeCTA from "./CreditSafeCTA";
import WhyFinanceTheCarWorks from "./WhyFinanceTheCarWorks";
import WhoWeHelp from "./WhoWeHelp";
import FastSimpleZeroRisk from "./FastSimpleZeroRisk";
import Footer from "../Footer/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="w-full font-poppins">
  
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl font-extrabold text-secondary leading-tight">
            Car Finance<br />Done Properly.
          </h2>

          <p className="mt-4 text-2xl font-semibold text-primary italic">
            Without Wreaking Your Credit Score.
          </p>

          <p className="mt-4 text-lg text-secondary max-w-xl">
            Access hundreds of lenders. Fast approvals.<br />
            No judgement. No dealer games.
          </p>

          {/* FORM */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary sm:col-span-2"
            />

            <button className="sm:col-span-2 bg-primary text-white text-lg font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 hover:bg-hover">
              Enquire Now
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={heroImage}
            alt="Happy family in car"
            className="rounded-2xl w-full object-cover"
          />

          {/* BADGES */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-secondary font-semibold">
            <div>
              Bad Credit?<br />
              <span className="text-primary">✔ Approved!</span>
            </div>
            <div>
              Self Employed?<br />
              <span className="text-primary">✔ Approved!</span>
            </div>
            <div>
              Low Doc?<br />
              <span className="text-primary">✔ Approved!</span>
            </div>
            <div>
              No Deposit?<br />
              <span className="text-primary">✔ It’s Possible</span>
            </div>
          </div>
        </div>

      </section>
      <CreditSafeCTA/>
      <WhyFinanceTheCarWorks/>
      <WhoWeHelp/>
      <FastSimpleZeroRisk/>
      <Footer/>
    </div>

  );
};

export default HomePage;
