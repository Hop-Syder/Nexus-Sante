/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Hero section component with optimized height and i18n support
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  const common = useTranslations("Common");

  return (
    <div className="overflow-hidden bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center bg-no-repeat pt-[60px] lg:pt-[70px]">
      <div className="container flex flex-col justify-between gap-5 lg:flex-row lg:gap-10">
        <div className="max-w-3xl pt-8 pb-10 lg:pb-24 lg:pt-12 xl:pb-32 xl:pt-16">
          <div className="mb-6 lg:mb-8">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
              </svg>
              {t("badge")}
            </span>
            <h1 className="mb-5 font-roboto text-3xl font-semibold text-primary md:text-4xl/snug xl:text-6xl/[70px] 2xl:text-7xl/[80px]">
              {t("title")}
            </h1>
            <p className="w-full max-w-lg text-sm text-gray lg:text-base">
              {t("description")}
            </p>
          </div>
          <div className="inline-flex flex-wrap gap-2.5 lg:gap-5">
            <Link href="/services" className="btn">
              {t("button")}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M7 7h10v10" /><path d="M7 17 17 7" />
              </svg>
            </Link>
            <Link href="/about-us" className="btn btn-secondary group">
              <span>{common("learnMore")}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition group-hover:rotate-45">
                <path d="M7 7h10v10" /><path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-auto lg:-mr-10 xl:-mr-20 2xl:-mr-36">
          <Image
            src="/assets/images/hero-img.png"
            alt="hero banner"
            width={1024}
            height={800}
            priority
            className="h-auto w-80 sm:w-96 lg:w-full lg:max-w-4xl xl:max-w-5xl"
          />
          <div className="absolute -left-0 bottom-24 hidden items-center gap-2.5 rounded-full border border-gray-light bg-primary/10 p-2.5 pr-5 backdrop-blur-xl lg:flex xl:-left-14 xl:bottom-32 xl:p-4 xl:pr-8">
            <div className="flex">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`relative ${i > 0 ? "-ml-3" : ""} size-10 shrink-0 overflow-hidden rounded-full border-2 border-gray-light xl:size-14`}>
                  <Image src={`/assets/images/avatar${i || ""}.png`} alt="avatar" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1 text-white">
              <span className="text-xl font-bold xl:text-2xl">120+</span>
              <p className="text-sm">Patient Recover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
