import { QrCodeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { donationOptions } from "@/content/gatolinos-content";
import { cn } from "@/lib/utils";

import { CopyPixButton } from "../../components/copy-pix-button";
import {
  DonationCard,
  DonationCardAction,
  DonationCardContent,
  DonationCardDescription,
  DonationCardIcon,
  DonationCardTitle,
} from "../../components/donation-card";
import {
  SectionIntro,
  SectionIntroDescription,
  SectionIntroTitle,
} from "../../components/layout/section-intro";
import { Reveal, RevealItem, RevealStagger } from "../../lib/motion";

export function DonationSection({ className, ...props }: React.ComponentProps<"section">) {
  const pixOption = donationOptions.find((option) => option.pixKey);
  const recurringOption = donationOptions.find((option) => option.tiers.length > 0);

  if (!pixOption || !recurringOption) {
    return null;
  }

  return (
    <section
      id="contribuir"
      data-slot="donation-section"
      className={cn("bg-surface-warm py-20 sm:py-24 lg:py-32", className)}
      {...props}
    >
      <div className="default-shell">
        <Reveal>
          <SectionIntro align="center">
            <SectionIntroTitle>Pequenos gestos, grandes ronronados</SectionIntroTitle>
            <SectionIntroDescription>
              Ao ajudar o Projeto Gatolinos Londrina, você garante ração de qualidade, sachês,
              cuidados veterinários, areia sanitária e mimos que trazem conforto.
            </SectionIntroDescription>
          </SectionIntro>
        </Reveal>
        <RevealStagger data-slot="donation-section-grid" className="mt-14 grid gap-8  ">
          {/* Pix Donation Card */}
          <RevealItem className="h-full">
            <DonationCard theme="primary">
              <DonationCardIcon>
                <HugeiconsIcon icon={QrCodeIcon} size={32} className="text-primary" />
              </DonationCardIcon>
              <DonationCardTitle>{pixOption.title}</DonationCardTitle>
              <DonationCardDescription theme="primary">
                {pixOption.description}
              </DonationCardDescription>
              <DonationCardContent>
                <div className="mx-auto max-w-xs rounded-3xl bg-white p-6 text-center shadow-[0_20px_50px_-30px_rgba(61,38,17,0.28)] ring-1 ring-outline-variant/30">
                  <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline">
                    Chave PIX (Celular)
                  </p>
                  <p className="mt-3 break-all font-headline text-2xl font-bold text-primary">
                    {pixOption.pixKey}
                  </p>
                </div>
              </DonationCardContent>
              <DonationCardAction>
                <CopyPixButton pixKey={pixOption.pixKey} />
              </DonationCardAction>
            </DonationCard>
          </RevealItem>

          {/* Recurring Donation Card */}
          {/* <RevealItem className="h-full">
            <DonationCard theme="secondary">
              <DonationCardIcon>
                <HugeiconsIcon icon={FavouriteIcon} size={32} className="text-secondary" />
              </DonationCardIcon>
              <DonationCardTitle>{recurringOption.title}</DonationCardTitle>
              <DonationCardDescription theme="secondary">
                {recurringOption.description}
              </DonationCardDescription>
              <DonationCardContent>
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
              </DonationCardContent>
              <DonationCardAction>
                <PrimaryLink
                  href="mailto:contato@gatolinos.org?subject=Quero%20ser%20padrinho"
                  className="w-full max-w-xs"
                >
                  Quero ser padrinho
                </PrimaryLink>
              </DonationCardAction>
            </DonationCard>
          </RevealItem> */}
        </RevealStagger>
      </div>
    </section>
  );
}
