import { DonationSection } from "@/app/_components/donation-section";
import { HeroSection } from "@/app/_components/hero-section";
import { ValuePillarsSection } from "@/app/_components/value-pillars-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ValuePillarsSection />
      <DonationSection />
    </main>
  );
}
