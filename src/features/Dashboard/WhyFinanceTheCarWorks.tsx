

const WhyFinanceTheCarWorks = () => {
  return (
    <section className="w-full px-4 py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">
          Why FinanceTheCar Works
        </h2>

        {/* CONTENT */}
        <div className="mt-8 space-y-4 text-lg md:text-xl text-secondary">
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
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyFinanceTheCarWorks;
