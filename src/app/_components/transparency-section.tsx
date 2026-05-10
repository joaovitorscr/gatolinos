import { AlertTriangle, FavouriteIcon, Wallet01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { transparencyMetrics } from "@/content/gatolinos-content";

import {
  SectionIntro,
  SectionIntroDescription,
  SectionIntroTitle,
} from "../../components/layout/section-intro";
import { MetricCard } from "../../components/metric-card";

export function TransparencySection() {
  return (
    <section id="transparencia" className="bg-primary py-20 sm:py-24 lg:py-32">
      <div className="default-shell">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionIntro invert>
            <SectionIntroTitle invert>Transparência que aproxima</SectionIntroTitle>
            <SectionIntroDescription invert>
              O Projeto Gatolinos sobrevive exclusivamente de doações e trabalho voluntário. Mostrar
              para onde vai cada ajuda também faz parte do cuidado.
            </SectionIntroDescription>
          </SectionIntro>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {transparencyMetrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              detail={metric.detail}
              progress={metric.progress}
              accentClassName={metric.accentClassName}
              icon={
                metric.icon === "wallet" ? (
                  <HugeiconsIcon icon={Wallet01Icon} size={20} className="text-primary-fixed" />
                ) : metric.icon === "alert" ? (
                  <HugeiconsIcon icon={AlertTriangle} size={20} className="text-tertiary-fixed" />
                ) : (
                  <HugeiconsIcon icon={FavouriteIcon} size={20} className="text-primary-fixed" />
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
