import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CreditSafeCTA:React.FC = () => {
  return (
    <section className="w-full px-4 py-20 font-poppins">
  <div
    className="
      mx-auto
      w-full
      max-w-7xl

      bg-secondary
      rounded-3xl
      px-8 sm:px-12 lg:px-16
      py-12
      grid grid-cols-1 lg:grid-cols-2
      gap-12
      items-start
    "
  >
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-[42px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.05]">
        <span className="text-primary">Most Dealers</span>
        <br />
        <span className="text-primary">Torch Credit</span>
        <br />
        <span className="text-primary">Scores.</span>
        <br />
        <span className="text-white">We Don’t.</span>
      </h2>
    </div>

    {/* RIGHT CONTENT */}
    <div className="text-white space-y-4 max-w-xl">
      <p className="text-base sm:text-xl leading-relaxed opacity-95">
        They fire off your application to multiple lenders without checking if
        it will even get approved. That means multiple credit hits, lower credit
        score & harder to get approved next time.
      </p>

      <p className="text-primary font-semibold text-xl">
        We workshop every deal first.
      </p>

      <p className="text-base sm:text-xl leading-relaxed opacity-95">
        We assess it properly and make sure you’re actually going to get approved
        before submitting anything.
      </p>

      <p className=" opacity-95 text-base sm:text-xl ">
        One clean application, done properly.
      </p>

      {/* CTA BUTTON */}
      <button
        className="
          mt-6 inline-flex items-center gap-3
          bg-primary hover:bg-hover
          text-white
          font-semibold
          px-8 py-4
          rounded-xl
          transition-colors duration-300
        "
      >
        Enquire Now
        <span className="text-xl"><FaArrowRightLong /></span>
      </button>
    </div>
  </div>
</section>

  );
};

export default CreditSafeCTA;
