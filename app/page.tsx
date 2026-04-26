import Navbar from "@/components/Navbar";
import HeroServicesStory from "../components/HeroServicesStory";
import FloatingContact from "../components/FloatingContact";
import PainToSystemSection from "../components/PainToSystemSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section id="hero" className="scroll-mt-24">
        <HeroServicesStory />
      </section>

      <section id="scalable" className="scroll-mt-24">
        <PainToSystemSection />
      </section>

      <FloatingContact />

      <section id="process" className="scroll-mt-24">
        <ProcessSection />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
    </main>
  );
}