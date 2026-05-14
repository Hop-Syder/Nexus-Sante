/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Statistics section with i18n support
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

"use client";

import Counter from "@/components/ui/Counter";
import { useTranslations } from "next-intl";

const Stats = () => {
  const t = useTranslations("Stats");

  const stats = [
    {
      label: t("patients"),
      end: 2000,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 shrink-0">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: t("doctors"),
      end: 240,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 shrink-0">
          <path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" />
        </svg>
      ),
    },
    {
      label: t("oncology"),
      end: 870,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 shrink-0">
          <path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" />
          <path d="m12 18 2.57-3.5" />
          <path d="M6.243 9.016a7 7 0 0 1 11.507-.009" />
          <path d="M9.35 14.53 12 11.22" />
          <path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" />
        </svg>
      ),
    },
    {
      label: t("years"),
      end: 20,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-10 shrink-0">
          <path d="M12 11v4" /><path d="M14 13h-4" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M18 6v14" /><path d="M6 6v14" /><rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-primary/5 py-16 lg:py-20">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold text-primary sm:text-4xl">
                <div className="text-secondary">
                  {stat.icon}
                </div>
                <div>
                  <Counter end={stat.end} suffix="+" />
                </div>
              </div>
              <p className="text-center text-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
