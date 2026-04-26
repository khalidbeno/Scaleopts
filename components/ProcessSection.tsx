"use client";

import { motion } from "framer-motion";

const phases = [
  {
    id: "01",
    label: "AUDIT YOUR SYSTEM",
    title: "Deep diagnostic",
    subtitle: "Every node. Every bottleneck. Every leak.",
    description:
      "We map your entire infrastructure -- tools, processes, integrations, and data flows. Nothing is invisible.",
    side: "left",
    type: "audit",
  },
  {
    id: "02",
    label: "ARCHITECTURE",
    title: "Blueprint designed.",
    subtitle: "From chaos to structured clarity.",
    description:
      "We define the target architecture. Clean topology, logical data flows, and the exact changes required.",
    side: "right",
    type: "architecture",
  },
  {
    id: "03",
    label: "MIGRATION",
    title: "Secure migration.",
    subtitle: "Move safely. Scale faster.",
    description:
      "We migrate systems with control, backups and security-first thinking, reducing downtime and operational risk.",
    side: "left",
    type: "migration",
  },
  {
    id: "04",
    label: "AUTOMATION",
    title: "Resilient operation.",
    subtitle: "Structured. Automated. Monitored.",
    description:
      "We automate repetitive workflows, improve visibility, and make your system easier to manage over time.",
    side: "right",
    type: "automation",
  },
] as const;

type PhaseType = (typeof phases)[number]["type"];

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#f3f3f5] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-[760px] text-center"
        >
          <p className="mb-4 bg-gradient-to-r from-fuchsia-600 to-sky-500 bg-clip-text text-[14px] font-semibold uppercase tracking-[0.14em] text-transparent">
            The Process
          </p>

          <h2 className="text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[64px]">
            One system. Four phases.
          </h2>

          <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.6] text-neutral-400 md:text-[20px]">
            We don’t deliver reports. We deliver a transformed system
            <br className="hidden md:block" /> -- phase by phase
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-fuchsia-500 via-fuchsia-500 to-fuchsia-400 md:block" />

          <div className="space-y-24 md:space-y-28">
            {phases.map((phase, index) => {
              const isLeft = phase.side === "left";

              return (
                <div
                  key={phase.id}
                  className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
                >
                  <div
                    className={`${
                      isLeft ? "md:pr-16" : "md:order-2 md:pl-16"
                    } flex flex-col justify-center`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      <p className="mb-4 text-[14px] font-semibold uppercase tracking-[0.05em] text-fuchsia-500">
                        {phase.label}{" "}
                        <span className="text-fuchsia-400">/ {phase.id}</span>
                      </p>

                      <h3 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[54px]">
                        {phase.title}
                      </h3>

                      <p className="mt-5 text-[20px] font-semibold leading-[1.4] text-fuchsia-500 md:text-[26px]">
                        {phase.subtitle}
                      </p>

                      <p className="mt-7 max-w-[520px] text-[18px] leading-[1.6] text-neutral-400 md:text-[21px]">
                        {phase.description}
                      </p>
                    </motion.div>
                  </div>

                  <div
                    className={`${
                      isLeft ? "md:pl-16" : "md:order-1 md:pr-16"
                    } flex items-center justify-center`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 50 : -50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.08 + index * 0.05,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="w-full max-w-[540px]"
                    >
                      <PhaseCard type={phase.type} />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseCard({ type }: { type: PhaseType }) {
  return (
    <div className="group relative overflow-hidden rounded-[42px] border border-[#dfe6f4] bg-[#eef3fb] p-6 shadow-[0_10px_30px_rgba(80,120,200,0.04)] transition-all duration-500 hover:shadow-[0_18px_50px_rgba(80,120,200,0.08)] md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4c8dff]" />
        <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#4c8dff]">
          {getCardLabel(type)}
        </p>
      </div>

      <div className="relative aspect-[1.28/1] w-full">
        {type === "audit" && <AuditDiagram />}
        {type === "architecture" && <ArchitectureDiagram />}
        {type === "migration" && <MigrationDiagram />}
        {type === "automation" && <AutomationDiagram />}
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </div>
  );
}

function getCardLabel(type: PhaseType) {
  switch (type) {
    case "audit":
      return "Analysis";
    case "architecture":
      return "Blueprint";
    case "migration":
      return "Migration";
    case "automation":
      return "Automation";
    default:
      return "System";
  }
}

function AuditDiagram() {
  return (
    <svg viewBox="0 0 520 400" className="h-full w-full" fill="none">
      <defs>
        <radialGradient id="auditGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6aa2ff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#6aa2ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="245" cy="195" r="120" stroke="#d8e5fb" strokeWidth="1.5" strokeDasharray="4 7" />
      <circle cx="245" cy="195" r="78" stroke="#d8e5fb" strokeWidth="1.5" strokeDasharray="4 7" />
      <circle cx="245" cy="195" r="44" fill="url(#auditGlow)" />

      <line x1="245" y1="195" x2="245" y2="94" stroke="#a4c4fb" strokeWidth="1.7" />
      <line x1="245" y1="195" x2="165" y2="140" stroke="#a4c4fb" strokeWidth="1.7" />
      <line x1="245" y1="195" x2="332" y2="138" stroke="#a4c4fb" strokeWidth="1.7" />
      <line x1="245" y1="195" x2="165" y2="255" stroke="#a4c4fb" strokeWidth="1.7" />
      <line x1="245" y1="195" x2="328" y2="258" stroke="#a4c4fb" strokeWidth="1.7" />

      <circle cx="245" cy="195" r="12" fill="#4c8dff" />
      <Node x={245} y={94} label="API" />
      <Node x={165} y={140} label="CRM" />
      <Node x={332} y={138} label="DB" />
      <Node x={165} y={255} label="Queue" />
      <Node x={328} y={258} label="Leak" danger />

      {/* magnifier */}
      <circle cx="382" cy="242" r="40" fill="#f7fbff" stroke="#8eb6ff" strokeWidth="2" />
      <circle cx="382" cy="242" r="20" stroke="#fuchsia-500" />
      <line x1="410" y1="270" x2="445" y2="305" stroke="#8eb6ff" strokeWidth="8" strokeLinecap="round" />
      <circle cx="382" cy="242" r="5" fill="#fuchsia-500" />

      {/* floating issue dots */}
      <circle cx="118" cy="92" r="4" fill="#c48bff" />
      <circle cx="430" cy="112" r="3.5" fill="#a8c7ff" />
      <circle cx="450" cy="210" r="4" fill="#d6e5ff" />
    </svg>
  );
}

function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 520 400" className="h-full w-full" fill="none">
      {/* blueprint sheet */}
      <rect x="92" y="62" width="280" height="220" rx="22" fill="#f7fbff" stroke="#d7e3fb" />
      <rect x="112" y="82" width="240" height="180" rx="16" fill="none" stroke="#dce8fc" strokeDasharray="5 7" />

      {/* grid */}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={130 + i * 32}
          y1="82"
          x2={130 + i * 32}
          y2="262"
          stroke="#e4edfc"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="112"
          y1={102 + i * 34}
          x2="352"
          y2={102 + i * 34}
          stroke="#e4edfc"
          strokeWidth="1"
        />
      ))}

      {/* topology */}
      <rect x="155" y="125" width="72" height="44" rx="12" fill="#eef4ff" stroke="#8eb6ff" />
      <rect x="275" y="125" width="72" height="44" rx="12" fill="#eef4ff" stroke="#8eb6ff" />
      <rect x="215" y="210" width="72" height="44" rx="12" fill="#eef4ff" stroke="#8eb6ff" />

      <line x1="227" y1="147" x2="275" y2="147" stroke="#9fc0fb" strokeWidth="2" />
      <line x1="191" y1="169" x2="237" y2="210" stroke="#9fc0fb" strokeWidth="2" />
      <line x1="311" y1="169" x2="265" y2="210" stroke="#9fc0fb" strokeWidth="2" />

      <circle cx="251" cy="147" r="6" fill="#4c8dff" />
      <circle cx="237" cy="210" r="6" fill="#4c8dff" />
      <circle cx="265" cy="210" r="6" fill="#4c8dff" />

      {/* side layers */}
      <rect x="387" y="95" width="42" height="170" rx="12" fill="#eaf1ff" stroke="#dce8fc" />
      <rect x="403" y="82" width="42" height="186" rx="12" fill="#f2f7ff" stroke="#dce8fc" />
      <rect x="419" y="70" width="42" height="198" rx="12" fill="#f7fbff" stroke="#dce8fc" />

      {/* clip */}
      <rect x="392" y="54" width="20" height="34" rx="10" fill="#dbe7ff" />
      <rect x="395" y="58" width="14" height="26" rx="7" fill="#8eb6ff" />

      <circle cx="90" cy="84" r="14" fill="#dfe9ff" />
      <circle cx="83" cy="76" r="12" fill="#cddfff" />
      <circle cx="415" cy="164" r="12" fill="#eef4ff" stroke="#8eb6ff" />
      <path d="M410 164h10" stroke="#4c8dff" strokeWidth="2" strokeLinecap="round" />
      <path d="M415 159v10" stroke="#4c8dff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MigrationDiagram() {
  return (
    <svg viewBox="0 0 520 400" className="h-full w-full" fill="none">
      {/* source servers */}
      <ServerStack x={120} y={210} small />
      <ServerStack x={208} y={180} />
      <ServerStack x={300} y={205} />

      {/* cloud */}
      <path
        d="M316 92c8-29 34-46 62-46 37 0 66 26 71 61 30 3 53 28 53 58 0 33-27 60-60 60H288c-31 0-56-24-56-54 0-28 21-51 48-54 6-19 21-33 36-39Z"
        fill="#f7fbff"
        stroke="#8eb6ff"
        strokeWidth="2"
      />

      {/* arrows up */}
      <line x1="244" y1="160" x2="322" y2="118" stroke="#9fc0fb" strokeWidth="2.5" strokeDasharray="6 8" />
      <line x1="338" y1="168" x2="356" y2="126" stroke="#9fc0fb" strokeWidth="2.5" strokeDasharray="6 8" />
      <path d="M350 126h12v12" stroke="#4c8dff" strokeWidth="2.5" />
      <path d="M316 113h14v14" stroke="#4c8dff" strokeWidth="2.5" />

      {/* shield */}
      <path
        d="M96 196l30-12 30 12v34c0 23-17 44-30 52-13-8-30-29-30-52v-34Z"
        fill="#f7fbff"
        stroke="#8eb6ff"
        strokeWidth="2"
      />
      <path d="M113 225l10 10 18-22" stroke="#4c8dff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* destination line */}
      <line x1="80" y1="300" x2="445" y2="300" stroke="#d8e5fb" strokeWidth="2" strokeDasharray="5 8" />
      <circle cx="445" cy="300" r="8" fill="#4c8dff" />
    </svg>
  );
}

function AutomationDiagram() {
  return (
    <svg viewBox="0 0 520 400" className="h-full w-full" fill="none">
      {/* flow line */}
      <path
        d="M88 214C120 214 137 182 170 182H250C282 182 296 226 332 226H428"
        stroke="#9fc0fb"
        strokeWidth="2.5"
        strokeDasharray="6 8"
      />

      {/* nodes */}
      <circle cx="112" cy="214" r="16" fill="#f7fbff" stroke="#8eb6ff" strokeWidth="2" />
      <circle cx="250" cy="182" r="16" fill="#f7fbff" stroke="#8eb6ff" strokeWidth="2" />
      <circle cx="332" cy="226" r="16" fill="#f7fbff" stroke="#8eb6ff" strokeWidth="2" />
      <circle cx="428" cy="226" r="16" fill="#f7fbff" stroke="#8eb6ff" strokeWidth="2" />

      {/* gear-ish automation block */}
      <circle cx="176" cy="214" r="34" fill="#f7fbff" stroke="#8eb6ff" strokeWidth="2" />
      <circle cx="176" cy="214" r="12" fill="#4c8dff" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 176 + Math.cos(angle) * 18;
        const y1 = 214 + Math.sin(angle) * 18;
        const x2 = 176 + Math.cos(angle) * 28;
        const y2 = 214 + Math.sin(angle) * 28;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#4c8dff"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
        );
      })}

      {/* dashboard */}
      <rect x="292" y="116" width="128" height="78" rx="16" fill="#f7fbff" stroke="#d7e3fb" />
      <line x1="312" y1="144" x2="354" y2="144" stroke="#9fc0fb" strokeWidth="4" strokeLinecap="round" />
      <line x1="312" y1="162" x2="388" y2="162" stroke="#dce8fc" strokeWidth="4" strokeLinecap="round" />
      <line x1="312" y1="178" x2="372" y2="178" stroke="#dce8fc" strokeWidth="4" strokeLinecap="round" />

      {/* check state */}
      <circle cx="404" cy="284" r="36" fill="#f7fbff" stroke="#8eb6ff" strokeWidth="2" />
      <path
        d="M389 284l10 10 18-22"
        stroke="#22c55e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* monitor dots */}
      <circle cx="88" cy="128" r="6" fill="#d9e6ff" />
      <circle cx="148" cy="100" r="5" fill="#c9dcff" />
      <circle cx="456" cy="150" r="7" fill="#d9e6ff" />
    </svg>
  );
}

function ServerStack({
  x,
  y,
  small = false,
}: {
  x: number;
  y: number;
  small?: boolean;
}) {
  const w = small ? 64 : 86;
  const h = small ? 18 : 22;
  const gap = small ? 12 : 14;

  return (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={x}
            y={y + i * gap}
            width={w}
            height={h}
            rx="8"
            fill="#f7fbff"
            stroke="#8eb6ff"
            strokeWidth="1.8"
          />
          <circle cx={x + 14} cy={y + i * gap + h / 2} r="3" fill="#4c8dff" />
          <line
            x1={x + 26}
            y1={y + i * gap + h / 2}
            x2={x + w - 14}
            y2={y + i * gap + h / 2}
            stroke="#d8e5fb"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
    </g>
  );
}

function Node({
  x,
  y,
  label,
  danger = false,
}: {
  x: number;
  y: number;
  label: string;
  danger?: boolean;
}) {
  return (
    <>
      <circle
        cx={x}
        cy={y}
        r="20"
        fill="#f7fbff"
        stroke={danger ? "#d946ef" : "#8eb6ff"}
        strokeWidth="1.8"
      />
      <circle cx={x} cy={y} r="6.5" fill={danger ? "#d946ef" : "#4c8dff"} />
      <text
        x={x}
        y={y + 34}
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill={danger ? "#c026d3" : "#4e7fda"}
      >
        {label}
      </text>
    </>
  );
}