import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

         <Link
            to="/"
            className="hover:text-hover transition-colors"
          >
        <h1 className="text-2xl font-bold text-primary">
          FinanceTheCar
        </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-secondary font-medium">
          <Link
            to="/finance-my-car"
            className="hover:text-hover transition-colors"
          >
            Finance My Car
          </Link>

          <Link
            to="/about-us"
            className="hover:text-hover transition-colors"
          >
            About Us
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact-us"
          className="
            bg-primary
            hover:bg-hover
            text-white
            px-5 py-2
            rounded-lg
            font-semibold
            transition-colors
          "
        >
          Enquire Now!
        </Link>

      </div>
    </header>
  );
};

export default Header;
