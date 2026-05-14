/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Contact page for Nexus Santé Next.js
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | Nexus Santé",
  description: "Get in touch with our medical experts for any questions or consultations.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <PageHeader title="Contact Us" breadcrumb="Contact Us" />
        
        <div className="container py-20 lg:max-w-6xl">
          <div className="flex flex-col items-start lg:flex-row lg:gap-20">
            {/* Contact Info */}
            <div className="w-full lg:max-w-md">
              <div className="mb-10">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-flipheart size-5 shrink-0 text-primary">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                  </svg>
                  Contact Us
                </span>
                <h2 className="font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]">
                  Have questions? <br />
                  <span className="font-normal italic text-secondary">Get in touch!</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="group flex items-start gap-5 rounded-2xl border border-secondary/5 p-6 transition-all hover:bg-secondary/5">
                  <div className="grid size-12 shrink-0 place-content-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray">Requesting A Call:</p>
                    <a href="tel:+1111111111" className="text-lg font-bold text-primary transition hover:text-secondary">+111-111-1111</a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 rounded-2xl border border-secondary/5 p-6 transition-all hover:bg-secondary/5">
                  <div className="grid size-12 shrink-0 place-content-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray">Write Us:</p>
                    <a href="mailto:info@healthora.com" className="text-lg font-bold text-primary transition hover:text-secondary">info@healthora.com</a>
                  </div>
                </div>

                <div className="group flex items-start gap-5 rounded-2xl border border-secondary/5 p-6 transition-all hover:bg-secondary/5">
                  <div className="grid size-12 shrink-0 place-content-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray">Reach Us:</p>
                    <p className="text-lg font-bold text-primary">4648 Lorem ipsum Consectetur AA, 1920</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative mt-12 w-full grow overflow-hidden rounded-[32px] bg-white p-8 shadow-2xl lg:mt-0 lg:p-12">
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-secondary/5"></div>
              <div className="relative z-10">
                <form className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-primary outline-none focus:border-secondary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-primary outline-none focus:border-secondary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-primary outline-none focus:border-secondary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Subject</label>
                    <input type="text" placeholder="Medical Consultation" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-primary outline-none focus:border-secondary transition-all" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-bold text-primary">Your Message</label>
                    <textarea rows={4} placeholder="Tell us about your needs..." className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-primary outline-none focus:border-secondary transition-all resize-none"></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-5 font-bold text-white transition hover:bg-secondary active:scale-95">
                      SEND MESSAGE
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative h-[450px] w-full overflow-hidden bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.48894682646!2d-75.42984328211273!3d40.002343254992326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1733487946315!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale contrast-125"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
