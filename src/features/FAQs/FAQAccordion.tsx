import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Footer from "../Footer/Footer";

const faqs = [
  {
    question: "Can I apply for finance online?",
    answer:
      "Yes, you can apply entirely online. The process takes less than 30 seconds and there is no obligation.",
  },
  {
    question: "Do you work with multiple lenders?",
    answer:
      "Yes. We work with hundreds of banks, non-banks, and specialist lenders across Australia.",
  },
  {
    question: "Can I get finance with bad credit?",
    answer:
      "Absolutely. We regularly help clients with bad credit, defaults, or complex financial situations.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Most approvals are completed the same day, depending on your situation and documents.",
  },
  {
    question: "What documents do I need?",
    answer:
      "Usually ID, proof of income, and basic personal details. We’ll guide you step by step.",
  },
  {
    question: "Do I need a deposit?",
    answer:
      "Not always. Many lenders offer options with low or no deposit.",
  },
  {
    question: "Can I finance a car I trade in?",
    answer:
      "Yes. Trade-ins can often be included as part of your finance structure.",
  },
  {
    question: "Are repayments weekly or monthly?",
    answer:
      "Both options are available depending on the lender and what suits you best.",
  },
  {
    question: "Can I pay off the loan early?",
    answer:
      "Yes. Early payout is available, though fees may depend on your lender.",
  },
  {
    question: "Does finance come with warranty options?",
    answer:
      "Yes. Warranty and protection options are available with most finance packages.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <section className="w-full bg-white px-4 py-24">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary text-center">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-center text-secondary">
          If you can’t find an answer you’re looking for feel free to contact us at{" "}
          <a
            href="mailto:info@FinanceTheCar.com.au"
            className="text-primary font-semibold"
          >
            info@FinanceTheCar.com.au
          </a>
        </p>

        {/* FAQ LIST */}
        <div className="mt-16 divide-y border-t border-b">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <FaChevronRight
                    className={`text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  />
                  <span className="font-medium text-secondary">
                    {faq.question}
                  </span>
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="pl-10 pr-4 text-secondary opacity-90">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
};

export default FAQAccordion;
