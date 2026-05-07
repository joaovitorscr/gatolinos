import { SectionIntro } from "../section-intro";

export function ValuePillarsSectionIntro() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <SectionIntro>
        <SectionIntro.Title>
          Um projeto movido por amor e constância
        </SectionIntro.Title>
        <SectionIntro.Description>
          O apadrinhamento mensal e as doações mantêm a rotina dos gatos
          acolhidos com alimentação, higiene, conforto e cuidado contínuo.
        </SectionIntro.Description>
      </SectionIntro>
      <div className="hidden h-px flex-1 bg-outline-variant/60 lg:block" />
    </div>
  );
}
