/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Reusable header for interior pages
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

import Link from "next/link";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
  return (
    <div className="relative bg-[url('/assets/images/about-banner.png')] bg-cover bg-center bg-no-repeat pt-[100px]">
      <span className="absolute inset-0 bg-primary/70"></span>
      <div className="container relative flex h-72 flex-col items-center justify-center lg:h-96">
        <h1 className="mb-5 text-center font-roboto text-3xl/8 font-semibold text-white sm:text-3xl md:text-4xl/10 xl:text-6xl/[60px]">
          {title}
        </h1>
        <div className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-semibold text-gray-light backdrop-blur-lg">
          <Link href="/" className="inline-flex items-center justify-center gap-1.5 transition hover:text-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0 text-secondary">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M9 22V12h6v10" />
            </svg>
            Home
          </Link>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-white">
            <path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" />
          </svg>
          <span className="text-white">{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
