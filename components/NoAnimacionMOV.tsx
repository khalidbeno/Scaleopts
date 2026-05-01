
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


  // MOVIL
  const mobileServicesOpacity = useTransform(scrollYProgress, [0.42, 0.58], [0, 1]);
  const mobileServicesY = useTransform(scrollYProgress, [0.42, 0.58], [40, 0]);

  const securityXMobile = useTransform(scrollYProgress, [0.12, 0.50], ["0%", "-80%"]);
  const securityYMobile = useTransform(scrollYProgress, [0.12, 0.50], ["0%", "120%"]);

  const automationXMobile = useTransform(scrollYProgress, [0.12, 0.50], ["0%", "60%"]);
  const automationYMobile = useTransform(scrollYProgress, [0.12, 0.50], ["0%", "180%"]);

  const developmentXMobile = useTransform(scrollYProgress, [0.12, 0.50], ["0%", "-70%"]);
  const developmentYMobile = useTransform(scrollYProgress, [0.12, 0.50], ["0%", "250%"]);

// IPAD / TABLET
// IPAD / TABLET
const tabletServicesOpacity = useTransform(scrollYProgress, [0.32, 0.52], [0, 1]);
const tabletServicesY = useTransform(scrollYProgress, [0.32, 0.52], [50, 0]);

const securityXTablet = useTransform(scrollYProgress, [0.14, 0.52], ["0%", "-18%"]);
const securityYTablet = useTransform(scrollYProgress, [0.14, 0.52], ["0%", "70%"]);

const automationXTablet = useTransform(scrollYProgress, [0.14, 0.52], ["0%", "18%"]);
const automationYTablet = useTransform(scrollYProgress, [0.14, 0.52], ["0%", "105%"]);

const developmentXTablet = useTransform(scrollYProgress, [0.14, 0.52], ["0%", "-14%"]);
const developmentYTablet = useTransform(scrollYProgress, [0.14, 0.52], ["0%", "140%"]);

  return (
    <section ref={sectionRef} className="relative px-4 md:px-6">
      {/* DESKTOP */}
      <div className="hidden xl:block h-[200vh]">
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


      {/* ============================================== */}
      {/* ================= MOBILE ============== */}
      {/* ============================================== */}
      <div className="block md:hidden py-16">
        <div className="mx-auto max-w-[420px] text-center sm:max-w-[620px]">

          {/* HERO TEXT */}
          <p className="text-[20px] font-medium">Scaleopts.</p>

          <h1 className="mt-4 text-[34px] font-bold sm:text-[46px]">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              Stop losing money to broken systems.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-relaxed text-neutral-500 sm:text-[17px]">
            We design and build systems that eliminate manual work, reduce errors
            and help your business scale without friction.
          </p>

          <div className="mt-6">
            <a className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-500 px-5 py-2 text-[12px] font-semibold text-white">
              Get your free system audit
            </a>
          </div>

          {/* ANIMATED HERO TO SERVICES */}
          <motion.div className="relative mx-auto mt-10 h-[780px] w-full max-w-[420px] sm:h-[900px] sm:max-w-[620px]">

            {/* SERVICES TITLE */}
            <motion.div
              style={{ opacity: mobileServicesOpacity, y: mobileServicesY }}
              className="absolute left-1/2 top-0 w-full -translate-x-1/2 text-center"
            >
              <p className="text-[12px] font-semibold tracking-[0.18em] text-neutral-500">
                CORE PILLARS
              </p>

              <h2 className="mx-auto mt-4 max-w-[360px] text-[34px] font-semibold leading-[0.95] tracking-[-0.05em] sm:max-w-[560px] sm:text-[46px]">
                <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                  Three layers behind a scalable business
                </span>
              </h2>
            </motion.div>

            {/* SECURITY IMAGE */}
            <motion.div
              style={{ x: securityXMobile, y: securityYMobile }}
              className="absolute left-1/2 top-[-80px] z-30 w-[70%] -translate-x-[10%] sm:w-[80%]"
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

            {/* AUTOMATION IMAGE */}
            <motion.div
              style={{ x: automationXMobile, y: automationYMobile }}
              className="absolute left-1/2 top-[-80px] z-20 w-[70%] -translate-x-[70%] sm:w-[70%]"
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

            {/* DEVELOPMENT IMAGE */}
            <motion.div
              style={{ x: developmentXMobile, y: developmentYMobile }}
              className="absolute left-1/2 top-[-100px] z-10 w-[70%] -translate-x-[15%] sm:w-[70%]"
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

            {/* SECURITY TEXT */}
            <motion.div
              style={{ opacity: mobileServicesOpacity, y: mobileServicesY }}
              className="absolute right-[-10] top-[140px] w-[48%] text-left sm:top-[330px]"
            >
              <p className="text-[10px] font-semibold tracking-[0.14em] text-fuchsia-500">
                SECURITY
              </p>
              <h3 className="mt-1 text-[18px] font-semibold leading-[1.05] text-neutral-950 sm:text-[22px]">
                Cyber foundations first
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-neutral-500 sm:text-[14px]">
                Strong access control, resilient architecture and fewer attack surfaces.
              </p>
            </motion.div>

            {/* AUTOMATION TEXT */}
            <motion.div
              style={{ opacity: mobileServicesOpacity, y: mobileServicesY }}
              className="absolute left-55 top-[430px] w-[48%] text-left sm:top-[560px]"
            >
              <p className="text-[10px] font-semibold tracking-[0.14em] text-purple-500">
                DEVELOPMENT
              </p>
              <h3 className="mt-1 text-[18px] font-semibold leading-[1.05] text-neutral-950 sm:text-[22px]">
                Optimized systems
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-neutral-500 sm:text-[14px]">
                Clean, scalable architecture designed to grow with your business.
              </p>
            </motion.div>

            {/* DEVELOPMENT TEXT */}
            <motion.div
              style={{ opacity: mobileServicesOpacity, y: mobileServicesY }}
              className="absolute right-50 top-[300px] w-[48%] text-left sm:top-[780px]"
            >
              <p className="text-[10px] font-semibold tracking-[0.14em] text-sky-500">
                AUTOMATION
              </p>
              <h3 className="mt-1 text-[18px] font-semibold leading-[1.05] text-neutral-950 sm:text-[22px]">
                Faster workflows
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-neutral-500 sm:text-[14px]">
                Eliminate manual processes and connect tools into a seamless operation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* ============================================== */}
      {/* ================= FIN ===================== */}
      {/* ============================================== */}

{/* ============================================== */}
{/* ================= IPAD ======================= */}
{/* ============================================== */}
<div className="hidden md:block xl:hidden">
  <div className="h-[250vh]" ref={sectionRef}>
    <div className="sticky top-0 h-screen overflow-hidden">
      <div className="mx-auto max-w-[860px] px-6 text-center">

        {/* HERO TEXT — se desvanece al hacer scroll */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.0, 0.18], [1, 0]) }}
          className="pt-20"
        >
          <p className="text-[22px] font-medium">Scaleopts.</p>
          <h1 className="mx-auto mt-4 max-w-[760px] text-[54px] font-bold leading-[1.05]">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              Stop losing money to broken systems.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-[580px] text-[17px] leading-relaxed text-neutral-500">
            We design and build systems that eliminate manual work, reduce errors
            and help your business scale without friction.
          </p>
          <div className="mt-7">
            <a className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-500 px-6 py-3 text-[13px] font-semibold text-white">
              Get your free system audit
            </a>
          </div>
        </motion.div>

        {/* CANVAS de animación — posición fija dentro del sticky */}
        <div className="relative mx-auto mt-10 h-[500px] w-full max-w-[860px]">

          {/* TÍTULO SERVICES — aparece encima de todo */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.38, 0.52], [0, 1]),
              y: useTransform(scrollYProgress, [0.38, 0.52], [30, 0]),
            }}
            className="absolute left-1/2 top-0 z-50 w-full -translate-x-1/2 text-center"
          >
            <p className="text-[12px] font-semibold tracking-[0.18em] text-neutral-400">
              CORE PILLARS
            </p>
            <h2 className="mx-auto mt-3 max-w-[650px] text-[42px] font-semibold leading-[0.95] tracking-[-0.04em]">
              <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Three layers behind a scalable business
              </span>
            </h2>
          </motion.div>

          {/* SECURITY IMAGE — arriba izquierda en destino */}
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.18, 0.55], ["0%", "-28%"]),
              y: useTransform(scrollYProgress, [0.18, 0.55], ["0%", "30%"]),
              scale: useTransform(scrollYProgress, [0.18, 0.55], [1, 0.72]),
            }}
            className="absolute left-[20%] top-[30px] z-30 w-[58%]"
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

          {/* AUTOMATION IMAGE — centro derecha en destino */}
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.18, 0.55], ["0%", "28%"]),
              y: useTransform(scrollYProgress, [0.18, 0.55], ["8%", "55%"]),
              scale: useTransform(scrollYProgress, [0.18, 0.55], [1, 0.72]),
            }}
            className="absolute left-[15%] top-[30px] z-20 w-[58%]"
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

          {/* DEVELOPMENT IMAGE — abajo izquierda en destino */}
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.18, 0.55], ["0%", "-24%"]),
              y: useTransform(scrollYProgress, [0.18, 0.55], ["16%", "80%"]),
              scale: useTransform(scrollYProgress, [0.18, 0.55], [1, 0.72]),
            }}
            className="absolute left-[18%] top-[30px] z-10 w-[58%]"
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

          {/* TEXTOS DE SERVICIOS */}

          {/* SECURITY TEXT — derecha del security image */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.45, 0.58], [0, 1]),
              x: useTransform(scrollYProgress, [0.45, 0.58], [20, 0]),
            }}
            className="absolute right-[4%] top-[23%] z-40 w-[36%] text-left"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-fuchsia-500">SECURITY</p>
            <h3 className="mt-2 text-[22px] font-semibold leading-[1.05] text-neutral-950">
              Cyber foundations first
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
              Strong access control, resilient architecture and fewer attack surfaces.
            </p>
          </motion.div>

          {/* AUTOMATION TEXT — izquierda del automation image */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.48, 0.61], [0, 1]),
              x: useTransform(scrollYProgress, [0.48, 0.61], [-20, 0]),
            }}
            className="absolute left-[4%] top-[48%] z-40 w-[36%] text-left"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-purple-500">AUTOMATION</p>
            <h3 className="mt-2 text-[22px] font-semibold leading-[1.05] text-neutral-950">
              Faster workflows
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
              Eliminate manual processes and connect tools seamlessly.
            </p>
          </motion.div>

          {/* DEVELOPMENT TEXT — derecha del development image */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.51, 0.64], [0, 1]),
              x: useTransform(scrollYProgress, [0.51, 0.64], [20, 0]),
            }}
            className="absolute right-[4%] top-[72%] z-40 w-[36%] text-left"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-sky-500">DEVELOPMENT</p>
            <h3 className="mt-2 text-[22px] font-semibold leading-[1.05] text-neutral-950">
              Optimized systems
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
              Clean, scalable architecture designed to grow with your business.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  </div>
</div>
{/* ============================================== */}
{/* ================= FIN IPAD ================== */}
{/* ============================================== */}
    </section>
  );
}
