import {
  AdoptionGallery,
  DonationSection,
  HeroSection,
  LandingFooter,
  LandingHeader,
  TransparencySection,
  ValuePillarsSection,
} from "@/components/gatolinos/landing-page";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ValuePillarsSection />
        {/* <AdoptionGallery />
        <TransparencySection /> */}
        <DonationSection />
      </main>
      <LandingFooter />
    </>
  );
}
