"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
   <header className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-6">
        
        {/* Logo */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <Image
            src="/Logo.png"
            alt="Scaleopts logo"
            width={20}
            height={20}
          />
          <span className="text-[14px] font-semibold text-neutral-900">
            Scaleopts
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#hero" className="text-[13px] text-neutral-500 hover:text-black">
            Scalable
          </a>
          <a href="#services" className="text-[13px] text-neutral-500 hover:text-black">
            Services
          </a>
          <a href="#process" className="text-[13px] text-neutral-500 hover:text-black">
            Process
          </a>
          <a href="#contact" className="text-[13px] text-neutral-500 hover:text-black">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 px-4 py-2 text-[11px] font-semibold text-white transition hover:opacity-90"
        >
          Free Audit
        </a>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white md:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-neutral-900 transition-all duration-300 ${
                open ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-neutral-900 transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-neutral-900 transition-all duration-300 ${
                open ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-black/5 bg-white/95 px-4 py-4 backdrop-blur md:hidden"
          >
            <nav className="flex flex-col gap-2">
              <a
                href="#hero"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-[14px] text-neutral-700 hover:bg-black/[0.03]"
              >
                Scalable
              </a>
              <a
                href="#services"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-[14px] text-neutral-700 hover:bg-black/[0.03]"
              >
                Services
              </a>
              <a
                href="#process"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-[14px] text-neutral-700 hover:bg-black/[0.03]"
              >
                Process
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-[14px] text-neutral-700 hover:bg-black/[0.03]"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 px-5 py-3 text-[12px] font-semibold text-white"
              >
                Free Audit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}