import {
  AlertTriangle,
  FavouriteIcon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { AppIcon } from "@/components/gatolinos/app-icon";
import { transparencyMetrics } from "@/content/gatolinos-content";
import { MetricCard } from "./metric-card";
import { SectionIntro } from "./section-intro";
import { shellClassName } from "./shell";

export function TransparencySection() {
  return (
    <section id="transparencia" className="bg-primary py-20 sm:py-24 lg:py-32">
      <div className={shellClassName}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionIntro invert>
            <SectionIntro.Title invert>
              Transparência que aproxima
            </SectionIntro.Title>
            <SectionIntro.Description invert>
              O Projeto Gatolinos sobrevive exclusivamente de doações e trabalho
              voluntário. Mostrar para onde vai cada ajuda também faz parte do
              cuidado.
            </SectionIntro.Description>
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
                  <AppIcon
                    icon={Wallet01Icon}
                    size={20}
                    className="text-primary-fixed"
                  />
                ) : metric.icon === "alert" ? (
                  <AppIcon
                    icon={AlertTriangle}
                    size={20}
                    className="text-tertiary-fixed"
                  />
                ) : (
                  <AppIcon
                    icon={FavouriteIcon}
                    size={20}
                    className="text-primary-fixed"
                  />
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
