"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Check, Eye, Zap, TrendingUp, Shield } from "lucide-react";

export default function PainToSystemSection() {
  const flowProgress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(flowProgress, 1, {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [flowProgress]);

  const flowLeft = useTransform(flowProgress, [0, 1], ["0%", "100%"]);

  const node1Scale = useTransform(flowProgress, [0.00, 0.04, 0.08], [1, 1.18, 1]);
  const node2Scale = useTransform(flowProgress, [0.22, 0.26, 0.30], [1, 1.18, 1]);
  const node3Scale = useTransform(flowProgress, [0.47, 0.51, 0.55], [1, 1.18, 1]);
  const node4Scale = useTransform(flowProgress, [0.72, 0.76, 0.80], [1, 1.18, 1]);
  const node5Scale = useTransform(flowProgress, [0.92, 0.96, 1.00], [1, 1.18, 1]);

  const node1Opacity = useTransform(flowProgress, [0.00, 0.04, 0.08], [0.8, 1, 0.8]);
  const node2Opacity = useTransform(flowProgress, [0.22, 0.26, 0.30], [0.8, 1, 0.8]);
  const node3Opacity = useTransform(flowProgress, [0.47, 0.51, 0.55], [0.8, 1, 0.8]);
  const node4Opacity = useTransform(flowProgress, [0.72, 0.76, 0.80], [0.8, 1, 0.8]);
  const node5Opacity = useTransform(flowProgress, [0.92, 0.96, 1.00], [0.8, 1, 0.8]);

  return (
    <section className="bg-[#f3f3f5] px-6 py-20">
      <div className="mx-auto max-w-[1280px]">
        {/* TÍTULO */}
        <div className="text-center">
          <h2 className="text-[34px] font-semibold tracking-[-0.04em] md:text-[62px]">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              Your business is losing time and money
            </span>
          </h2>
        </div>

        {/* BLOQUE SUPERIOR */}
        <div className="mt-10 rounded-[32px] border border-neutral-200/80 bg-white/80 p-10 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-red-200/80 bg-red-50 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-red-500">
              Current system
            </div>

            <div className="rounded-full border border-neutral-200 bg-white px-5 py-2 text-[13px] font-medium text-neutral-500">
              Manual processes · Errors · Lost revenue
            </div>
          </div>

          {/* GRÁFICA */}
          <div className="relative mt-6 h-[220px] w-full">
            <Image
              src="/Grafica.png"
              alt="Problems diagram"
              fill
              className="object-contain"
              priority
            />
            {/* LACK OF VISIBILITY */}
            <div className="absolute left-[4%] top-[70%]">

              <div className="ml-6 rounded-[16px] border border-neutral-200/80 bg-white px-4 py-3 
                            shadow-[0_14px_35px_rgba(0,0,0,0.12),0_3px_10px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <p className="whitespace-nowrap text-[15px] font-semibold text-neutral-900">
                  Lack of visibility
                </p>
                <p className="whitespace-nowrap text-[13px] text-neutral-500">
                  Decisions without reliable data
                </p>
              </div>

            </div>

            {/* WASTED TIME */}
            <div className="absolute left-[33.5%] top-[15%]">

              <div className="ml-6 rounded-[16px] border border-neutral-200/80 bg-white px-4 py-3 
                            shadow-[0_14px_35px_rgba(0,0,0,0.12),0_3px_10px_rgba(0,0,0,0.05)] backdrop-blur-sm">

                <p className="whitespace-nowrap text-[15px] font-semibold text-neutral-900">
                  Wasted time
                </p>
                <p className="whitespace-nowrap text-[13px] text-neutral-500">
                  Hours lost every week
                </p>
              </div>

            </div>

            {/* LOST REVENUE */}
            <div className="absolute left-[47.8%] top-[80%]">

              <div className="ml-6 rounded-[16px] border border-neutral-200/80 bg-white px-4 py-3 
                            shadow-[0_14px_35px_rgba(0,0,0,0.12),0_3px_10px_rgba(0,0,0,0.05)] backdrop-blur-sm">

                <p className="whitespace-nowrap text-[15px] font-semibold text-neutral-900">
                  Lost revenue
                </p>

                <p className="whitespace-nowrap text-[13px] text-neutral-500">
                  Missed opportunities
                </p>

              </div>

            </div>

            {/* NO SCALABILITY */}
            <div className="absolute right-[0%] top-[10%]">

              <div className="ml-6 rounded-[16px] border border-neutral-200/80 bg-white px-4 py-3 
                            shadow-[0_14px_35px_rgba(0,0,0,0.12),0_3px_10px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <p className="whitespace-nowrap text-[15px] font-semibold text-neutral-900">
                  No scalability
                </p>
                <p className="whitespace-nowrap text-[13px] text-neutral-500">
                  Systems break when growing
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* FLECHA */}
        <div className="flex justify-center py-8">
          <p className="text-4xl text-neutral-400">↓</p>
        </div>

        {/* BLOQUE INFERIOR */}
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-fuchsia-200/80 bg-white px-5 py-2.5 shadow-[0_4px_14px_rgba(217,70,239,0.08)]">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fuchsia-500">
                Optimized system
              </span>
            </div>

            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              <span className="text-[12px] font-medium tracking-[0.02em] text-neutral-500">
                Integrated flow · Scalable
              </span>
            </div>
          </div>

          {/* LÍNEA LIMPIA */}
          <div className="relative mt-6 h-[90px] w-full overflow-hidden">
            {/* línea base */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-neutral-200" />

            {/* flujo suave */}
            <motion.div
              style={{ left: flowLeft }}
              className="absolute top-1/2 h-[10px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(124,58,237,0.0)_0%,rgba(168,85,247,0.35)_40%,rgba(56,189,248,0.75)_70%,rgba(56,189,248,0.0)_100%)] blur-[6px]"
            />

            {/* nodos */}
            <motion.div
              style={{ scale: node1Scale, opacity: node1Opacity }}
              className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.18)]"
            />

            <motion.div
              style={{ scale: node2Scale, opacity: node2Opacity }}
              className="absolute left-1/4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.18)]"
            />

            <motion.div
              style={{ scale: node3Scale, opacity: node3Opacity }}
              className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.18)]"
            />

            <motion.div
              style={{ scale: node4Scale, opacity: node4Opacity }}
              className="absolute left-3/4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.18)]"
            />

            <motion.div
              style={{ scale: node5Scale, opacity: node5Opacity }}
              className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.18)]"
            />
          </div>


          {/* CARDS */}
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {/* VISIBILITY */}
            <div className="group rounded-[22px] border border-neutral-200 bg-white p-5 
  shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-50">
                <Eye className="h-5 w-5 text-fuchsia-500" />
              </div>

              <p className="text-[12px] font-semibold tracking-[0.08em] text-fuchsia-500">
                VISIBILITY
              </p>

              <h3 className="mt-2 text-[20px] font-semibold leading-tight text-neutral-900">
                Real-time system visibility
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-neutral-500">
                Track your operations with clear data.
              </p>

            </div>

            {/* AUTOMATION */}
            <div className="group rounded-[22px] border border-neutral-200 bg-white p-5 
  shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                <Zap className="h-5 w-5 text-purple-500" />
              </div>

              <p className="text-[12px] font-semibold tracking-[0.08em] text-purple-500">
                AUTOMATION
              </p>

              <h3 className="mt-2 text-[20px] font-semibold leading-tight text-neutral-900">
                Faster workflows
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-neutral-500">
                Eliminate manual tasks and save time.
              </p>

            </div>

            {/* REVENUE */}
            <div className="group rounded-[22px] border border-neutral-200 bg-white p-5 
  shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-50">
                <TrendingUp className="h-5 w-5 text-fuchsia-500" />
              </div>

              <p className="text-[12px] font-semibold tracking-[0.08em] text-fuchsia-500">
                REVENUE
              </p>

              <h3 className="mt-2 text-[20px] font-semibold leading-tight text-neutral-900">
                Optimized systems
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-neutral-500">
                Reduce friction and improve performance.
              </p>

            </div>

            {/* SCALABILITY */}
            <div className="group rounded-[22px] border border-neutral-200 bg-white p-5 
  shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                <Shield className="h-5 w-5 text-sky-500" />
              </div>

              <p className="text-[12px] font-semibold tracking-[0.08em] text-sky-500">
                SCALABILITY
              </p>

              <h3 className="mt-2 text-[20px] font-semibold leading-tight text-neutral-900">
                Scalable infrastructure
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-neutral-500">
                Systems designed to grow with your business.
              </p>

            </div>

          </div>

          {/* BARRA FINAL */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-6 py-3 text-[14px] font-medium text-neutral-500 shadow-sm">

              <Check className="h-4 w-4 text-green-500" strokeWidth={2.5} />

              <span>
                Implemented in 2–4 weeks · No downtime · Measurable impact from month one
              </span>

            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="mx-auto block max-w-[480px] md:hidden">
        <MobilePainToSystem />
      </div>
    </section>
  );
}

function MobilePainToSystem() {
  return (
    <div className="mt-8 space-y-8">
      <div className="rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <div className="rounded-full border border-red-200/80 bg-red-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-red-500">
            Current system
          </div>

          <div className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[10px] font-medium text-neutral-500">
            Manual processes Â· Errors Â· Lost revenue
          </div>
        </div>

        <div className="relative mt-5 h-[260px] w-full overflow-hidden">
          <div className="absolute inset-x-0 top-[58px] h-[118px]">
            <Image
              src="/Grafica.png"
              alt="Problems diagram"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute left-0 top-0 w-[112px] rounded-[14px] border border-neutral-200/80 bg-white px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <p className="text-[11px] font-semibold leading-tight text-neutral-900">
              Lack of visibility
            </p>
            <p className="mt-1 text-[9px] leading-3 text-neutral-500">
              Decisions without reliable data
            </p>
          </div>

          <div className="absolute right-0 top-8 w-[112px] rounded-[14px] border border-neutral-200/80 bg-white px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <p className="text-[11px] font-semibold leading-tight text-neutral-900">
              Wasted time
            </p>
            <p className="mt-1 text-[9px] leading-3 text-neutral-500">
              Hours lost every week
            </p>
          </div>

          <div className="absolute left-0 bottom-8 w-[112px] rounded-[14px] border border-neutral-200/80 bg-white px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <p className="text-[11px] font-semibold leading-tight text-neutral-900">
              Lost revenue
            </p>
            <p className="mt-1 text-[9px] leading-3 text-neutral-500">
              Missed opportunities
            </p>
          </div>

          <div className="absolute right-0 bottom-0 w-[112px] rounded-[14px] border border-neutral-200/80 bg-white px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <p className="text-[11px] font-semibold leading-tight text-neutral-900">
              No scalability
            </p>
            <p className="mt-1 text-[9px] leading-3 text-neutral-500">
              Systems break when growing
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-3xl text-neutral-400">↓</div>

      <div className="rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm">
        <p className="text-[11px] font-semibold tracking-[0.12em] text-fuchsia-500">
          OPTIMIZED SYSTEM
        </p>

        <h3 className="mt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] text-neutral-900">
          A cleaner system built to scale
        </h3>

        <div className="mt-6 space-y-3">
          {[
            ["Visibility", "Track your operations with clear data."],
            ["Automation", "Eliminate manual tasks and save time."],
            ["Revenue", "Reduce friction and improve performance."],
            ["Scalability", "Systems designed to grow with your business."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <p className="text-[15px] font-semibold text-neutral-900">{title}</p>
              <p className="mt-1 text-[13px] leading-5 text-neutral-500">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-center text-[13px] font-medium text-neutral-500 shadow-sm">
        Implemented in 2–4 weeks · No downtime
      </div>
    </div>
  );
}
