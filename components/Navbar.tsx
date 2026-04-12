import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-400 bg-[#f3f3f5]">
      <div className="relative mx-auto flex h-[40px] max-w-[1500px] items-center justify-between px-7">
        <a href="#" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Scaleopts logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 text-[12px] font-semibold text-neutral-800 md:flex">
          <a href="#scalable" className="transition hover:opacity-70">
            Scalable
          </a>
          <a href="#services" className="transition hover:opacity-70">
            Services
          </a>
          <a href="#process" className="transition hover:opacity-70">
            Process
          </a>
          <a href="#contact" className="transition hover:opacity-70">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-300 px-3 py-1 text-[10px] font-semibold text-white"
        >
          Free Audit
        </a>
      </div>
    </header>
  );
}