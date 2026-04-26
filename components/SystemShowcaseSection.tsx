"use client";

import { useEffect, useRef } from "react";

export default function SystemShowcaseSection() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const flows = svgRef.current?.querySelectorAll<SVGPathElement>(".flow-anim");
    if (!flows) return;
    let frame: number;
    let offset = 0;
    const tick = () => {
      offset = (offset + 0.32) % 28;
      flows.forEach((el) => {
        el.style.strokeDashoffset = String(-offset);
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-[#f3f3f5] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px]">

        {/* ── HEADER ── */}
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400">
            <span className="h-px w-5 bg-neutral-300" />
            System design
            <span className="h-px w-5 bg-neutral-300" />
          </p>
          <h2 className="text-[42px] font-semibold leading-none tracking-[-0.05em] md:text-[68px]">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              We fix broken systems.
            </span>
          </h2>
          <p className="mt-4 text-[15px] font-light text-neutral-500 md:text-[17px]">
            Turn chaos into a scalable, intelligent infrastructure
          </p>
        </div>

        {/* ── SVG VISUAL ── */}
        <div className="relative mt-12 w-full">
          <svg
            ref={svgRef}
            width="100%"
            viewBox="0 0 680 420"
            role="img"
            aria-label="Diagram showing chaotic input nodes transforming into clean organized output through a central processing core"
          >
            <defs>
              <marker id="st-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <linearGradient id="st-core-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#7F77DD" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="st-mid-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7F77DD" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="st-bot-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#534AB7" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#3C3489" stopOpacity="0.24" />
              </linearGradient>
              <linearGradient id="st-fade-l" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#D4537E" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D4537E" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="st-fade-r" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#378ADD" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#378ADD" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* ambient glows */}
            <ellipse cx="142" cy="210" rx="110" ry="120" fill="#D4537E" opacity="0.04" />
            <ellipse cx="538" cy="210" rx="110" ry="120" fill="#378ADD" opacity="0.04" />
            <ellipse cx="340" cy="215" rx="85"  ry="95"  fill="#7F77DD" opacity="0.06" />

            {/* ── CHAOS LEFT: connections ── */}
            <line x1="52"  y1="128" x2="120" y2="170" stroke="#ED93B1" strokeWidth="0.7" opacity="0.5" />
            <line x1="52"  y1="128" x2="144" y2="238" stroke="#ED93B1" strokeWidth="0.5" opacity="0.3" />
            <line x1="52"  y1="128" x2="80"  y2="278" stroke="#D4537E" strokeWidth="0.5" opacity="0.22" />
            <line x1="96"  y1="78"  x2="120" y2="170" stroke="#ED93B1" strokeWidth="0.6" opacity="0.38" />
            <line x1="96"  y1="78"  x2="144" y2="238" stroke="#D4537E" strokeWidth="0.4" opacity="0.18" />
            <line x1="68"  y1="195" x2="120" y2="170" stroke="#ED93B1" strokeWidth="0.8" opacity="0.45" />
            <line x1="68"  y1="195" x2="144" y2="238" stroke="#D4537E" strokeWidth="0.6" opacity="0.32" />
            <line x1="68"  y1="195" x2="80"  y2="278" stroke="#ED93B1" strokeWidth="0.5" opacity="0.28" />
            <line x1="80"  y1="278" x2="120" y2="170" stroke="#D4537E" strokeWidth="0.4" opacity="0.18" />
            <line x1="50"  y1="320" x2="68"  y2="195" stroke="#ED93B1" strokeWidth="0.5" opacity="0.22" />
            <line x1="50"  y1="320" x2="80"  y2="278" stroke="#D4537E" strokeWidth="0.7" opacity="0.38" />
            <line x1="50"  y1="320" x2="144" y2="238" stroke="#ED93B1" strokeWidth="0.4" opacity="0.18" />
            <line x1="128" y1="342" x2="80"  y2="278" stroke="#D4537E" strokeWidth="0.6" opacity="0.32" />
            <line x1="128" y1="342" x2="144" y2="238" stroke="#ED93B1" strokeWidth="0.5" opacity="0.22" />
            <line x1="52"  y1="128" x2="68"  y2="195" stroke="#D4537E" strokeWidth="0.4" opacity="0.18" />
            <line x1="96"  y1="78"  x2="50"  y2="320" stroke="#ED93B1" strokeWidth="0.3" opacity="0.12" />

            {/* chaos nodes */}
            <circle cx="52"  cy="128" r="5.5" fill="#FBEAF0" stroke="#D4537E" strokeWidth="1.2" opacity="0.9" />
            <circle cx="96"  cy="78"  r="4"   fill="#FBEAF0" stroke="#D4537E" strokeWidth="1"   opacity="0.72" />
            <circle cx="68"  cy="195" r="6.5" fill="#FBEAF0" stroke="#D4537E" strokeWidth="1.3" opacity="0.95" />
            <circle cx="120" cy="170" r="4"   fill="#F4C0D1" stroke="#D4537E" strokeWidth="1"   opacity="0.68" />
            <circle cx="144" cy="238" r="5"   fill="#F4C0D1" stroke="#993556" strokeWidth="1"   opacity="0.78" />
            <circle cx="80"  cy="278" r="7"   fill="#FBEAF0" stroke="#D4537E" strokeWidth="1.3" opacity="0.9" />
            <circle cx="50"  cy="320" r="4.5" fill="#FBEAF0" stroke="#D4537E" strokeWidth="1"   opacity="0.68" />
            <circle cx="128" cy="342" r="5.5" fill="#F4C0D1" stroke="#993556" strokeWidth="1.2" opacity="0.82" />
            {/* distortion dots */}
            <circle cx="36"  cy="245" r="2.5" fill="#D4537E" opacity="0.22" />
            <circle cx="155" cy="112" r="2"   fill="#D4537E" opacity="0.18" />
            <circle cx="92"  cy="365" r="2"   fill="#993556" opacity="0.16" />
            <circle cx="38"  cy="170" r="1.5" fill="#D4537E" opacity="0.14" />

            {/* flow left → core */}
            <path className="flow-anim" d="M156 210 C194 210 218 210 248 218" fill="none" stroke="url(#st-fade-l)" strokeWidth="1.3" strokeDasharray="7 5" opacity="0.65" markerEnd="url(#st-arrow)" />
            <path className="flow-anim" d="M156 176 C194 186 218 200 248 210" fill="none" stroke="#D4537E" strokeWidth="0.7" strokeDasharray="5 6" opacity="0.28" />
            <path className="flow-anim" d="M156 244 C194 234 218 226 248 222" fill="none" stroke="#D4537E" strokeWidth="0.7" strokeDasharray="5 6" opacity="0.28" />

            {/* ── CORE: infrastructure (bottom) ── */}
            <rect x="270" y="292" width="140" height="38" rx="10" fill="url(#st-bot-grad)" stroke="#534AB7" strokeWidth="0.7" opacity="0.9" />
            <rect x="270" y="292" width="140" height="38" rx="10" fill="none" stroke="#3C3489" strokeWidth="0.4" opacity="0.4" />

            {/* ── CORE: automation (middle) ── */}
            <rect x="262" y="192" width="156" height="90" rx="14" fill="url(#st-mid-grad)" stroke="#7F77DD" strokeWidth="0.8" />
            <rect x="262" y="192" width="156" height="90" rx="14" fill="none" stroke="#AFA9EC" strokeWidth="0.4" opacity="0.45" />
            <line x1="286" y1="210" x2="394" y2="210" stroke="#AFA9EC" strokeWidth="0.4" opacity="0.32" />
            <line x1="286" y1="226" x2="394" y2="226" stroke="#AFA9EC" strokeWidth="0.3" opacity="0.22" />
            <line x1="286" y1="243" x2="394" y2="243" stroke="#AFA9EC" strokeWidth="0.3" opacity="0.18" />
            <line x1="286" y1="260" x2="394" y2="260" stroke="#AFA9EC" strokeWidth="0.4" opacity="0.28" />
            <line x1="310" y1="198" x2="310" y2="276" stroke="#AFA9EC" strokeWidth="0.3" opacity="0.18" />
            <line x1="340" y1="198" x2="340" y2="276" stroke="#7F77DD" strokeWidth="0.4" opacity="0.28" />
            <line x1="370" y1="198" x2="370" y2="276" stroke="#AFA9EC" strokeWidth="0.3" opacity="0.18" />

            {/* ── CORE: security (top / glass) ── */}
            <rect x="276" y="126" width="128" height="56" rx="12" fill="url(#st-core-grad)" stroke="#c4b5fd" strokeWidth="0.7" />
            <rect x="276" y="126" width="128" height="56" rx="12" fill="none" stroke="#fff" strokeWidth="0.45" opacity="0.4" />
            <circle cx="316" cy="154" r="3.5" fill="#c4b5fd" opacity="0.5" />
            <circle cx="340" cy="154" r="3.5" fill="#c4b5fd" opacity="0.5" />
            <circle cx="364" cy="154" r="3.5" fill="#c4b5fd" opacity="0.5" />
            <path d="M338 140 Q340 137 342 140 L344 147 Q340 151 336 147 Z" fill="#7F77DD" opacity="0.5" fillRule="evenodd" />

            {/* connector dashes between layers */}
            <line x1="340" y1="182" x2="340" y2="192" stroke="#AFA9EC" strokeWidth="0.6" opacity="0.45" strokeDasharray="2 2" />
            <line x1="340" y1="282" x2="340" y2="292" stroke="#534AB7" strokeWidth="0.6" opacity="0.45" strokeDasharray="2 2" />

            {/* flow core → right */}
            <path className="flow-anim" d="M420 218 C452 210 472 208 512 208" fill="none" stroke="url(#st-fade-r)" strokeWidth="1.3" strokeDasharray="7 5" opacity="0.65" markerEnd="url(#st-arrow)" />
            <path className="flow-anim" d="M420 204 C452 198 472 200 512 196" fill="none" stroke="#378ADD" strokeWidth="0.7" strokeDasharray="5 6" opacity="0.28" />
            <path className="flow-anim" d="M420 232 C450 226 472 220 512 220" fill="none" stroke="#378ADD" strokeWidth="0.7" strokeDasharray="5 6" opacity="0.28" />

            {/* ── ORDER RIGHT: connections ── */}
            <line x1="524" y1="96"  x2="554" y2="148" stroke="#85B7EB" strokeWidth="0.8" opacity="0.58" />
            <line x1="524" y1="96"  x2="584" y2="204" stroke="#85B7EB" strokeWidth="0.5" opacity="0.32" />
            <line x1="554" y1="148" x2="584" y2="204" stroke="#85B7EB" strokeWidth="0.8" opacity="0.52" />
            <line x1="554" y1="148" x2="570" y2="268" stroke="#378ADD" strokeWidth="0.5" opacity="0.28" />
            <line x1="584" y1="204" x2="570" y2="268" stroke="#85B7EB" strokeWidth="0.8" opacity="0.52" />
            <line x1="584" y1="204" x2="554" y2="324" stroke="#378ADD" strokeWidth="0.5" opacity="0.28" />
            <line x1="570" y1="268" x2="554" y2="324" stroke="#85B7EB" strokeWidth="0.8" opacity="0.58" />
            <line x1="570" y1="268" x2="524" y2="342" stroke="#85B7EB" strokeWidth="0.5" opacity="0.32" />
            <line x1="554" y1="324" x2="524" y2="342" stroke="#85B7EB" strokeWidth="0.7" opacity="0.48" />
            <line x1="524" y1="96"  x2="570" y2="268" stroke="#B5D4F4" strokeWidth="0.4" opacity="0.18" />
            <line x1="524" y1="342" x2="584" y2="204" stroke="#B5D4F4" strokeWidth="0.4" opacity="0.18" />

            {/* ordered nodes */}
            <circle cx="524" cy="96"  r="6" fill="#E6F1FB" stroke="#378ADD" strokeWidth="1.2" />
            <circle cx="554" cy="148" r="6" fill="#E6F1FB" stroke="#378ADD" strokeWidth="1.2" />
            <circle cx="584" cy="204" r="6" fill="#E6F1FB" stroke="#185FA5" strokeWidth="1.2" />
            <circle cx="570" cy="268" r="6" fill="#E6F1FB" stroke="#378ADD" strokeWidth="1.2" />
            <circle cx="554" cy="324" r="6" fill="#E6F1FB" stroke="#378ADD" strokeWidth="1.2" />
            <circle cx="524" cy="342" r="6" fill="#B5D4F4" stroke="#185FA5" strokeWidth="1.2" />
            {/* secondary ring nodes */}
            <circle cx="612" cy="148" r="3.5" fill="#B5D4F4" stroke="#185FA5" strokeWidth="0.8" opacity="0.68" />
            <circle cx="620" cy="224" r="3.5" fill="#B5D4F4" stroke="#185FA5" strokeWidth="0.8" opacity="0.68" />
            <circle cx="612" cy="298" r="3.5" fill="#B5D4F4" stroke="#185FA5" strokeWidth="0.8" opacity="0.68" />
            <line x1="554" y1="148" x2="612" y2="148" stroke="#85B7EB" strokeWidth="0.5" opacity="0.38" />
            <line x1="584" y1="224" x2="620" y2="224" stroke="#85B7EB" strokeWidth="0.5" opacity="0.38" />
            <line x1="570" y1="268" x2="612" y2="298" stroke="#85B7EB" strokeWidth="0.5" opacity="0.38" />
          </svg>
        </div>

        {/* ── BOTTOM PANEL ── */}
        <div className="mx-auto mt-4 max-w-[1060px] rounded-[24px] border border-neutral-200/80 bg-white px-8 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                n: "01",
                label: "System thinking",
                desc: "Holistic approach to your challenges",
              },
              {
                n: "02",
                label: "Built to scale",
                desc: "Infrastructure that grows with you",
              },
              {
                n: "03",
                label: "Security first",
                desc: "Protecting your data & assets",
              },
              {
                n: "04",
                label: "Automation + AI",
                desc: "Smarter workflows, less manual work",
              },
            ].map(({ n, label, desc }) => (
              <div key={n}>
                <div className="flex items-center gap-2.5">
                  <span className="text-[22px] font-semibold tracking-[-0.04em] text-fuchsia-500">
                    {n}
                  </span>
                  <span className="h-px w-5 bg-gradient-to-r from-fuchsia-500 to-sky-500" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-neutral-800">
                    {label}
                  </p>
                </div>
                <p className="mt-2 text-[13px] leading-[1.55] text-neutral-400 font-light">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* progress line */}
          <div className="relative mt-6 h-5">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-fuchsia-500 via-purple-400 to-sky-500 opacity-40" />
            <div className="absolute left-[23%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-fuchsia-300 bg-white shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
            <div className="absolute left-[80%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-sky-300 bg-white shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
          </div>
        </div>

      </div>
    </section>
  );
}