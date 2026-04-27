"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroServicesStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 20%", "end 80%"],
  });

  const securityY = useTransform(scrollYProgress, [0.34, 0.72], [0, 550]);
  const securityX = useTransform(scrollYProgress, [0.34, 0.72], [0, -360]);

  const automationY = useTransform(scrollYProgress, [0.34, 0.72], [0, 650]);
  const automationX = useTransform(scrollYProgress, [0.34, 0.72], [0, 320]);

  const developmentY = useTransform(scrollYProgress, [0.34, 0.72], [0, 740]);
  const developmentX = useTransform(scrollYProgress, [0.34, 0.72], [0, -360]);

  const titleOpacity = useTransform(scrollYProgress, [0.40, 0.50], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.40, 0.50], [40, 0]);

  const securityTextOpacity = useTransform(scrollYProgress, [0.40, 0.48], [0, 1]);
  const automationTextOpacity = useTransform(scrollYProgress, [0.42, 0.50], [0, 1]);
  const developmentTextOpacity = useTransform(scrollYProgress, [0.44, 0.52], [0, 1]);

  return (
    <section ref={sectionRef} className="relative px-4 md:px-6">
      {/* DESKTOP */}
      <div className="hidden lg:block h-[200vh]">
        <div id="hero" className="h-screen scroll-mt-24">
          <div className="mx-auto w-full max-w-[2280px]">
            <div className="h-screen">
              <p className="mt-26 text-center text-2xl">Scaleopts.</p>

              <h1 className="mt-3 text-center text-5xl font-bold">
                <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                  Stop losing money to broken systems.
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-[600px] text-center text-[14px] leading-relaxed text-neutral-500 md:text-[16px]">
                We design and build systems that eliminate manual work, reduce errors
                and help your business scale without friction.
              </p>

              <div className="mt-6 flex justify-center">
                <a className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-500 px-5 py-2 text-[12px] font-semibold text-white">
                  Get your free system audit
                </a>
              </div>

              {/* SCROLL */}
              <div className="relative mx-auto mt-16 h-[320px] w-[620px]">
                <motion.div
                  style={{ x: securityX, y: securityY }}
                  className="absolute inset-0 z-30 flex items-center justify-center"
                >
                  <Image
                    src="/layer-security.png"
                    alt="Security layer"
                    width={620}
                    height={320}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </motion.div>

                <motion.div
                  style={{ x: automationX, y: automationY }}
                  className="absolute inset-0 z-20 flex items-center justify-center translate-y-[70px]"
                >
                  <Image
                    src="/layer-automation.png"
                    alt="Automation layer"
                    width={620}
                    height={320}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </motion.div>

                <motion.div
                  style={{ x: developmentX, y: developmentY }}
                  className="absolute inset-0 z-10 flex items-center justify-center translate-y-[140px]"
                >
                  <Image
                    src="/layer-development.png"
                    alt="Development layer"
                    width={620}
                    height={320}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* SERVICE */}
        <div id="services" className="relative h-screen scroll-mt-24">
          <div className="relative flex h-screen items-center">
            <motion.div
              style={{ opacity: titleOpacity, y: titleY }}
              className="absolute left-1/2 top-10 -translate-x-1/2 text-center"
            >
              <p className="text-[14px] font-semibold tracking-[0.1em] text-neutral-500">
                CORE PILLARS
              </p>

              <h2 className="mt-3 whitespace-nowrap text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[50px]">
                <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                  Three layers behind a scalable business
                </span>
              </h2>
            </motion.div>

            <motion.div
              style={{ opacity: securityTextOpacity }}
              className="absolute right-[25%] top-[25%] max-w-[420px]"
            >
              <p className="text-[14px] font-semibold tracking-[0.08em] text-fuchsia-500">
                SECURITY
              </p>
              <h3 className="mt-2 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900">
                Cyber foundations first
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                Strong access control, resilient architecture and fewer attack surfaces across your system.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: automationTextOpacity }}
              className="absolute left-[10%] top-[50%] max-w-[420px]"
            >
              <p className="text-[14px] font-semibold tracking-[0.08em] text-purple-500">
                AUTOMATION
              </p>
              <h3 className="mt-2 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900">
                Faster workflows
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                Eliminate manual processes and connect tools into a seamless, efficient operation.
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: developmentTextOpacity }}
              className="absolute right-[25%] top-[75%] max-w-[420px]"
            >
              <p className="text-[14px] font-semibold tracking-[0.08em] text-sky-500">
                DEVELOPMENT
              </p>
              <h3 className="mt-2 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900">
                Optimized systems
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                Clean, scalable and maintainable architecture designed to grow with your business.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden py-30 "  >
        <div className="mx-auto max-w-[420px] text-center ">

          <p className="text-[20px] font-medium">Scaleopts.</p>

          <h1 className="mt-4 text-[34px] font-bold">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              Stop losing money to broken systems.
            </span>
          </h1>

          <p className="mt-5 text-[14px] text-neutral-500">
            We design and build systems that eliminate manual work, reduce errors
            and help your business scale without friction.
          </p>


          {/* FIGURA ESTÁTICA */}
          <div className="relative mx-auto mt-4 h-[260px] w-full max-w-[340px]">
            <Image
              src="/layer-security.png"
              alt=""
              width={620}
              height={320}
              className="absolute left-1/2 z-30 top-0 -translate-x-1/2 w-full"
            />
            <Image
              src="/layer-automation.png"
              alt=""
              width={620}
              height={320}
              className="absolute left-1/2 z-20 top-[40px] -translate-x-1/2 w-full"
            />
            <Image
              src="/layer-development.png"
              alt=""
              width={620}
              height={320}
              className="absolute left-1/2 z-10 top-[80px] -translate-x-1/2 w-full"
            />
          </div>
 <div className="mt-16">
            <a className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-500 px-5 py-2 text-white text-[12px]">
              Get your free system audit
            </a>
          </div>
          {/* TEXTOS */}

          {/* MOBILE SERVICES */}
          <div className="mt-12 lg:hidden pb-12">
            <p className="text-center text-[12px] font-semibold tracking-[0.18em] text-neutral-500">
              CORE PILLARS
            </p>

            <h2 className="mx-auto mt-4 max-w-[360px] text-center text-[34px] font-semibold leading-[0.95] tracking-[-0.05em]">
              <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Three layers behind a scalable business
              </span>
            </h2>

            <div className="mt-14 space-y-16 text-left">
              {/* SECURITY - imagen izquierda / texto derecha */}
              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/layer-security.png"
                  alt=""
                  width={620}
                  height={320}
                  className="w-[40%] min-w-[140px] object-contain"
                />

                <div className="min-w-[180px] flex-1 text-left">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-fuchsia-500">
                    SECURITY
                  </p>
                  <h3 className="mt-1 text-[20px] font-semibold leading-[1.05] text-neutral-950">
                    Cyber foundations first
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
                    Strong access control, resilient architecture and fewer attack surfaces.
                  </p>
                </div>
              </div>

              {/* AUTOMATION - texto izquierda / imagen derecha */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="min-w-[180px] flex-1 text-left">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-purple-500">
                    AUTOMATION
                  </p>
                  <h3 className="mt-1 text-[20px] font-semibold leading-[1.05] text-neutral-950">
                    Faster workflows
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
                    Eliminate manual processes and connect tools into a seamless operation.
                  </p>
                </div>

                <Image
                  src="/layer-automation.png"
                  alt=""
                  width={620}
                  height={320}
                  className="w-[40%] min-w-[140px] object-contain"
                />
              </div>

              {/* DEVELOPMENT - imagen izquierda / texto derecha */}
              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src="/layer-development.png"
                  alt=""
                  width={620}
                  height={320}
                  className="w-[40%] min-w-[140px] object-contain"
                />

                <div className="min-w-[180px] flex-1 text-left">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-sky-500">
                    DEVELOPMENT
                  </p>
                  <h3 className="mt-1 text-[20px] font-semibold leading-[1.05] text-neutral-950">
                    Optimized systems
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
                    Clean, scalable architecture designed to grow with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
