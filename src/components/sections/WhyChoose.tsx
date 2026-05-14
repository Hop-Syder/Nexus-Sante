/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Why Choose Us section for Nexus Santé Next.js with i18n
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

"use client";

import { useTranslations } from "next-intl";

const WhyChoose = () => {
  const t = useTranslations("WhyChoose");

  const items = [
    {
      title: t("items.dentist"),
      description: t("items.dentist_desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 text-secondary">
          <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
        </svg>
      ),
      dark: true,
    },
    {
      title: t("items.price"),
      description: t("items.price_desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 text-secondary">
          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
      ),
      dark: false,
    },
    {
      title: t("items.reservation"),
      description: t("items.reservation_desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 text-secondary">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 14h6" /><path d="M12 17v-6" />
        </svg>
      ),
      dark: false,
    },
    {
      title: t("items.satisfactory"),
      description: t("items.satisfactory_desc"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 text-secondary">
          <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" /><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 15 6 6" /><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
        </svg>
      ),
      dark: true,
    },
  ];

  return (
    <div className="bg-gray-light/50 py-16 lg:py-20">
      <div className="container flex flex-col justify-between gap-10 lg:flex-row lg:gap-14 xl:gap-20">
        <div className="mb-0 max-w-2xl">
          <div className="mb-3 inline-flex gap-1.5 rounded-lg bg-secondary/10 p-2 items-center text-xs font-bold uppercase text-secondary lg:text-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
            </svg>
            {t("badge")}
          </div>
          <h2 className="mb-5 font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]">
            {t("title").split('|italic|')[0]}
            <span className="font-normal italic">{t("italic")}</span>
          </h2>
          <p className="max-w-lg text-sm text-gray lg:text-base">
            {t("description")}
          </p>
        </div>
        <div className="grid grow sm:grid-cols-2 lg:max-w-xl xl:max-w-[690px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-8 ${
                item.dark 
                  ? "bg-primary text-white" 
                  : "bg-linear-to-tr from-white via-transparent to-white/50"
              } ${
                index === 0 ? "rounded-[30px] rounded-br-none" :
                index === 1 ? "rounded-tr-[30px]" :
                index === 2 ? "order-4 rounded-bl-[30px] bg-linear-to-bl sm:order-3" :
                "order-3 rounded-[30px] rounded-tl-none sm:order-4"
              }`}
            >
              {item.icon}
              <h3 className={`my-4 text-lg/6 font-semibold lg:text-xl ${!item.dark ? "text-primary" : ""}`}>
                {item.title}
              </h3>
              <p className={item.dark ? "text-gray-light" : "text-gray"}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
