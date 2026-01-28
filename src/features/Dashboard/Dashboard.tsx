import React from "react";
import heroImage from "../../assets/iStock-2229439197.jpg";
import CreditSafeCTA from "./CreditSafeCTA";
import WhyFinanceTheCarWorks from "./WhyFinanceTheCarWorks";
import WhoWeHelp from "./WhoWeHelp";
import FastSimpleZeroRisk from "./FastSimpleZeroRisk";
import Footer from "../Footer/Footer";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage: React.FC = () => {
  return (
   <div className="w-full font-poppins bg-white">
  <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>
      {/* Headline */}
      <h2 className="text-[48px] lg:text-[56px] leading-[1.1] font-extrabold text-secondary">
        Car Finance <br /> Done Properly.
      </h2>

      {/* Sub headline */}
      <p className="mt-4 text-[22px] font-bold text-primary italic">
        Without Wreaking Your Credit Score.
      </p>

      {/* Description */}
      <p className="mt-4 text-[18px] text-secondary max-w-xl">
        Access hundreds of lenders. Fast approvals.<br />
        No judgement. No dealer games.
      </p>

      {/* FORM */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
        <input
          type="text"
          placeholder="Full Name"
          className="bg-gray-200 text-gray-700 px-5 py-4 rounded-xl outline-none border-gray-100"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="bg-gray-200 text-gray-700 px-5 py-4 rounded-xl outline-none border-gray-100"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="bg-gray-200 text-gray-700 px-5 py-4 rounded-xl outline-none border-gray-100"
        />

        <button
          className="
            
            bg-primary hover:bg-hover
            text-white font-semibold text-lg
            py-4 rounded-xl
            flex items-center justify-center gap-2
            transition-colors
          "
        >
          Enquire Now
          <span className="text-xl"><FaArrowRightLong /></span>
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex flex-col ">
      <img
        src={heroImage}
        alt="Happy family in car"
        className="rounded-2xl w-[700px] max-h-[310px] object-cover"
      />

      {/* BADGES */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-secondary font-semibold text-[15px]">
        <div>
          Bad Credit?
          <div className="text-primary font-bold">✔ Approved!</div>
        </div>
        <div>
          Self Employed?
          <div className="text-primary font-bold">✔ Approved!</div>
        </div>
        <div>
          Low Doc?
          <div className="text-primary font-bold">✔ Approved!</div>
        </div>
        <div>
          No Deposit?
          <div className="text-primary font-bold">✔ It’s Possible</div>
        </div>
      </div>
    </div>

  </section>

  <CreditSafeCTA />
  <WhyFinanceTheCarWorks />
  <WhoWeHelp />
  <FastSimpleZeroRisk />
  <Footer />
</div>


  );
};

export default HomePage;
