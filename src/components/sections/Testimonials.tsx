/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Testimonials section with Swiper carousel
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Nutritionist",
    image: "/assets/images/avatar.png",
    text: "The care I received was outstanding! The team is compassionate, and the services exceeded my expectations.",
  },
  {
    name: "Dr. Michael Lee",
    role: "Cardiologist",
    image: "/assets/images/avatar1.png",
    text: "Their commitment to patient health is truly remarkable. I felt supported and valued throughout my treatment.",
  },
  {
    name: "Emily Carter",
    role: "Pediatrician",
    image: "/assets/images/avatar2.png",
    text: "Amazing service and a friendly atmosphere! They truly care for their patients' well-being.",
  },
];

const Testimonials = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="overflow-hidden bg-primary/5 py-16 lg:py-20">
      <div className="container relative text-center">
        <Image
          src="/assets/images/testimonial-img.png"
          alt="profiles"
          width={300}
          height={300}
          className="animate-jump absolute -left-[450px] w-72 opacity-60 hidden xl:block"
        />
        <Image
          src="/assets/images/testimonial-img2.png"
          alt="profiles"
          width={300}
          height={300}
          className="animate-jump absolute -right-[450px] w-72 opacity-60 hidden xl:block"
        />

        <div className="mx-auto max-w-4xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{
              clickable: true,
              el: ".testimonials-pagination",
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="mx-auto mb-5 size-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-7 space-y-1 lg:mb-10">
                  <h3 className="text-xl/6 font-semibold text-primary">{t.name}</h3>
                  <p className="text-sm text-secondary font-bold">{t.role}</p>
                </div>
                <p className="text-base/6 text-gray lg:text-xl/8 italic font-medium italic">
                  "{t.text}"
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonials-pagination mt-10 flex items-center justify-center gap-2"></div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              ref={prevRef}
              type="button"
              className="group grid size-14 place-content-center rounded-tl-xl bg-gray-light text-primary transition hover:bg-primary hover:text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
              </svg>
            </button>
            <button
              ref={nextRef}
              type="button"
              className="group grid size-14 place-content-center rounded-tr-xl bg-gray-light text-primary transition hover:bg-primary hover:text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="m12 5 7 7-7 7" /><path d="M5 12h14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
