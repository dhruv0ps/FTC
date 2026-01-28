import {
  HiOutlineClock,
  HiOutlineEmojiHappy,
  HiCheck,
} from "react-icons/hi";

import Footer1 from "../Footer/Footer1";
import img1 from "../../assets/Img1.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"
import { FaArrowRightLong } from "react-icons/fa6";
const items = [
  {
    img: img1,
    label: "Bad Credit / Defaults",
  },
  {
    img: img6,
    label: "Self Employed\n& ABN Holders",
  },
  {
    img: img5,
    label: "Casual or New Job\nHolders",
  },
  {
    img: img4,
    label: "Low Doc Applications",
  },
  {
    img: img3,
    label: "First Time Buyers",
  },
];

const FinanceOptions = () => {
  return (
    <div className="font-poppins">
    <section className="w-full bg-white px-4 py-24">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-7xl font-semibold text-secondary leading-tight">
              Check Your <br /> Finance Options
            </h1>

            <p className="mt-4 text-lg font-semibold text-primary ">
              It takes less than 30 seconds!
            </p>

            <p className="mt-2 text-2xl text-secondary">
              No Obligation, No Spam, We’ll call you shortly.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="mt-20">
            <p className="mb-3 font-semibold font-base text-secondary">
              Contact Form
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-200 px-4 py-3 rounded-lg border-gray-200"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-gray-200 px-4 py-3 rounded-lg border-gray-200"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-200 px-4 py-3 rounded-lg  border-gray-200"
              />
              <button
                className="
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
            <span className="text-2xl leading-none"><FaArrowRightLong /></span>
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
          <h2 className="text-4xl font-bold text-secondary">
            Who We Help
          </h2>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4"
              >
                <img
  src={item.img}
  alt={item.label}
  className="w-24 h-16 object-contain"
/>

                <p className="text-[#1F3A5F] font-semibold leading-snug whitespace-pre-line">
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
