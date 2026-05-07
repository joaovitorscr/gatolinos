import { valuePillars } from "@/content/gatolinos-content";
import { ValuePillarsSectionCard } from "./card";

export function ValuePillarsSectionCards() {
  return (
    <>
      {valuePillars.map((pillar) => (
        <ValuePillarsSectionCard
          key={pillar.title}
          title={pillar.title}
          description={pillar.description}
          tintClassName={pillar.tintClassName}
          icon={pillar.icon}
        />
      ))}
    </>
  );
}
