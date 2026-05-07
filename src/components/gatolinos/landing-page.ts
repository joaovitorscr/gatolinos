import {
  AdoptionGallery,
  DonationSection,
  HeroSection,
  LandingFooter,
  LandingHeader,
  LandingPageMain,
  LandingPageRoot,
  TransparencySection,
  ValuePillarsSection,
} from "./landing-page/index";

export const LandingPage = Object.assign(LandingPageRoot, {
  Main: LandingPageMain,
  Header: LandingHeader,
  Hero: HeroSection,
  ValuePillars: ValuePillarsSection,
  AdoptionGallery,
  Transparency: TransparencySection,
  Donation: DonationSection,
  Footer: LandingFooter,
});
