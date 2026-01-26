import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="w-full font-poppins">
      <div className="max-w-8xl mx-auto bg-[#002B5B] text-white  px-4 py-24">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT FORM */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg outline-none sm:col-span-2"
                />
                <button
                  className="
                    sm:col-span-2
                    bg-[#00C26F]
                    hover:bg-[#7AC143]
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

              <p className="mt-6 max-w-xl text-lg">
                Independent finance specialists with access to hundreds of Australian lenders.
              </p>
              <p className="text-[#00C26F] font-semibold">
                We work for you, not the dealership.
              </p>
            </div>

            {/* RIGHT TEXT */}
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Check Your <br /> Options Now!
              </h3>
              <p className="mt-2 text-[#00C26F] italic">
                It takes less than 30 seconds.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-16 border-t border-white/30" />

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            {/* BRAND */}
            <div>
              <h4 className="text-2xl font-bold text-primary">FinanceTheCar</h4>
              <p className="mt-4">info@FinanceTheCar.com.au</p>
              <p>1300 038 206</p>
              <p className="mt-6 text-xs opacity-80">
                All Rights Reserved To FinanceTheCar ©
              </p>
            </div>

            {/* LINKS 1 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link to="/about-us" className="hover:text-hover">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/why-it-works" className="hover:text-hover">
                    Why It Works
                  </Link>
                </li>
                <li>
                  <Link to="/who-we-help" className="hover:text-hover">
                    Who We Help
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-hover">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:text-hover">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* LINKS 2 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link to="/finance-my-car" className="hover:text-hover">
                    Finance My Car
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-hover">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-hover">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="mb-4 font-semibold border-b border-hover inline-block pb-1">
                Find Us On
              </p>
              <div className="flex gap-4 text-xl mt-4">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;