import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { Link } from "react-router-dom"; 

const Footer1 = () => {
  return (
    <footer className="w-full font-poppins">
      <div className="max-w-full mx-auto bg-[#002B5B] text-white  px-4 py-24">
        <div className="">
         
       
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            {/* BRAND */}
            <div>
              <h4 className="text-2xl font-bold text-[#00C26F]">FinanceTheCar</h4>
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
                  <Link to="/about-us" className="hover:text-[#00C26F]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/why-it-works" className="hover:text-[#00C26F]">
                    Why It Works
                  </Link>
                </li>
                <li>
                  <Link to="/who-we-help" className="hover:text-[#00C26F]">
                    Who We Help
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-[#00C26F]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:text-[#00C26F]">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* LINKS 2 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link to="/finance-my-car" className="hover:text-[#00C26F]">
                    Finance My Car
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#00C26F]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-[#00C26F]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="mb-4 font-semibold border-b border-[#00C26F] inline-block pb-1">
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

export default Footer1;