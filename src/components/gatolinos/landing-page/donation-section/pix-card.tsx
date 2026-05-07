import { QrCodeIcon } from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/gatolinos/app-icon";
import { CopyPixButton } from "@/components/gatolinos/copy-pix-button";
import { donationOptions } from "@/content/gatolinos-content";
import { DonationCard } from "../donation-card";

export function DonationSectionPixCard() {
  const pixOption = donationOptions[0];

  return (
    <DonationCard theme="primary">
      <DonationCard.Icon>
        <AppIcon icon={QrCodeIcon} size={32} className="text-primary" />
      </DonationCard.Icon>
      <DonationCard.Title>{pixOption.title}</DonationCard.Title>
      <DonationCard.Description theme="primary">
        {pixOption.description}
      </DonationCard.Description>
      <DonationCard.Content>
        <div className="mx-auto max-w-xs rounded-[1.5rem] bg-white p-6 text-center shadow-[0_20px_50px_-30px_rgba(61,38,17,0.28)] ring-1 ring-outline-variant/30">
          <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline">
            Chave PIX (Celular)
          </p>
          <p className="mt-3 break-all font-headline text-2xl font-bold text-primary">
            {pixOption.pixKey}
          </p>
        </div>
      </DonationCard.Content>
      <DonationCard.Action>
        <CopyPixButton pixKey={pixOption.pixKey} />
      </DonationCard.Action>
    </DonationCard>
  );
}
