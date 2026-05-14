/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Context for managing appointment modal state
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import AppointmentModal from "@/components/ui/AppointmentModal";

interface AppointmentContextType {
  openModal: () => void;
  closeModal: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <AppointmentContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AppointmentModal isOpen={isOpen} onClose={closeModal} />
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointment must be used within an AppointmentProvider");
  }
  return context;
};
