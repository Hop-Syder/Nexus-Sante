/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description FAQ page for Nexus Santé Next.js
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AccordionItem from "@/components/ui/AccordionItem";

const faqs = [
  {
    question: "What services does your healthcare facility provide?",
    answer: "We offer a wide range of services, including general medicine, pediatrics, cardiology, dental care, diagnostic tests, and specialized treatments. Our team ensures you receive comprehensive care tailored to your needs.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our online booking system on the website, or by calling us directly at +111-111-1111. Walk-ins are also welcome based on availability.",
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we accept most major health insurance plans. Please contact our support team or your insurance provider to confirm coverage details.",
  },
  {
    question: "Are your doctors certified and experienced?",
    answer: "Absolutely! All our doctors are highly qualified, certified, and bring years of experience in their respective fields to ensure the best care for our patients.",
  },
  {
    question: "What are your operating hours?",
    answer: "Our healthcare facility operates from 9:00 AM to 5:00 PM, Monday to Friday. For emergencies, we are available 24/7.",
  },
  {
    question: "Can I access my medical records online?",
    answer: "Yes, we provide secure access to your medical records through our patient portal. Simply log in with your credentials to view and download your records anytime.",
  },
  {
    question: "What safety measures do you follow?",
    answer: "We adhere to strict hygiene protocols, including regular sanitization, use of protective equipment, and screening measures to ensure the safety of our patients and staff.",
  },
  {
    question: "Do you offer telemedicine services?",
    answer: "Yes, we provide telemedicine consultations for patients who prefer virtual appointments. This is a convenient option for non-emergency consultations from the comfort of your home.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <PageHeader title="FAQs" breadcrumb="FAQs" />
        
        <div className="relative py-16 lg:py-24">
          <div className="container relative lg:max-w-4xl">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </svg>
                FAQs
              </span>
              <h2 className="font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]">
                Popular Questions <span className="font-normal italic text-secondary">from Our Visitors</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-gray lg:text-base">
                Find answers to the most common questions about our services, booking process, and healthcare policies.
              </p>
            </div>

            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
