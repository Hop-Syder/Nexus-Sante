/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Core Values section for About Us page
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

import Image from "next/image";

const values = [
  {
    title: "Patient-Preferred Doctors",
    description: "Choose your doctor for personalized care.",
    icon: "/assets/images/doctoer.png",
  },
  {
    title: "Comprehensive Healthcare",
    description: "Tailored health plans to meet your individual needs.",
    icon: "/assets/images/healthcare.png",
  },
  {
    title: "Round-the-Clock Support",
    description: "Continuous support available whenever you need it.",
    icon: "/assets/images/bag.png",
  },
  {
    title: "Expert Nursing Care",
    description: "Skilled nursing staff to provide compassionate assistance.",
    icon: "/assets/images/nursing.png",
  },
  {
    title: "Emergency Readiness",
    description: "Efficient emergency care whenever you need it.",
    icon: "/assets/images/services.png",
  },
  {
    title: "Premium Healthcare Facilities",
    description: "State-of-the-art facilities for the best medical experience.",
    icon: "/assets/images/facilities.png",
  },
];

const CoreValues = () => {
  return (
    <div className="container py-16 lg:py-20">
      <div className="mb-10 text-left">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
          </svg>
          Medical Excellence
        </div>
        <h2 className="mb-5 font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]">
          Our Core Values <span className="font-normal italic">Define Us</span>
        </h2>
        <p className="max-w-2xl text-sm text-gray lg:text-base">
          We are committed to delivering exceptional healthcare with integrity, compassion, and innovation. Our values drive us to ensure the best outcomes for every patient.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
        {values.map((v, i) => (
          <div key={i} className="group flex flex-col items-start gap-5 transition-transform hover:-translate-y-2">
            <div className="inline-block shrink-0 rounded-2xl bg-secondary/10 p-4 transition-colors group-hover:bg-secondary">
              <Image src={v.icon} alt={v.title} width={40} height={40} className="size-10 transition-all group-hover:brightness-0 group-hover:invert" />
            </div>
            <div>
              <h3 className="mb-1.5 text-xl font-bold text-primary">{v.title}</h3>
              <p className="text-gray">{v.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
