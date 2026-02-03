import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialIcons = [
    { name: 'Facebook', icon: FaFacebook },
    { name: 'Twitter', icon: FaTwitter },
    { name: 'Instagram', icon: FaInstagram },
    { name: 'LinkedIn', icon: FaLinkedin },
    { name: 'YouTube', icon: FaYoutube },
    { name: 'TikTok', icon: FaTiktok },
  ];

  const links1 = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Why It Works', to: '/' },        
  { label: 'Who We Help', to: '/' },          
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQS', to: '/faqs' },
];

const links2 = [
  { label: 'Finance My Car', to: '/finance-my-car' },
  { label: 'Privacy Policy', to: '#' },      
  { label: 'Terms & Conditions', to: '#' },  
];


 return (
  <footer className="w-full max-w-[89rem] mx-auto bg-secondary text-white rounded-2xl mb-6 md:mb-10 font-poppins px-4">
    <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-24">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT – FORM + TEXT */}
          <div className="flex flex-col items-start w-full">

            {/* FORM BLOCK */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-300 text-gray-700 px-4 py-3 rounded-lg outline-none placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-gray-300 text-gray-700 px-4 py-3 rounded-lg outline-none placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-300 text-gray-700 px-4 py-3 rounded-lg outline-none placeholder-gray-500 sm:col-span-2"
              />
              <button className="bg-primary hover:bg-hover text-white font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors sm:col-span-2">
                Enquire Now
                <span className="text-xl"><FaArrowRightLong /></span>
              </button>
            </div>

            {/* TEXT BLOCK */}
            <div className="mt-6 max-w-md">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-2">
                Independent finance specialists with access to hundreds of Australian lenders.
              </p>
              <p className="text-primary font-semibold">
                We work for you, not the dealership.
              </p>
            </div>
          </div>

          {/* RIGHT – HEADING */}
          <div className="flex flex-col text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Check Your Options Now!
            </h2>
            <p className="text-primary text-base sm:text-lg font-bold">
              It takes less than 30 seconds.
            </p>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-500 my-10 sm:my-12" />

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND INFO */}
        <div>
          <h3 className="text-2xl font-extrabold text-primary mb-4">
            FinanceTheCar
          </h3>
          <p className="font-semibold mb-1 break-all">
            info@FinanceTheCar.com.au
          </p>
          <p className="font-semibold mb-4">
            1300 038 206
          </p>
          <p className="text-xs text-gray-400 mt-6">
            All Rights Reserved To FinanceTheCar ©
          </p>
        </div>

        {/* LINKS COLUMN 1 */}
        <div>
          <ul className="space-y-2 sm:ml-6 lg:ml-12">
            {links1.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="hover:text-hover transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LINKS COLUMN 2 */}
        <div>
          <ul className="space-y-3">
            {links2.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="hover:text-hover transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <p className="font-bold">Find Us On</p>
          <div className="h-[2px] w-24 bg-primary mb-4 mt-2"></div>
          <div className="flex gap-4 text-xl sm:text-2xl">
            {socialIcons.map((icon) => {
              const IconComponent = icon.icon;
              return (
                <a
                  key={icon.name}
                  href="#"
                  className="hover:text-hover transition-colors"
                  title={icon.name}
                >
                  <IconComponent size={22} />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  </footer>
);


  
}