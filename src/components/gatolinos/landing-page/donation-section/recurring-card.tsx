import { FavouriteIcon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/gatolinos/app-icon";
import { donationOptions } from "@/content/gatolinos-content";
import { DonationCard } from "../donation-card";
import { PrimaryLink } from "../primary-link";

export function DonationSectionRecurringCard() {
  const recurringOption = donationOptions[1];

  return (
    <DonationCard theme="secondary">
      <DonationCard.Icon>
        <AppIcon icon={FavouriteIcon} size={32} className="text-secondary" />
      </DonationCard.Icon>
      <DonationCard.Title>{recurringOption.title}</DonationCard.Title>
      <DonationCard.Description theme="secondary">
        {recurringOption.description}
      </DonationCard.Description>
      <DonationCard.Content>
        <div className="mx-auto flex max-w-xs flex-col gap-4">
          {recurringOption.tiers.map((tier) => (
            <div
              key={tier.label}
              className={`rounded-2xl px-6 py-4 text-base font-bold ${
                tier.emphasized
                  ? "bg-secondary text-white"
                  : "bg-white/70 text-secondary ring-1 ring-outline-variant/40"
              }`}
            >
              {tier.label}
            </div>
          ))}
        </div>
      </DonationCard.Content>
      <DonationCard.Action>
        <PrimaryLink
          href="mailto:contato@gatolinos.org?subject=Quero%20ser%20padrinho"
          className="w-full max-w-xs"
        >
          Quero ser padrinho
        </PrimaryLink>
      </DonationCard.Action>
    </DonationCard>
  );
}
