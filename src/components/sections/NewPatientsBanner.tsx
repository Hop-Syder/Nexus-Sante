/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description New Patients Banner section with i18n
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

"use client";

import Image from "next/image";
import { useAppointment } from "@/context/AppointmentContext";
import { useTranslations } from "next-intl";

const NewPatientsBanner = () => {
  const { openModal } = useAppointment();
  const tHeader = useTranslations("Header");
  const t = useTranslations("NewPatients");

  return (
    <div className="container lg:max-w-(--breakpoint-xl) mt-16 lg:mt-20">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-secondary px-5 py-16 sm:px-10 lg:py-14 xl:px-20">
        <Image
          src="/assets/images/dna.png"
          alt="DNA"
          width={900}
          height={500}
          className="absolute -bottom-10 right-0 h-auto w-[900px] rotate-6 opacity-30 pointer-events-none"
        />
        <div className="relative z-10 space-y-7">
          <div>
            <h2 className="mb-5 font-roboto text-[26px]/8 font-semibold text-white sm:text-3xl lg:text-[40px]/[50px]">
              {t("title").split('|italic|')[0]}
              <span className="font-normal italic">{t("italic")}</span>
            </h2>
            <p className="max-w-xl text-sm text-gray-light lg:text-base">
              {t("description")}
            </p>
          </div>
          <button 
            type="button" 
            onClick={openModal}
            className="btn !bg-white !text-primary hover:!bg-secondary hover:!text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0">
              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h5" /><path d="M17.5 17.5 16 16.3V14" /><circle cx="16" cy="16" r="6" />
            </svg>
            {tHeader("appointment")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPatientsBanner;
