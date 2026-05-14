/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Awards section for About Us page
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

import Image from "next/image";

const awards = [
  {
    title: "Best Dental Care Provider",
    year: "2024",
    leftImg: "/assets/images/award-left.png",
    rightImg: "/assets/images/award-right.png",
  },
  {
    title: "Top Medical Innovation Award",
    year: "2023",
    leftImg: "/assets/images/award-left.png",
    rightImg: "/assets/images/award-right.png",
  },
  {
    title: "Community Health Leadership",
    year: "2022",
    leftImg: "/assets/images/award-left.png",
    rightImg: "/assets/images/award-right.png",
  },
];

const Awards = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
            </svg>
            Awards
          </div>
          <h2 className="mb-5 font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]">
            Awards & Achievements
          </h2>
          <p className="mx-auto max-w-lg text-sm text-gray lg:text-base">
            We are honored to receive industry awards and recognition for our commitment to exceptional patient care, innovation, and service.
          </p>
        </div>
        <div className="grid gap-10 gap-y-24 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <div key={i} className="rounded-2xl border-2 border-white bg-linear-to-b from-white/10 to-white/50 px-4 pb-8 shadow-xl transition-transform hover:scale-105">
              <div className="relative mx-auto">
                <div className="mx-auto -mt-14 flex max-w-xs items-center justify-center gap-2.5 rounded-2xl bg-primary p-5 shadow-2xl">
                  <Image src={award.leftImg} alt="award" width={30} height={30} className="w-[30px] -rotate-12 opacity-90" />
                  <div className="text-center">
                    <p className="mb-2.5 text-lg font-semibold text-white">{award.title}</p>
                    <div className="flex items-center justify-center gap-2.5 font-bold text-gray-light">
                      <span className="h-0.5 w-4 rounded-full bg-secondary"></span>
                      {award.year}
                      <span className="h-0.5 w-4 rounded-full bg-secondary"></span>
                    </div>
                  </div>
                  <Image src={award.rightImg} alt="award" width={30} height={30} className="w-[30px] rotate-12 opacity-90" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
