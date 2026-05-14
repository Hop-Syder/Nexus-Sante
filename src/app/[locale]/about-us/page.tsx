/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description About Us page for Nexus Santé Next.js
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/sections/About";
import CoreValues from "@/components/sections/CoreValues";
import Awards from "@/components/sections/Awards";
import Stats from "@/components/sections/Stats";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "About Us | Nexus Santé",
  description: "Learn more about our medical excellence and core values.",
};

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <PageHeader title="About Us" breadcrumb="About Us" />
        <About />
        <CoreValues />
        <Awards />
        <Stats />
        <Team />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
