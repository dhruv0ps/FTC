import { FaArrowRightLong } from "react-icons/fa6"
import img1 from "../../assets/Img1.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"

const items = [
  {
    img: img6,
    label: "Bad Credit / Defaults",
  },
  {
    img: img1,
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


const WhoWeHelp = () => {
  return (
    <section className="w-full bg-white px-4 py-24 font-poppins">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-semibold text-secondary">
          Who We Help
        </h2>

        {/* ICON GRID */}
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
  className="w-24 h-24 object-contain"
/>

                <p className="text-[#1F3A5F] font-semibold leading-snug whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* SUBTEXT */}
        <div className="mt-16 text-lg md:text-xl">
          <p className="text-secondary">
            Been told no before?
          </p>
          <p className="text-primary font-semibold">
            That’s exactly why you’re here.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            className="
              inline-flex items-center gap-3
              bg-primary
              hover:bg-hover
              text-white
              font-semibold
              px-8 py-4
              rounded-xl
              transition-colors duration-300
            "
          >
            Enquire Now!
            <span className="text-2xl leading-none"><FaArrowRightLong /></span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhoWeHelp;
