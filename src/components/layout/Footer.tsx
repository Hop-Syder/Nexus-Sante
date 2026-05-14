/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Footer component with optimized height and restored icons
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"/></svg>
    },
    {
      name: 'Twitter',
      href: '#',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"/></svg>
    },
    {
      name: 'Instagram',
      href: '#',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.5-12.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
    }
  ];

  return (
    <footer className="bg-primary pt-10 lg:pt-16">
      <div className="container">
        <div className="flex flex-col flex-wrap justify-between gap-8 pb-8 lg:flex-row lg:pb-12">
          <div className="max-w-md">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/assets/images/logo-footer.svg"
                alt="logo"
                width={128}
                height={40}
                className="h-auto w-28 lg:w-32"
              />
            </Link>
            <p className="mb-6 text-sm text-gray-light lg:text-base">
              {t("description")}
            </p>
            <div className="flex gap-3">
               {socialLinks.map((social) => (
                 <a key={social.name} href={social.href} className="grid size-9 place-content-center rounded-full bg-secondary text-white transition hover:bg-white hover:text-secondary">
                   <span className="sr-only">{social.name}</span>
                   {social.icon}
                 </a>
               ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-8 lg:gap-20">
            <div>
              <h2 className="mb-4 inline-block border-b border-secondary pb-1 text-lg font-bold text-white lg:mb-6 lg:text-xl">{t("quickLinks")}</h2>
              <ul className="flex flex-col gap-2 text-sm text-gray-light lg:text-base">
                <li><Link href="/" className="group inline-flex items-center"><span className="h-1 w-0 rounded-full bg-secondary duration-300 group-hover:mr-2 group-hover:w-2.5"></span>{tHeader("home")}</Link></li>
                <li><Link href="/about-us" className="group inline-flex items-center"><span className="h-1 w-0 rounded-full bg-secondary duration-300 group-hover:mr-2 group-hover:w-2.5"></span>{tHeader("about")}</Link></li>
                <li><Link href="/services" className="group inline-flex items-center"><span className="h-1 w-0 rounded-full bg-secondary duration-300 group-hover:mr-2 group-hover:w-2.5"></span>{tHeader("services")}</Link></li>
                <li><Link href="/doctors" className="group inline-flex items-center"><span className="h-1 w-0 rounded-full bg-secondary duration-300 group-hover:mr-2 group-hover:w-2.5"></span>{tHeader("doctors")}</Link></li>
                <li><Link href="/contact" className="group inline-flex items-center"><span className="h-1 w-0 rounded-full bg-secondary duration-300 group-hover:mr-2 group-hover:w-2.5"></span>{tHeader("contact")}</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 inline-block border-b border-secondary pb-1 text-lg font-bold text-white lg:mb-6 lg:text-xl">Resources</h2>
              <ul className="flex flex-col gap-2 text-sm text-gray-light lg:text-base">
                <li><Link href="/faq" className="group inline-flex items-center"><span className="h-1 w-0 rounded-full bg-secondary duration-300 group-hover:mr-2 group-hover:w-2.5"></span>FAQs</Link></li>
                <li><Link href="/privacy-policy" className="group inline-flex items-center"><span className="h-1 w-0 rounded-full bg-secondary duration-300 group-hover:mr-2 group-hover:w-2.5"></span>{t("privacy")}</Link></li>
                <li><Link href="/terms-conditions" className="group inline-flex items-center"><span className="h-1 w-0 rounded-full bg-secondary duration-300 group-hover:mr-2 group-hover:w-2.5"></span>{t("terms")}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid divide-white/10 border-y border-white/10 lg:grid-cols-3 lg:divide-x">
          <div className="flex items-center gap-2.5 py-4 text-gray-light lg:justify-center lg:py-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 shrink-0 fill-white text-primary lg:size-6"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
            <p className="text-sm font-semibold lg:text-base">4648 Lorem ipsum Consectetur AA, 1920</p>
          </div>
          <div className="flex items-center gap-2.5 py-4 text-gray-light lg:justify-center lg:py-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" className="size-5 shrink-0 fill-white text-primary lg:size-6"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            <a href="mailto:info@healthora.com" className="text-sm font-semibold transition hover:opacity-70 lg:text-base">info@healthora.com</a>
          </div>
          <div className="flex items-center gap-2.5 py-4 text-gray-light lg:justify-center lg:py-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5 shrink-0 fill-white text-primary lg:size-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            <a href="tel:+111-111-1111" className="text-sm font-semibold transition hover:opacity-70 lg:text-base">+111-111-1111</a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-gray-light md:flex-row">
          <p className="order-2 text-center text-xs font-semibold md:order-1 md:text-left">
            © {currentYear} Nexus Santé, Inc. {t("rights")}
          </p>
          <div className="order-1 flex items-center gap-4 md:order-2">
            <Link href="/privacy-policy" className="text-xs font-semibold underline underline-offset-2 transition hover:no-underline">{t("privacy")}</Link>
            <span className="h-3 w-px shrink-0 bg-secondary/30"></span>
            <Link href="/terms-conditions" className="text-xs font-semibold underline underline-offset-2 transition hover:no-underline">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
