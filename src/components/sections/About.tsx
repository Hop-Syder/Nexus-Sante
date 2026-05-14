/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description About Us section with i18n
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  const common = useTranslations("Common");

  return (
    <div className="container flex flex-col gap-10 py-16 lg:flex-row lg:py-20 xl:gap-[100px]">
      <div className="relative lg:w-[450px] lg:shrink-0 xl:w-full xl:max-w-2xl">
        <div className="relative w-full">
          <Image
            src="/assets/images/about-img1.png"
            alt="About Us"
            width={600}
            height={500}
            className="h-auto w-full object-cover pr-28 sm:pr-80 lg:pr-20 xl:pr-60"
          />
          <div className="absolute right-0 top-5 z-10 flex size-24 flex-col items-center justify-center rounded-full border-2 border-white bg-secondary text-center text-sm text-white shadow-[1px_3px_5px_0px_rgba(19,24,47,0.2)] sm:size-36 sm:gap-0.5 sm:border-[6px] sm:text-base lg:bottom-[28%] xl:right-44">
            <span className="font-roboto text-3xl/8 font-semibold sm:text-5xl">20+</span>
            {t("experience")}
          </div>
          <Image
            src="/assets/images/stethoscope.png"
            alt="stethoscope"
            width={224}
            height={200}
            className="absolute right-0 top-40 ml-5 hidden w-56 xl:block"
          />
          <div className="-mt-20 pl-12 sm:pl-52 lg:pl-14 xl:pl-52">
            <Image
              src="/assets/images/about-img2.png"
              alt="About Us"
              width={600}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <span className="mb-3 inline-flex gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
            </svg>
            {t("badge")}
          </span>
          <h2 className="mb-5 font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]">
            {t("title").split('|italic|')[0]}
            <span className="font-normal italic">{t("italic")}</span>
          </h2>
          <p className="max-w-2xl text-sm text-gray lg:text-base">
            {t("description")}
          </p>
        </div>
        <div className="group grid gap-3 divide-dashed divide-gray-light py-7 sm:grid-cols-2 sm:gap-0 sm:divide-x-2 lg:py-10">
          <div className="flex gap-5 pr-5">
            <div className="text-secondary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="size-7">
                <path d="M12 11v4" /><path d="M14 13h-4" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M18 6v14" /><path d="M6 6v14" /><rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg/6 font-semibold text-primary lg:text-xl">{t("doctor_support")}</h3>
              <p className="text-sm text-gray lg:text-base">{t("doctor_support_desc")}</p>
            </div>
          </div>
          <div className="flex gap-5 sm:pl-5">
            <div className="text-secondary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="size-7">
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg/6 font-semibold text-primary lg:text-xl">{t("client_support")}</h3>
              <p className="text-sm text-gray lg:text-base">{t("client_support_desc")}</p>
            </div>
          </div>
        </div>
        <Link href="/about-us" className="btn">
          {common("learnMore")}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition group-hover:rotate-45">
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default About;
