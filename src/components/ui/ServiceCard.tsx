/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Service card component for Nexus Santé Next.js
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

const ServiceCard = ({ title, description, icon, href }: ServiceCardProps) => {
  return (
    <div className="group relative rounded-[28px] bg-white px-5 pb-10 pt-4 shadow-[0_2px_3px_0px_rgba(19,24,47,0.1)] lg:pb-16 lg:pt-8">
      <div className="absolute bottom-0.5 right-0.5 grid size-12 place-content-center rounded-full bg-white text-secondary ring-[6px] ring-gray-light transition group-hover:bg-secondary group-hover:text-white lg:size-16">
        {icon}
      </div>
      <h3 className="mb-2.5 text-xl font-semibold text-primary lg:text-2xl">
        {title}
      </h3>
      <p className="mb-5 text-sm text-gray lg:text-base">
        {description}
      </p>
      <Link
        href={href}
        className="group/read absolute bottom-5 left-5 inline-flex items-center gap-2.5 text-secondary transition hover:opacity-80"
      >
        Read More
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1 size-5 duration-300 group-hover/read:ml-1 group-hover/read:mr-0"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
