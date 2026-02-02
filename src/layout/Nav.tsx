import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/LOGO12.png";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">

        {/* LOGO */}
        <Link to="/" className="flex items-center z-20">
          <img src={Logo} alt="Logo" className="h-12 sm:h-16 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <Link
            to="/finance-my-car"
            className="text-secondary font-bold hover:text-hover transition-colors"
          >
            Finance My Car
          </Link>
          <Link
            to="/about-us"
            className="text-secondary font-bold hover:text-hover transition-colors"
          >
            About Us
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link
          to="/contact-us"
          className="hidden md:inline-block bg-primary hover:bg-hover text-white font-extrabold px-6 py-2.5 rounded-lg transition-colors"
        >
          Contact Us
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-secondary z-20"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white border-t shadow-md md:hidden">
            <div className="flex flex-col items-center gap-6 py-6">
              <Link
                to="/finance-my-car"
                className="text-secondary font-bold hover:text-hover"
                onClick={() => setOpen(false)}
              >
                Finance My Car
              </Link>
              <Link
                to="/about-us"
                className="text-secondary font-bold hover:text-hover"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="bg-primary hover:bg-hover text-white font-extrabold px-6 py-2.5 rounded-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
