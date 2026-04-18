import Navbar from "@/components/Navbar";
import HeroServicesStory from "../components/HeroServicesStory";                                                                     
import FloatingContact from "../components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroServicesStory />
      <FloatingContact />
    </main>
  );
}