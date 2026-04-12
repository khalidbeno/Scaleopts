import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />

      
      <FloatingContact />
    </main>
  );
}