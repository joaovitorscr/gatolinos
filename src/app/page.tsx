import type { Metadata } from "next";

import { DonationSection } from "@/app/_components/donation-section";
import { HeroSection } from "@/app/_components/hero-section";
import { ValuePillarsSection } from "@/app/_components/value-pillars-section";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ValuePillarsSection />
      <DonationSection />
    </main>
  );
}
