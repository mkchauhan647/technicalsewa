import HeroSection from "@/components/HeroSection";
import FooterContact from "@/components/footer/FooterContact";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FooterContact />
    </main>
  );
}
