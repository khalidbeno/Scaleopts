"use client";

// Este componente se renderiza en cliente porque usa hooks de scroll y animación

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroServicesStory() {
  // Referencia a toda la sección.
  // Framer Motion usa esto para saber cuánto scroll llevas dentro de este bloque.
  const sectionRef = useRef<HTMLDivElement>(null);

  // scrollYProgress va de 0 a 1:
  // 0 = acabas de entrar en esta sección
  // 1 = has llegado al final de esta sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // =========================================================
  // 1) MOVIMIENTO DE LAS 3 CAPAS DE LA FIGURA
  // =========================================================
  // Estos valores controlan cómo se separan las capas al hacer scroll.

  // SECURITY:
  // y negativo = sube
  // x positivo = se mueve a la derecha
  const securityY = useTransform(scrollYProgress, [0.20, 0.55], [0, 100]);
  const securityX = useTransform(scrollYProgress, [0.20, 0.55], [0, -420]);


  // AUTOMATION:
  // y = 0 → no sube ni baja
  // x positivo = se mueve a la derecha
  const automationY = useTransform(scrollYProgress, [0.20, 0.55], [0, 200]);
  const automationX = useTransform(scrollYProgress, [0.20, 0.55], [0, 360]);

  // DEVELOPMENT:
  // y positivo = baja
  // x negativo = se mueve a la izquierda
  const developmentY = useTransform(scrollYProgress, [0.20, 0.55], [0, 300]);
  const developmentX = useTransform(scrollYProgress, [0.20, 0.55], [0, -420]);

  // Escala general de toda la figura.
  // Empieza en 1 y se hace un poco más pequeña al hacer scroll.
  const figureScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.92]);

  // =========================================================
  // 2) APARICIÓN PROGRESIVA DE LOS TEXTOS EXPLICATIVOS
  // =========================================================
  // Cada bloque de texto aparece en un tramo distinto del scroll.

  // Opacidad:
  // 0 = invisible
  // 1 = visible
  // Los tres textos aparecen al mismo tiempo, permanecen visibles un tramo
  // y después desaparecen juntos más abajo en el scroll.
  const securityTextOpacity = useTransform(scrollYProgress, [0.52, 0.62, 1], [0, 1, 1]);
  const automationTextOpacity = useTransform(scrollYProgress, [0.52, 0.62, 1], [0, 1, 1]);
  const developmentTextOpacity = useTransform(scrollYProgress, [0.52, 0.62, 1], [0, 1, 1]);



  // Título superior de la sección explicativa:
  // aparece cuando la figura ya se ha empezado a abrir.
  const titleOpacity = useTransform(scrollYProgress, [0.50, 0.60, 1], [0, 1, 1]);
  const titleY = useTransform(scrollYProgress, [0.50, 0.60, 1], [20, 0, 0]);

  return (
    <section ref={sectionRef} className="relative bg-[#f3f3f5]">
      {/* =========================================================
          HERO COMPLETO
      ========================================================= */}
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">

          {/* =====================================================
              BLOQUE DE TEXTO SUPERIOR
          ===================================================== */}
          <div className="mt-8 md:mt-10">
            {/* Nombre de la marca */}
            <p className="mb-5 text-[15px] font-medium text-fuchsia-500 md:text-[25px]">
              Scaleopts
            </p>

            {/* Título principal */}
            <h1 className="mx-auto max-w-[900px] text-[34px] font-semibold leading-[1.05] tracking-[-0.05em] md:text-[56px]">
              <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Stop losing money to broken systems.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="mx-auto mt-8 max-w-[520px] text-[13px] text-neutral-500 md:text-[15px]">
              If your systems are slow, manual or unreliable, you&apos;re losing money every day.
              We redesign them to scale clean, secure and automated.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <a className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-500 px-5 py-2 text-[12px] font-semibold text-white">
                Get your free system audit
              </a>
            </div>
          </div>
          {/* =====================================================
            TÍTULO SUPERIOR DE LA SECCIÓN EXPLICATIVA
          ===================================================== */}

          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute top-[400px] left-1/2 z-50 -translate-x-1/2 text-center"
          >
            <p className="text-sm font-medium text-fuchsia-500">Core pillars</p>
            <h2 className="mt-2 text-[40px] font-semibold tracking-[-0.04em] text-neutral-900">
              Three layers behind a scalable business
            </h2>
          </motion.div>


          {/* =====================================================
              FIGURA + TEXTOS EXPLICATIVOS
          ===================================================== */}
          <motion.div
            // Aquí aplicamos la escala general de la figura
            style={{ scale: figureScale }}
            // Este bloque define el espacio visual de toda la escena
            className="relative mt-[-100px] flex h-[820px] w-full items-center justify-center md:mt-[-220px]"
          >
            {/* Contenedor base de la figura */}
            <div className="relative h-[420px] w-[700px]">

              {/* =========================
                  CAPA 1: SECURITY
              ========================= */}
              <motion.div
                // Movimiento dinámico con scroll
                style={{ x: securityX, y: securityY }}
                // Posición visual base
                className="absolute inset-0 z-30 flex items-center justify-center -translate-y-[20px]"
              >
                <Image
                  src="/layer-security.png"
                  alt="Security layer"
                  width={1000}
                  height={700}
                  className="h-auto w-full object-contain"
                  priority
                />
              </motion.div>

              {/* =========================
                  CAPA 2: AUTOMATION
              ========================= */}
              <motion.div
                style={{ x: automationX, y: automationY }}
                className="absolute inset-0 z-20 flex items-center justify-center translate-y-[60px]"
              >
                <Image
                  src="/layer-automation.png"
                  alt="Automation layer"
                  width={1000}
                  height={700}
                  className="h-auto w-full object-contain"
                  priority
                />
              </motion.div>

              {/* =========================
                  CAPA 3: DEVELOPMENT
              ========================= */}
              <motion.div
                style={{ x: developmentX, y: developmentY }}
                className="absolute inset-0 z-10 flex items-center justify-center translate-y-[120px]"
              >
                <Image
                  src="/layer-development.png"
                  alt="Development layer"
                  width={1000}
                  height={700}
                  className="h-auto w-full object-contain"
                  priority
                />
              </motion.div>

              {/* =========================
                  TEXTO SECURITY
                  Derecha y arriba
              ========================= */}
              <motion.div
                style={{ opacity: securityTextOpacity }}
                className="absolute right-[0] top-[200px] z-40 hidden max-w-[220px] text-left md:block"
              >
                <p className="text-m font-semibold bg-gradient-to-r from-fuchsia-600 to-sky-500 bg-clip-text text-transparent">
                Security
                </p>
                <h3 className="whitespace-nowrap mt-2 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-neutral-900">
                  Cyber foundations first
                </h3>
                <p className="whitespace-nowrap mt-3 text-sm leading-6 text-neutral-600">
                  Strong access control, safer architecture and fewer weak points across the system.
                </p>
              </motion.div>

              {/* =========================
                  TEXTO AUTOMATION
                  Derecha y centro
              ========================= */}
              <motion.div
                style={{ opacity: automationTextOpacity }}
                className="absolute left-[-300px] top-[400px] z-40 hidden max-w-[320px] text-left md:block"
              >
                <p className="text-sm font-medium text-fuchsia-500">Automation</p>
                <h3 className="whitespace-nowrap mt-2 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-neutral-900">
                  Faster workflows
                </h3>
                <p className="whitespace-nowrap mt-3 text-sm leading-6 text-neutral-600">
                  Less manual work, fewer mistakes and smoother operations between tools and teams.
                </p>
              </motion.div>

              {/* =========================
                  TEXTO DEVELOPMENT
                  Izquierda y abajo
              ========================= */}
              <motion.div
                style={{ opacity: developmentTextOpacity }}
                className="absolute right-[0px] top-[600px] z-40 hidden max-w-[220px] text-left md:block"
              >
                <p className="text-sm font-medium text-fuchsia-500">Development</p>
                <h3 className="whitespace-nowrap mt-2 text-[28px] font-semibold leading-tight tracking-[-0.04em] text-neutral-900">
                  Optimized systems
                </h3>
                <p className=" whitespace-nowrap mt-3 text-sm leading-6 text-neutral-600">
                  Clean, scalable and maintainable development built to grow with the business.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}