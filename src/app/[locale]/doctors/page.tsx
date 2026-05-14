/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Doctors page for Nexus Santé Next.js
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Stats from "@/components/sections/Stats";
import LogoMarquee from "@/components/ui/LogoMarquee";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Doctors | Nexus Santé",
  description: "Meet our dedicated team of certified and skilled specialists.",
};

const doctors = [
  {
    name: "Dr. Emma Newman",
    specialty: "General",
    description: "Dr. Emma Newman provides comprehensive primary care, focusing on holistic health and preventive medicine.",
    image: "/assets/images/team1.jpg",
    reverse: false,
  },
  {
    name: "Dr. Liam Bennett",
    specialty: "Pediatrics",
    description: "Dr. Liam Bennett specializes in child health, offering expert care and compassionate support for families.",
    image: "/assets/images/team2.jpg",
    reverse: true,
  },
  {
    name: "Dr. Ava Lane",
    specialty: "Cardiology",
    description: "Dr. Ava Lane is dedicated to advanced heart care, delivering personalized treatments for cardiovascular conditions.",
    image: "/assets/images/team3.jpg",
    reverse: false,
  },
  {
    name: "Dr. Mason Brooks",
    specialty: "Orthopedic",
    description: "Dr. Mason Brooks provides expert diagnosis and treatment for musculoskeletal conditions, helping regain mobility.",
    image: "/assets/images/team4.jpg",
    reverse: true,
  },
];

export default function DoctorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <PageHeader title="Our Doctors" breadcrumb="Doctors" />
        
        <div className="bg-primary py-16 lg:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/20 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-white">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </svg>
                Meet our team
              </span>
              <h2 className="mb-5 font-roboto text-[26px]/8 font-semibold text-white sm:text-3xl lg:text-[40px]/[50px]">
                A Dedicated Team of <span className="font-normal italic">Certified Specialists</span>
              </h2>
              <p className="mx-auto max-w-lg text-sm text-gray-light lg:text-base">
                Our doctors bring years of expertise and compassion to provide you with the highest standard of healthcare.
              </p>
            </div>

            <div className="mx-auto grid gap-8 lg:max-w-6xl xl:grid-cols-2">
              {doctors.map((doctor, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col items-center gap-6 overflow-hidden rounded-[32px] bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 sm:flex-row ${doctor.reverse ? 'sm:flex-row-reverse' : ''}`}
                >
                  <div className="relative size-52 shrink-0 overflow-hidden rounded-2xl border-2 border-white/10">
                    <Image src={doctor.image} alt={doctor.name} fill className="object-cover object-top" />
                  </div>
                  <div className={`relative flex flex-col ${doctor.reverse ? 'sm:items-end sm:text-right' : 'sm:items-start sm:text-left'} text-center`}>
                    <h3 className="text-xl font-bold text-white lg:text-2xl">{doctor.name}</h3>
                    <p className="mt-1 font-bold tracking-wider text-secondary">{doctor.specialty}</p>
                    <p className="mt-4 text-sm font-light leading-relaxed text-gray-light lg:text-base">
                      {doctor.description}
                    </p>
                    <div className="mt-6 flex gap-3">
                      {['facebook', 'twitter', 'instagram'].map((social) => (
                        <button key={social} className="grid size-9 place-content-center rounded-full bg-white/10 text-white transition hover:bg-secondary">
                          <span className="sr-only">{social}</span>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            {social === 'facebook' && <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z" />}
                            {social === 'twitter' && <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z" />}
                            {social === 'instagram' && <path d="M12 2c2.717 0 3.056.01 4.122.058 1.066.048 1.79.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.637.417 1.361.465 2.427.048 1.066.058 1.405.058 4.122s-.01 3.056-.058 4.122c-.048 1.066-.218 1.79-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.637.247-1.361.417-2.427.465-1.066.048-1.405.058-4.122.058s-3.056-.01-4.122-.058c-1.066-.048-1.79-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.637-.417-1.361-.465-2.427C2.01 15.056 2 14.717 2 12s.01-3.056.058-4.122c.048-1.066.218-1.79.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.523c.637-.247 1.361-.417 2.427-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />}
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Stats />
        <LogoMarquee />
      </main>
      <Footer />
    </div>
  );
}
