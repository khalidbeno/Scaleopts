import Image from "next/image"; 
// Importas el componente Image de Next.js (optimiza imágenes automáticamente)

export default function Hero() {
  return (
    // Sección principal del hero
    // min-h-screen → ocupa toda la altura de la pantalla
    // flex + center → centra todo el contenido vertical y horizontalmente
    <section className="flex min-h-screen items-center justify-center bg-[#f3f3f5]">
      
      {/* Contenedor central con ancho máximo */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between px-6 text-center">
        
        {/* ===================== TEXTO SUPERIOR ===================== */}
        <div className="mt-10">
          
          {/* Nombre de la marca */}
          <p className="mb-4 text-[22px] font-medium text-fuchsia-500 md:text-[28px]">
            Scaleopts
          </p>

          {/* Título principal */}
          <h1 className="mx-auto max-w-[900px] text-[34px] font-semibold leading-[1.05] tracking-[-0.05em] md:text-[56px]">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              Stop losing money to broken systems.
            </span>
          </h1>

          {/* Subtítulo / descripción */}
          <p className="mx-auto mt-5 max-w-[600px] text-[13px] text-neutral-500 md:text-[15px]">
            If your systems are slow, manual or unreliable, you're losing money every day.
            We redesign them to scale clean, secure and automated.
          </p>

          {/* Botón CTA */}
          <div className="mt-6">
            <a className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-500 px-5 py-2 text-[12px] font-semibold text-white">
              Get your free system audit
            </a>
          </div>
        </div>

        {/* ===================== FIGURA ===================== */}
        <div className="mt-6 flex justify-center">
          
          {/* Contenedor relativo para posicionar las capas */}
          <div className="relative h-[260px] w-[280px] md:h-[420px] md:w-[620px]">
            
            {/* -------- CAPA INFERIOR (DESARROLLO) -------- */}
            {/* absolute → permite superponer capas */}
            {/* translate-y → baja la capa para crear profundidad */}
            <div className="absolute inset-0 z-10 flex items-center justify-center translate-y-[45px] md:translate-y-[80px]">
              <Image
                src="/layer-development.png"
                alt="Development layer"
                width={1000}
                height={700}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* -------- CAPA MEDIA (AUTOMATIZACIÓN) -------- */}
            {/* Menos desplazamiento que la inferior */}
            <div className="absolute inset-0 z-20 flex items-center justify-center translate-y-[16px] md:translate-y-[28px]">
              <Image
                src="/layer-automation.png"
                alt="Automation layer"
                width={1000}
                height={700}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* -------- CAPA SUPERIOR (SEGURIDAD) -------- */}
            {/* Se sube ligeramente para simular que está flotando */}
            <div className="absolute inset-0 z-30 flex items-center justify-center -translate-y-[20px] md:-translate-y-[28px]">
              <Image
                src="/layer-security.png"
                alt="Security layer"
                width={1000}
                height={700}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}