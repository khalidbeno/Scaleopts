"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={wrapperRef}>
      <div className="relative flex flex-col items-end">
        <div
          className={`absolute bottom-16 right-0 w-[290px] rounded-2xl border border-white/40 bg-white/85 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-md transition-all duration-200 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <div className="mb-3">
            <p className="text-sm font-semibold text-neutral-900">Contact</p>
            <p className="mt-1 text-xs text-neutral-500">
              Direct access to Scaleopts
            </p>
          </div>

          <div className="space-y-2 text-sm text-neutral-700">
            <a
              href="mailto:scaleopts@gmail.com"
              className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-neutral-100"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
                <Mail className="h-4 w-4" />
              </span>
              <span>scaleopts@outlook.com</span>
            </a>

            <a
              href="tel:+34674085607"
              className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-neutral-100"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
                <Phone className="h-4 w-4" />
              </span>
              <span>+34 674 08 56 07</span>
            </a>

            <a
              href="tel:+353083201587"
              className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-neutral-100"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
                <Phone className="h-4 w-4" />
              </span>
              <span>+353 083 201 587</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Open contact panel"
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-neutral-950 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:scale-[1.03] hover:bg-neutral-900"
        >
          <MessageCircle className="h-5 w-5 transition group-hover:scale-105" />
        </button>
      </div>
    </div>
  );
}