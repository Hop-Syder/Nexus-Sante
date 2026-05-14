/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Modal for appointment booking with form validation
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  "Dental",
  "Pediatric",
  "Gynecology",
  "Cardiology",
  "Neurology",
  "Other",
];

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [selectedService, setSelectedService] = useState("");
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission ici
    alert("Rendez-vous envoyé ! (Démo)");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-51 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl pointer-events-auto">
              {/* Header */}
              <div className="bg-primary p-6 text-center text-white">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-white/70 transition hover:text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                  </svg>
                </button>
                <h2 className="font-roboto text-2xl font-bold lg:text-3xl">
                  Make an <span className="font-normal italic">Appointment</span>
                </h2>
                <p className="mt-2 text-sm text-gray-light">
                  Fill in the details below and we will get back to you shortly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </span>
                    <input type="text" placeholder="Full Name" required className="form-input !pl-10 !border-b-gray-light/30" />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </span>
                    <input type="email" placeholder="Email Address" required className="form-input !pl-10 !border-b-gray-light/30" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Custom Select */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsServiceOpen(!isServiceOpen)}
                      className="form-input flex w-full items-center justify-between !pl-10 !border-b-gray-light/30 text-left"
                    >
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                      </span>
                      <span className={selectedService ? "text-primary" : "text-gray"}>
                        {selectedService || "Select Service"}
                      </span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isServiceOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                    <AnimatePresence>
                      {isServiceOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute inset-x-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded-xl bg-white p-2 shadow-xl border border-gray-light"
                        >
                          {services.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => { setSelectedService(s); setIsServiceOpen(false); }}
                              className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray hover:bg-secondary hover:text-white transition"
                            >
                              {s}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    </span>
                    <input type="text" placeholder="DD/MM/YYYY" className="form-input !pl-10 !border-b-gray-light/30" />
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-4 text-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </span>
                  <textarea rows={4} placeholder="Your Message" className="form-textarea !pl-10 !border-b-gray-light/30" />
                </div>

                <button type="submit" className="btn w-full !py-4 shadow-lg">
                  Confirm Appointment
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
