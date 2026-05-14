/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Header component with fixed mobile icon visibility
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";
import { useAppointment } from "@/context/AppointmentContext";
import { useTranslations, useLocale } from "next-intl";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { openModal } = useAppointment();
  
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header
      id="top-header"
      className={`header sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-primary shadow-lg lg:top-1 lg:mt-0" : "bg-primary lg:top-1 lg:mt-4 lg:bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between bg-primary py-4 lg:rounded-xl lg:px-5 xl:px-10 xl:py-0">
          <div className="shrink-0 lg:w-1/4">
            <div className="relative -mb-8 -mt-[30px] inline-block rounded-b-xl bg-secondary px-2 py-7 before:absolute before:-right-1 before:top-0.5 before:-z-1 before:size-2 before:rotate-45 before:bg-secondary after:absolute after:-left-1 after:top-0.5 after:-z-1 after:hidden after:size-2 after:rotate-45 after:bg-secondary lg:-mb-10 lg:pb-8 lg:pt-7 lg:after:block">
              <Link href="/">
                <Image
                  src="/assets/images/logo-header.svg"
                  alt="Logo"
                  width={128}
                  height={40}
                  className="h-auto w-32"
                />
              </Link>
            </div>
          </div>

          <ul className="hidden shrink-0 items-center justify-center gap-5 xl:flex xl:w-1/2 xl:gap-7">
            <li><Link href="/" className="nav-links">{t("home")}</Link></li>
            <li><Link href="/about-us" className="nav-links">{t("about")}</Link></li>
            <li><Link href="/services" className="nav-links">{t("services")}</Link></li>
            <li><Link href="/doctors" className="nav-links">{t("doctors")}</Link></li>
            <li><Link href="/contact" className="nav-links">{t("contact")}</Link></li>
          </ul>

          <div className="flex shrink-0 items-center justify-end gap-5 lg:w-1/4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-bold text-white transition hover:text-secondary uppercase"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              {locale === "en" ? "FR" : "EN"}
            </button>

            <button type="button" onClick={openModal} className="btn hidden lg:flex">
              {t("appointment")}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
            </button>
            <button type="button" onClick={toggleMenu} className="grid place-content-center text-white transition hover:opacity-70 xl:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-7 shrink-0">
                <path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`contact-overlay fixed inset-0 z-40 bg-primary/70 backdrop-blur-md duration-300 ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`} onClick={toggleMenu}></div>
      <div className={`contact-menu fixed top-0 z-50 flex h-screen w-full max-w-sm flex-col justify-between gap-14 overflow-y-auto bg-primary pt-5 duration-500 ${isMenuOpen ? "right-0" : "-right-full"}`}>
        <div className="grow px-6">
          <div className="absolute right-4 top-4 text-right">
            <button type="button" onClick={toggleMenu} className="text-white transition hover:opacity-70">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-7 shrink-0">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="mb-5">
            <Link href="/" className="inline-block" onClick={toggleMenu}>
              <Image src="/assets/images/logo-footer.svg" alt="logo" width={128} height={40} className="h-auto w-32" />
            </Link>
          </div>
          <ul className="flex shrink-0 flex-col gap-3 border-y border-secondary/20 pb-7 pt-5">
            <li><Link href="/" onClick={toggleMenu} className="nav-links">{t("home")}</Link></li>
            <li><Link href="/about-us" onClick={toggleMenu} className="nav-links">{t("about")}</Link></li>
            <li><Link href="/services" onClick={toggleMenu} className="nav-links">{t("services")}</Link></li>
            <li><Link href="/doctors" onClick={toggleMenu} className="nav-links">{t("doctors")}</Link></li>
            <li><Link href="/contact" onClick={toggleMenu} className="nav-links">{t("contact")}</Link></li>
          </ul>
          
          <div className="py-5 lg:py-10">
            <button 
              onClick={() => { toggleLanguage(); toggleMenu(); }}
              className="mb-8 flex items-center gap-2 text-lg font-bold text-white uppercase transition hover:text-secondary"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              {locale === "en" ? "Passer en Français" : "Switch to English"}
            </button>

            <div className="mb-5 inline-block whitespace-nowrap border-b border-secondary pb-1.5 text-xl font-bold text-white lg:text-2xl">Contact</div>
            <div className="space-y-5 text-gray-light">
              <div className="flex gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 size-5 shrink-0 text-secondary"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                <p>4648 Lorem ipsum Consectetur AA, 1920</p>
              </div>
              <div className="flex gap-2.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 size-5 shrink-0 text-secondary"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <a href="mailto:info@healthora.com" className="transition hover:text-white">info@healthora.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
