import {
  HiOutlineClock,
  HiOutlineEmojiHappy,
  HiCheck,
} from "react-icons/hi";
import {
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineCash,
} from "react-icons/hi";
import Footer1 from "../Footer/Footer1";

const whoWeHelp = [
  { icon: HiOutlineChartBar, label: "Bad Credit / Defaults" },
  { icon: HiOutlineUser, label: "Self Employed\n& ABN Holders" },
  { icon: HiOutlineBriefcase, label: "Casual or New Job\nHolders" },
  { icon: HiOutlineDocumentText, label: "Low Doc Applications" },
  { icon: HiOutlineCash, label: "First Time Buyers" },
];

const FinanceOptions = () => {
  return (
    <div className="font-poppins">
    <section className="w-full bg-white px-4 py-24">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
              Check Your <br /> Finance Options
            </h1>

            <p className="mt-4 text-lg font-semibold text-primary italic">
              It takes less than 30 seconds!
            </p>

            <p className="mt-2 text-secondary">
              No Obligation, No Spam, We’ll call you shortly.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div>
            <p className="mb-3 font-semibold text-secondary">
              Contact Form
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-100 px-4 py-3 rounded-lg outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-gray-100 px-4 py-3 rounded-lg outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-100 px-4 py-3 rounded-lg outline-none sm:col-span-2"
              />
              <button
                className="
                  sm:col-span-2
                  bg-primary
                  hover:bg-hover
                  text-white
                  font-semibold
                  py-3
                  rounded-lg
                  flex items-center justify-center gap-2
                  transition-colors
                "
              >
                Enquire Now
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 border-t" />

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FAST & SIMPLE */}
          <div className="bg-[#F3F6F5] rounded-2xl p-10 relative">
            <h3 className="text-2xl font-extrabold text-secondary">
              Fast & Simple
            </h3>
            <HiOutlineClock
              size={42}
              className="absolute top-8 right-8 text-secondary"
            />
            <ul className="mt-6 space-y-3 text-secondary">
              {[
                "Most approvals same day",
                "Australia wide lenders",
                "No running around",
                "No wasted credit checks",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <HiCheck className="text-primary mt-1" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ZERO RISK */}
          <div className="bg-[#F3F6F5] rounded-2xl p-10 relative">
            <h3 className="text-2xl font-extrabold text-secondary">
              Zero Risk
            </h3>
            <HiOutlineEmojiHappy
              size={42}
              className="absolute top-8 right-8 text-[#1F3A5F]"
            />
            <ul className="mt-6 space-y-3 text-[#1F3A5F]">
              {[
                "No obligation",
                "No upfront cost",
                "No credit hit just to check eligibility",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <HiCheck className="text-primary mt-1" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= WHO WE HELP ================= */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-extrabold text-secondary">
            Who We Help
          </h2>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">
            {whoWeHelp.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4"
                >
                  <Icon size={56} className="text-secondary" />
                  <p className="text-secondary font-semibold whitespace-pre-line">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
    <Footer1/>
    </div>
  );
};

export default FinanceOptions;
