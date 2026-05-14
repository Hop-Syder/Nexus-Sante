/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description FAQ section with animated accordions
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does your healthcare facility provide?",
    answer: "We provide a wide range of medical services including general medicine, pediatrics, cardiology, and specialized dental care. Our facilities are equipped with advanced technology to ensure the best treatment.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our online reservation system on the website, by calling our support team, or visiting our clinic directly.",
  },
  {
    question: "Are your doctors certified and experienced?",
    answer: "Yes, all our doctors are board-certified specialists with years of experience in their respective fields, committed to providing high-quality patient care.",
  },
  {
    question: "Do you accept insurance plans?",
    answer: "We accept a variety of insurance plans. Please contact our administrative office or check our website for a full list of accepted insurance providers.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="container flex flex-col justify-between gap-10 py-16 lg:flex-row lg:gap-14 lg:py-20 xl:gap-20">
      <div className="mb-0 w-full max-w-md xl:max-w-xl">
        <div className="mb-3 inline-flex gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold text-secondary lg:text-sm items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
          </svg>
          FAQs
        </div>
        <h2 className="mb-5 font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]">
          Frequently asked <br />
          <span className="font-normal italic">questions</span>
        </h2>
        <p className="max-w-md text-sm text-gray lg:text-base">
          Have a health concern? Get 24/7 online access to ask a doctor and get the answers you need, anytime, anywhere.
        </p>
      </div>

      <div className="grow space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden rounded-xl border border-gray-light bg-white shadow-sm">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`flex w-full items-center justify-between gap-5 px-4 py-4 text-left text-base/6 font-semibold transition-colors lg:text-lg ${
                activeIndex === index ? "bg-gray-200 text-secondary" : "text-primary hover:bg-gray-100"
              }`}
            >
              {faq.question}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-5 shrink-0 transition-transform duration-300 ${activeIndex === index ? "rotate-45" : ""}`}
              >
                <path d="M12 5v14" /><path d="M5 12h14" />
              </svg>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="border-t border-gray-light px-4 py-5 text-sm leading-relaxed text-gray lg:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
