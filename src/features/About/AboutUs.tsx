import FastSimpleZeroRisk from "../Dashboard/FastSimpleZeroRisk";
import Footer from "../Footer/Footer";
import TestimonialsCarousel from "./TestimonialsCarousel";

const AboutUs = () => {
  return (
    <>
    <section className="w-full bg-white px-4 py-24 font-poppins">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl font-semibold text-primary italic">
            Fast approvals. No Judgement. No Dealer Games.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-16 border-t border-gray-300" />

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight text-secondary">
              We make <br />
              financing <span className="text-primary">easy.</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg text-secondary">
              <p>
                Finance The Car isn’t a bank — and we’re not locked to one lender.
              </p>

              <p>
                We work with a wide network of trusted finance brokers and lenders
                across Australia. That means instead of forcing your application
                into one box, we workshop your deal and send it to the people most
                likely to get you approved on the best terms.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 text-lg text-secondary">
            <p>
              Good credit, bad credit, self-employed, complex situations —
              we’ve seen it all. And because we know who to send your deal to
              (and who to avoid), it’s statistically unlikely we can’t find you
              a solid option.
            </p>

            <p>
              No guesswork. No wasted applications. No torching your credit
              score. Just the right deal, through the right people.
            </p>
          </div>

        </div>
      </div>
      <FastSimpleZeroRisk />
      <TestimonialsCarousel/>
     
    </section>
    <Footer/>
    </>
  );
};

export default AboutUs;
