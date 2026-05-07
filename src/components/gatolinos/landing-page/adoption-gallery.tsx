import { adoptionCategories } from "@/content/gatolinos-content";
import { AdoptionCard } from "./adoption-card";
import { SectionIntro } from "./section-intro";
import { shellClassName } from "./shell";

export function AdoptionGallery() {
  return (
    <section id="adocao" className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className={shellClassName}>
        <SectionIntro align="center">
          <SectionIntro.Eyebrow>Explore e apaixone-se</SectionIntro.Eyebrow>
          <SectionIntro.Title>
            Gatos esperando por carinho e encontro
          </SectionIntro.Title>
        </SectionIntro>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {adoptionCategories.map((category) => (
            <AdoptionCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
