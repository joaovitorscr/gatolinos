import { LandingPage } from "@/components/gatolinos/landing-page";

export default function Home() {
  return (
    <LandingPage>
      <LandingPage.Header />
      <LandingPage.Main>
        <LandingPage.Hero />

        <LandingPage.ValuePillars>
          <LandingPage.ValuePillars.Intro />
          <LandingPage.ValuePillars.Grid>
            <LandingPage.ValuePillars.Cards />
          </LandingPage.ValuePillars.Grid>
        </LandingPage.ValuePillars>

        {/* <LandingPage.AdoptionGallery />
        <LandingPage.Transparency /> */}

        <LandingPage.Donation>
          <LandingPage.Donation.Intro />
          <LandingPage.Donation.Grid>
            <LandingPage.Donation.PixCard />
            <LandingPage.Donation.RecurringCard />
          </LandingPage.Donation.Grid>
        </LandingPage.Donation>
      </LandingPage.Main>
      <LandingPage.Footer />
    </LandingPage>
  );
}
