import { Reveal } from "../motion";
import { SectionIntro } from "../section-intro";

export function DonationSectionIntro() {
  return (
    <Reveal>
      <SectionIntro align="center">
        <SectionIntro.Title>
          Pequenos gestos, grandes ronronados
        </SectionIntro.Title>
        <SectionIntro.Description>
          Ao ajudar o Projeto Gatolinos Londrina, você garante ração de
          qualidade, sachês, cuidados veterinários, areia sanitária e mimos que
          trazem conforto.
        </SectionIntro.Description>
      </SectionIntro>
    </Reveal>
  );
}
