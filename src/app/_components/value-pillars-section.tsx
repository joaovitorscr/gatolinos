import { HeartPulse, MedicalMaskIcon, ReloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { valuePillars } from "@/content/gatolinos-content";
import { cn } from "@/lib/utils";

import {
  SectionIntro,
  SectionIntroDescription,
  SectionIntroTitle,
} from "../../components/layout/section-intro";
import {
  PillarCard,
  PillarCardDescription,
  PillarCardIcon,
  PillarCardTitle,
} from "../../components/pillar-card";
import { Reveal, RevealItem, RevealStagger } from "../../lib/motion";

type ValuePillarCardIcon = "medical" | "social" | "tnr";

function renderIcon(icon: ValuePillarCardIcon) {
  if (icon === "medical") {
    return <HugeiconsIcon icon={MedicalMaskIcon} size={32} className="text-primary" />;
  }

  if (icon === "social") {
    return <HugeiconsIcon icon={HeartPulse} size={32} className="text-secondary" />;
  }

  return <HugeiconsIcon icon={ReloadIcon} size={32} className="text-on-tertiary-container" />;
}

export function ValuePillarsSection({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      id="abordagem"
      data-slot="value-pillars-section"
      className={cn("bg-white py-20 sm:py-24 lg:py-32", className)}
      {...props}
    >
      <div className="default-shell">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro>
            <SectionIntroTitle>Um projeto movido por amor e constância</SectionIntroTitle>
            <SectionIntroDescription>
              O apadrinhamento mensal e as doações mantêm a rotina dos gatos acolhidos com
              alimentação, higiene, conforto e cuidado contínuo.
            </SectionIntroDescription>
          </SectionIntro>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {valuePillars.map((pillar) => (
            <RevealItem key={pillar.title} className="h-full">
              <PillarCard className="h-full">
                <PillarCardIcon tintClassName={pillar.tintClassName}>
                  {renderIcon(pillar.icon)}
                </PillarCardIcon>
                <PillarCardTitle>{pillar.title}</PillarCardTitle>
                <PillarCardDescription>{pillar.description}</PillarCardDescription>
              </PillarCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
