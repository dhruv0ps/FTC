import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    name: "Client Name",
    time: "2 months ago",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dui nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    name: "Client Name",
    time: "2 months ago",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dui nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    name: "Client Name",
    time: "2 months ago",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dui nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    name: "Client Name",
    time: "2 months ago",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dui nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3500,              // ⏱ autoplay speed
        stopOnInteraction: false, // arrows won't stop autoplay
        stopOnMouseEnter: true,   // pause on hover
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* LEFT ARROW */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     text-primary hover:scale-110 transition"
        >
          <FaChevronLeft size={28} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     text-primary hover:scale-110 transition"
        >
          <FaChevronRight size={28} />
        </button>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[320px] md:min-w-[380px]
                           bg-white border border-primary
                           rounded-xl p-6"
              >
                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full" />
                    <div>
                      <p className="font-semibold text-primary">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.time}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">G</span>
                </div>

                {/* STARS */}
                <div className="flex gap-1 mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* TEXT */}
                <p className="mt-4 text-secondary text-sm leading-relaxed">
                  “{item.text}”
                </p>

                <p className="mt-3 text-sm text-gray-500 cursor-pointer">
                  Read more
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
