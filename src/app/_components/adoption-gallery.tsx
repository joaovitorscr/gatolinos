import { adoptionCategories } from "@/content/gatolinos-content";

import { AdoptionCard } from "../../components/adoption-card";
import {
  SectionIntro,
  SectionIntroEyebrow,
  SectionIntroTitle,
} from "../../components/layout/section-intro";
import { Reveal, RevealItem, RevealStagger } from "../../lib/motion";

export function AdoptionGallery() {
  return (
    <section id="adocao" className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className="default-shell">
        <Reveal>
          <SectionIntro align="center">
            <SectionIntroEyebrow>Explore e apaixone-se</SectionIntroEyebrow>
            <SectionIntroTitle>Gatos esperando por carinho e encontro</SectionIntroTitle>
          </SectionIntro>
        </Reveal>
        <RevealStagger
          className="mt-14 grid gap-8 lg:grid-cols-3"
          amount={0.12}
          staggerChildren={0.12}
        >
          {adoptionCategories.map((category) => (
            <RevealItem key={category.title} distance={36}>
              <AdoptionCard {...category} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
