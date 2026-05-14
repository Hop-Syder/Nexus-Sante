/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Services page for Nexus Santé Next.js
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import LogoMarquee from "@/components/ui/LogoMarquee";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Nexus Santé",
  description: "Explore our wide range of medical services and solutions.",
};

const services = [
  {
    title: "General Medicine",
    description: "Comprehensive care for adults, addressing a wide range of chronic and acute conditions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M9 12h6" /><path d="M12 9v6" />
      </svg>
    ),
  },
  {
    title: "Pediatrics",
    description: "Specialized care for children, from newborns to teenagers, ensuring healthy growth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
        <path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" /><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
      </svg>
    ),
  },
  {
    title: "Cardiology",
    description: "Advanced heart care services, from diagnosis to treatment, tailored to your health.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
        <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M17 12h-2l-2 5-2-10-2 5H7" />
      </svg>
    ),
  },
  {
    title: "Orthopedics",
    description: "Expert care for bone and joint health, offering surgical and non-surgical treatments.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M9 12h6" /><path d="M12 9v6" />
      </svg>
    ),
  },
  {
    title: "Dermatology",
    description: "Comprehensive skin care services, including diagnosis and treatment of various conditions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
        <path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" /><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
      </svg>
    ),
  },
  {
    title: "Dentistry",
    description: "Complete dental care from routine checkups to advanced treatments for all ages.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
        <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M17 12h-2l-2 5-2-10-2 5H7" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <PageHeader title="Our Services" breadcrumb="Services" />
        
        <div className="container my-16 lg:my-20">
          <div className="relative mx-auto w-full rounded-[40px] border-2 border-white bg-secondary/5 p-8 backdrop-blur-xl lg:p-16">
            <div className="mb-12">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </svg>
                Expertise
              </div>
              <h2 className="mb-5 max-w-2xl font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]">
                We offer more than Services & <span className="font-normal italic">all Solutions Medical.</span>
              </h2>
              <p className="max-w-xl text-sm text-gray lg:text-base">
                We are committed to providing exceptional medical care with a patient-first approach. Our wide range of specialties ensures you get the best treatment.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {services.map((service, index) => (
                <div key={index} className="group relative rounded-[32px] bg-white p-6 shadow-xl transition-all hover:-translate-y-2 lg:p-10">
                  <div className="absolute bottom-1 right-1 grid size-14 place-content-center rounded-full bg-gray-100 text-secondary transition-all group-hover:bg-secondary group-hover:text-white lg:size-20">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary lg:text-2xl">{service.title}</h3>
                  <p className="mb-8 text-sm text-gray lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <Link href="/services" className="group/link inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:text-primary">
                    READ MORE
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Services /> {/* Reuse home services as "Other Services" or just to fill the page */}
        <Testimonials />
        <LogoMarquee />
      </main>
      <Footer />
    </div>
  );
}
