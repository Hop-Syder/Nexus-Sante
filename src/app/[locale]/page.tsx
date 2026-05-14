/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Main home page for Nexus Santé Next.js with i18n
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import WhyChoose from "@/components/sections/WhyChoose";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import LogoMarquee from "@/components/ui/LogoMarquee";
import Image from "next/image";
import NewPatientsBanner from "@/components/sections/NewPatientsBanner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <Services />
        <About />
        <WhyChoose />
        <NewPatientsBanner />
        <Stats />
        <Team />
        <Testimonials />
        <FAQ />
        <LogoMarquee />
      </main>
      <Footer />
    </div>
  );
}
