import {
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineCash,
} from "react-icons/hi";

const items = [
  {
    icon: HiOutlineChartBar,
    label: "Bad Credit / Defaults",
  },
  {
    icon: HiOutlineUser,
    label: "Self Employed\n& ABN Holders",
  },
  {
    icon: HiOutlineBriefcase,
    label: "Casual or New Job\nHolders",
  },
  {
    icon: HiOutlineDocumentText,
    label: "Low Doc Applications",
  },
  {
    icon: HiOutlineCash,
    label: "First Time Buyers",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="w-full bg-white px-4 py-24">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary">
          Who We Help
        </h2>

        {/* ICON GRID */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4"
              >
                <Icon
                  size={56}
                  className="text-[#1F3A5F]"
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
              hover:bg-secondary
              text-white
              font-semibold
              px-8 py-4
              rounded-xl
              transition-colors duration-300
            "
          >
            Enquire Now!
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhoWeHelp;
