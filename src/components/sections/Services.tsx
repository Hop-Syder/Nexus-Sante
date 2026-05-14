/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Services section for home page with i18n and balanced positioning
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");

  const services = [
    {
      title: t("items.gen_med"),
      description: t("items.gen_med_desc"),
      href: "/services/general-medicine",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="M9 12h6" /><path d="M12 9v6" />
        </svg>
      ),
    },
    {
      title: t("items.pediatrics"),
      description: t("items.pediatrics_desc"),
      href: "/services/pediatrics",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
          <path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
          <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
        </svg>
      ),
    },
    {
      title: t("items.cardiology"),
      description: t("items.cardiology_desc"),
      href: "/services/cardiology",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 shrink-0 lg:size-10">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M17 12h-2l-2 5-2-10-2 5H7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="container mt-12 lg:-mt-24">
      <div className="relative z-2 mx-auto grid w-full gap-5 rounded-[28px] border-2 border-gray/10 bg-secondary/10 p-4 backdrop-blur-xl sm:p-7 lg:max-w-7xl lg:grid-cols-3 lg:gap-10 lg:px-10 lg:py-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
