/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Scrolling logo marquee component
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

import Image from "next/image";

const logos = [
  "/assets/images/logo-1.svg",
  "/assets/images/logo-2.svg",
  "/assets/images/logo-3.svg",
  "/assets/images/logo-4.svg",
  "/assets/images/logo-5.svg",
  "/assets/images/logo-6.svg",
  "/assets/images/logo-7.svg",
];

const LogoMarquee = () => {
  return (
    <div className="overflow-hidden bg-gray-light/30 py-10">
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {/* Render logos twice for seamless loop */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="inline-block px-5">
            <Image
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              width={160}
              height={60}
              className="w-40 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
