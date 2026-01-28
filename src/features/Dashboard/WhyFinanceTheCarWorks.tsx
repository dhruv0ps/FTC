
import { FaArrowRightLong } from "react-icons/fa6";

const WhyFinanceTheCarWorks = () => {
  return (
    <section className="w-full px-4 py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-secondary">
          Why FinanceTheCar Works
        </h2>

        {/* CONTENT */}
        <div className="mt-6 space-y-2 text-lg md:text-xl text-secondary">
          <p>
            Dealers use 1–3 lenders. If you don’t fit their box, you’re declined.
          </p>

          <p className="text-primary font-semibold">
            We access hundreds.
          </p>

          <p>
            Banks, non-banks & specialist lenders that dealers don’t have.
          </p>

          <p>
            If there’s a way to structure it, we’ll find it.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            className="
              inline-flex items-center gap-3
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
            <span className="text-2xl leading-none"><FaArrowRightLong /></span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyFinanceTheCarWorks;
