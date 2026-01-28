import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';


export default function Footer1() {
  const socialIcons = [
    { name: 'Facebook', icon: FaFacebook },
    { name: 'Twitter', icon: FaTwitter },
    { name: 'Instagram', icon: FaInstagram },
    { name: 'LinkedIn', icon: FaLinkedin },
    { name: 'YouTube', icon: FaYoutube },
    { name: 'TikTok', icon: FaTiktok },
  ];

  const links1 = [
    { label: 'About Us', href: '#' },
    { label: 'Why It Works', href: '#' },
    { label: 'Who We Help', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'FAQS', href: '#' },
  ];

  const links2 = [
    { label: 'Finance My Car', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ];

  return (
    <footer className="w-[89rem] mx-auto bg-secondary text-white rounded-2xl mb-10 font-poppins">
  <div className="max-w-7xl mx-auto px-6 py-10 lg:py-24">

   

    {/* DIVIDER */}
    {/* <div className="border-t border-gray-500 my-12" /> */}
    <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* BRAND INFO */}
      <div>
        <h3 className="text-2xl font-extrabold text-primary mb-4">
          FinanceTheCar
        </h3>
        <p className="font-semibold mb-1">info@FinanceTheCar.com.au</p>
        <p className="font-semibold mb-6">1300 038 206</p>
        <p className="text-xs text-gray-400 mt-10 text-nowrap">
          All Rights Reserved To FinanceTheCar ©
        </p>
      </div>

      {/* LINKS COLUMN 1 */}
      <div>
        <ul className="space-y-2 ml-12">
          {links1.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-hover font-normal transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* LINKS COLUMN 2 */}
      <div>
        <ul className="space-y-3">
          {links2.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-hover transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* SOCIAL */}
      <div>
        <p className="font-bold">
          Find Us On
        </p>
        <div className="h-[2px] w-32 bg-hover mb-4 mt-2"></div>
        <div className="flex gap-4 text-2xl">
          {socialIcons.map((icon) => {
            const IconComponent = icon.icon;
            return (
              <a
                key={icon.name}
                href="#"
                className="hover:text-hover transition-colors"
                title={icon.name}
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>
      </div>
      </div>

    </div>
  </div>
</footer>

  );
}