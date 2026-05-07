import { DonationSectionGrid } from "./grid";
import { DonationSectionIntro } from "./intro";
import { DonationSectionPixCard } from "./pix-card";
import { DonationSectionRecurringCard } from "./recurring-card";
import { DonationSectionRoot } from "./root";

export const DonationSection = Object.assign(DonationSectionRoot, {
  Intro: DonationSectionIntro,
  Grid: DonationSectionGrid,
  PixCard: DonationSectionPixCard,
  RecurringCard: DonationSectionRecurringCard,
});
