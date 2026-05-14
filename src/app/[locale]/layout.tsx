/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Root layout with i18n support for Nexus Santé
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/──────────────────────────────────

import { Plus_Jakarta_Sans, Roboto_Serif } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { AppointmentProvider } from "@/context/AppointmentContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexus Santé",
  description: "Des soins experts, des traitements avancés — votre santé est notre priorité absolue.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${plusJakartaSans.variable} ${robotoSerif.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <AppointmentProvider>
            {children}
          </AppointmentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
