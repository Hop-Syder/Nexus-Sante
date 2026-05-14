/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Custom 404 Not Found page for Nexus Santé
 * @created 2026-05-14
 * @updated 2026-05-14
 * 🌐 nexus-partners.xyz
 * 📧 daoudaabassichristian@gmail.com
 * ──────────────────────────────────
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 text-center">
      {/* Background Heart Decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg
          width="450"
          height="450"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
        </svg>
      </div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[120px] font-bold leading-none text-secondary/20 sm:text-[200px]"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-[-20px] sm:mt-[-40px]"
        >
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-4xl">
            Page not found!
          </h2>
          <p className="mx-auto mb-10 max-w-md text-gray-500">
            Oops! The page you are looking for does not exist or has been moved. 
            Let&apos;s get you back to safety.
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-bold text-white shadow-lg shadow-secondary/30 transition-all hover:scale-105 hover:bg-primary active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
