/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Medical Team section with Swiper carousel, i18n and restored icons
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  const t = useTranslations("Team");

  const teamMembers = [
    {
      name: "Dr. Emma Newman",
      roleKey: "physiotherapist",
      image: "/assets/images/team1.jpg",
    },
    {
      name: "Dr. Liam Bennett",
      roleKey: "neurologist",
      image: "/assets/images/team2.jpg",
    },
    {
      name: "Dr. Ava Lane",
      roleKey: "physiotherapist",
      image: "/assets/images/team3.jpg",
    },
    {
      name: "Dr. Noah Smith",
      roleKey: "cardiologist",
      image: "/assets/images/team4.jpg",
    },
  ];

  const socialIcons = [
    { name: 'Facebook', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"/></svg> },
    { name: 'Twitter', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"/></svg> },
    { name: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M12 2.04c-2.71 0-3.05.01-4.12.06-1.06.05-1.79.21-2.43.46-.66.25-1.22.6-1.78 1.15-.55.56-.9 1.12-1.15 1.78-.25.64-.41 1.37-.46 2.43-.05 1.07-.06 1.41-.06 4.12s.01 3.05.06 4.12c.05 1.06.21 1.79.46 2.43.25.66.6 1.22 1.15 1.78.56.55 1.12.9 1.78 1.15.64.25 1.37.41 2.43.46 1.07.05 1.41.06 4.12.06s3.05-.01 4.12-.06c1.06-.05 1.79-.21 2.43-.46.66-.25 1.22-.6 1.78-1.15.55-.56.9-1.12 1.15-1.78.25-.64.41-1.37.46-2.43.05-1.07.06-1.41.06-4.12s-.01-3.05-.06-4.12c-.05-1.06-.21-1.79-.46-2.43-.25-.66-.6-1.22-1.15-1.78-.56-.55-1.12-.9-1.78-1.15-.64-.25-1.37-.41-2.43-.46-1.07-.05-1.41-.06-4.12-.06zm0 1.8c2.66 0 2.97.01 4.02.06.97.04 1.5.21 1.85.35.46.18.79.4 1.15.75.35.35.57.68.75 1.14.14.35.31.88.35 1.85.05 1.05.06 1.36.06 4.02s-.01 2.97-.06 4.02c-.04.97-.21 1.5-.35 1.85-.18.46-.4.79-.75 1.15-.35.35-.68.57-1.14.75-.35.14-.88.31-1.85.35-1.05.05-1.36.06-4.02.06s-2.97-.01-4.02-.06c-.97-.04-1.5-.21-1.85-.35-.46-.18-.79-.4-1.15-.75-.35-.35-.57-.68-.75-1.14-.14-.35-.31-.88-.35-1.85-.05-1.05-.06-1.36-.06-4.02s.01-2.97.06-4.02c.04-.97.21-1.5.35-1.85.18-.46.4-.79.75-1.15.35-.35.68-.57 1.14-.75.35-.14.88-.31 1.85-.35 1.05-.05 1.36-.06 4.02-.06zM12 7.23c-2.63 0-4.77 2.14-4.77 4.77s2.14 4.77 4.77 4.77 4.77-2.14 4.77-4.77-2.14-4.77-4.77-4.77zm0 7.74c-1.64 0-2.97-1.33-2.97-2.97s1.33-2.97 2.97-2.97 2.97 1.33 2.97 2.97-1.33 2.97-2.97 2.97zM16.97 5.71a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 0 0 0-2.24z"/></svg> },
    { name: 'LinkedIn', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg> }
  ];

  return (
    <div className="bg-primary py-16 lg:py-20 overflow-hidden">
      <div className="container mb-10 text-center">
        <span className="mb-3 inline-flex gap-1.5 rounded-lg bg-secondary/20 p-2 items-center text-xs font-bold uppercase text-secondary lg:text-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-white">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
          </svg>
          {t("badge")}
        </span>
        <h2 className="mb-5 font-roboto text-[26px]/8 font-semibold text-white sm:text-3xl lg:text-[40px]/[50px]">
          {t("title").split('|italic|')[0]}
          <span className="font-normal italic">{t("italic")}</span>
        </h2>
        <p className="mx-auto max-w-lg text-sm text-gray-light lg:text-base">
          {t("description")}
        </p>
      </div>

      <div className="px-4 lg:px-20">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="team-swiper !pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-[400px] overflow-hidden rounded-2xl">
                <span className="absolute inset-0 bg-secondary/30 z-10"></span>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden bg-secondary/70 px-4 py-5 backdrop-blur-xs">
                  <div className="-mt-14 mb-5 flex justify-center gap-2.5 duration-300 group-hover:mt-0">
                    {socialIcons.map((social) => (
                      <a key={social.name} href="#" className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 transition hover:bg-white hover:text-secondary">
                        <span className="sr-only">{social.name}</span>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <div className="text-center">
                    <Link href={`/doctors/${member.name.toLowerCase().replace(/ /g, '-')}`} className="mb-1 inline-block text-2xl font-semibold text-gray-100 transition hover:opacity-80">
                      {member.name}
                    </Link>
                    <p className="text-primary font-medium">{t(`roles.${member.roleKey}`)}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
