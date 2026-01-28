
import Footer from "../Footer/Footer";
import img3 from "../../assets/IMG11.png"
import img2 from "../../assets/IMG12.png"
import img1 from "../../assets/IMG13.png"
import { FaArrowRightLong } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <>
    <section className="w-full bg-white px-4 py-24 font-poppins">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-secondary">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-secondary">
            Need to get in touch with us? Either fill out the form with your inquiry
            or reach us via our other points of contact.
          </p>
        </div>

   {/* CONTACT INFO */}
<div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

  {/* PHONE */}
  <div className="flex flex-col items-center gap-3">
    <img
      src={img1}
      alt="Phone"
      className="w-64 h-16 object-contain"
    />
    <p className="font-semibold text-secondary">
      1300 038 206
    </p>
  </div>

  {/* EMAIL */}
  <div className="flex flex-col items-center gap-3">
    <img
      src={img2}
      alt="Email"
      className="w-32 h-16 object-contain"
    />
    <p className="font-semibold text-secondary">
      info@FinanceTheCar.com.au
    </p>
  </div>

  {/* LOCATION */}
  <div className="flex flex-col items-center gap-3">
    <img
      src={img3}
      alt="Location"
      className="w-32 h-16 object-contain"
    />
    <p className="font-semibold text-secondary text-sm">
      9/11 Yazaki Way,<br />
      Carrum Downs 3201,<br />
      VIC Australia
    </p>
  </div>

</div>


        {/* CONTENT GRID */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* MAP */}
          <div>
            <iframe
              title="Finance The Car Location"
              src="https://www.google.com/maps?q=9/11%20Yazaki%20Way%20Carrum%20Downs%20VIC%203201&output=embed"
              className="w-full h-[350px] rounded-2xl border"
              loading="lazy"
            />
            <a
              href="https://www.google.com/maps?q=9/11%20Yazaki%20Way%20Carrum%20Downs%20VIC%203201"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                mt-6
                bg-primary
                hover:bg-hover
                text-white
                font-semibold
                px-6 py-3
                rounded-lg
                transition-colors
              "
            >
              Get Directions
            <span className="text-2xl leading-none"><FaArrowRightLong /></span>
            </a>
          </div>

          {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* LEFT COLUMN – INPUTS */}
  <div className="flex flex-col gap-4">
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
      className="bg-gray-100 px-4 py-3 rounded-lg outline-none"
    />
  </div>

  {/* RIGHT COLUMN – MESSAGE + BUTTON */}
  <div className="flex flex-col gap-4">
    <textarea
      placeholder="Message"
      rows={4}
      className="bg-gray-100 px-4 py-3 rounded-lg outline-none resize-none"
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
      Submit
            <span className="text-2xl leading-none"><FaArrowRightLong /></span>
    </button>
  </div>

</div>


        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactUs;
