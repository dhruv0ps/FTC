import {
  HiOutlineClock,
  HiOutlineEmojiHappy,
  HiCheck,
} from "react-icons/hi";

const FastSimpleZeroRisk = () => {
  return (
    <>
      {/* <div className="max-w-7xl mx-auto text-center">
        <div className="border-t-2 border-100 bg-gray-200"></div>
        </div> */}

    <section className="w-full bg-white px-4 py-24">
      
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-[#F3F6F5] rounded-2xl p-10 relative">
            <h3 className="text-3xl font-extrabold text-secondary">
              Fast & Simple
            </h3>

            <div className="absolute top-8 right-8 text-secondary">
              <HiOutlineClock size={48} />
            </div>

            <ul className="mt-8 space-y-4 text-lg text-secondary">
              <li className="flex items-start gap-3">
                <HiCheck className="text-primary mt-1" size={22} />
                Most approvals same day
              </li>
              <li className="flex items-start gap-3">
                <HiCheck className="text-primary mt-1" size={22} />
                Australia wide lenders
              </li>
              <li className="flex items-start gap-3">
                <HiCheck className="text-primary mt-1" size={22} />
                No running around
              </li>
              <li className="flex items-start gap-3">
                <HiCheck className="text-primary mt-1" size={22} />
                No wasted credit checks
              </li>
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#F3F6F5] rounded-2xl p-10 relative flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold text-secondary">
                Zero Risk
              </h3>

              <div className="absolute top-8 right-8 text-secondary">
                <HiOutlineEmojiHappy size={48} />
              </div>

              <ul className="mt-8 space-y-4 text-lg text-secondary">
                <li className="flex items-start gap-3">
                  <HiCheck className="text-primary mt-1" size={22} />
                  No obligation
                </li>
                <li className="flex items-start gap-3">
                  <HiCheck className="text-primary mt-1" size={22} />
                  No upfront cost
                </li>
                <li className="flex items-start gap-3">
                  <HiCheck className="text-primary mt-1" size={22} />
                  No credit hit just to check eligibility
                </li>
              </ul>
            </div>

            {/* CTA */}
            <button
              className="
                mt-10 w-full
                bg-primary
                hover:bg-hover
                text-white
                font-semibold
                py-4
                rounded-xl
                flex items-center justify-center gap-3
                transition-colors duration-300
              "
            >
              Enquire Now!
              <span className="text-2xl leading-none">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default FastSimpleZeroRisk;
