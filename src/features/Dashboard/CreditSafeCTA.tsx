import React from "react";

const CreditSafeCTA:React.FC = () => {
  return (
    <section className="w-full px-4 py-20">
      <div className="max-w-7xl mx-auto bg-secondary rounded-3xl px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">
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
        <div className="text-white text-lg space-y-6">
          <p>
            They fire off your application to multiple lenders without
            checking if it will even get approved. That means multiple
            credit hits, lower credit score & harder to get approved
            next time.
          </p>

          <p className="text-primary font-semibold">
            We workshop every deal first.
          </p>

          <p>
            We assess it properly and make sure you’re actually going
            to get approved before submitting anything.
          </p>

          <p className="italic opacity-90">
            One clean application, done properly.
          </p>

          {/* CTA BUTTON */}
          <button
            className="
              mt-4 inline-flex items-center gap-3
              bg-primary
              hover:bg-hover
              text-white
              font-semibold
              px-8 py-4
              rounded-xl
              transition-colors duration-300
            "
          >
            Enquire Now!
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CreditSafeCTA;
