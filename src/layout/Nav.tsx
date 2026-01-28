import { Link } from "react-router-dom";
import Logo from "../assets/LOGO12.png";

const Header = () => {
  return (
    <header className="w-full border-b bg-white font-poppins">
    <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">
  {/* Logo */}
  <Link to="/" className="flex items-center">
    <img src={Logo} alt="Logo" className="h-16 w-auto" />
  </Link>

  <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
    <Link to="/finance-my-car" className="text-secondary font-bold hover:text-hover transition-colors">
      Finance My Car
    </Link>
    <Link to="/about-us" className="text-secondary font-bold hover:text-hover transition-colors">
      About Us
    </Link>
  </nav>

  <Link to="/contact-us" className="bg-primary hover:bg-hover text-white font-extrabold px-6 py-2.5 rounded-lg transition-colors">
    Contact Us
  </Link>
</div>

    </header>
  );
};

export default Header;