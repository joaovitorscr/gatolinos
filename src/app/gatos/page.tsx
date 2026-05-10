import { ArrowRight, MapPin, PawPrint } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  SectionIntro,
  SectionIntroDescription,
  SectionIntroEyebrow,
  SectionIntroTitle,
} from "@/components/layout/section-intro";
import { adoptionCategories, catsForAdoption } from "@/content/gatolinos-content";
import { Reveal, RevealItem, RevealStagger } from "@/lib/motion";
import { buildPageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Gatos para adoção",
  description:
    "Conheça os gatos acolhidos pelo Projeto Gatolinos em Londrina e abra cada perfil para adoção responsável ou apadrinhamento.",
  path: "/gatos",
});

export default function CatsPage() {
  const totalCats = catsForAdoption.length;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf1_0%,#fff8f5_34%,#f8efea_100%)]">
      <main>
        <section className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
          <div className="animate-float absolute inset-x-0 top-0 h-112 bg-[radial-gradient(circle_at_top_left,rgba(242,214,250,0.72),transparent_50%),radial-gradient(circle_at_top_right,rgba(255,220,193,0.82),transparent_42%)]" />
          <div className="default-shell relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.72fr)] lg:items-end">
            <Reveal>
              <SectionIntro>
                <SectionIntroEyebrow>Nossos resgatados</SectionIntroEyebrow>
                <SectionIntroTitle>Gatos esperando um encontro que vire casa</SectionIntroTitle>
                <SectionIntroDescription>
                  Conheça alguns dos gatos acolhidos pelo projeto. Cada perfil mostra personalidade,
                  necessidades e o melhor caminho para adotar com responsabilidade ou virar
                  padrinho.
                </SectionIntroDescription>
              </SectionIntro>
            </Reveal>

            <Reveal delay={0.1} distance={40}>
              <div className="grid gap-4 rounded-4xl border border-white/70 bg-white/70 p-6 shadow-[0_28px_80px_-42px_rgba(61,38,17,0.28)] backdrop-blur">
                <p className="font-label text-[0.66rem] font-bold uppercase tracking-[0.3em] text-secondary">
                  Disponíveis hoje
                </p>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-headline text-5xl font-extrabold leading-none text-primary">
                      {String(totalCats).padStart(2, "0")}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-on-surface-variant">
                      Perfis prontos para receber visitas, conversas e futuras famílias.
                    </p>
                  </div>
                  <PawPrint className="h-10 w-10 text-primary-container/50" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="space-y-16 default-shell">
            {adoptionCategories.map((category) => {
              const cats = catsForAdoption.filter((cat) => cat.categorySlug === category.slug);

              return (
                <Reveal key={category.slug} distance={26}>
                  <section id={category.slug} className="space-y-8">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                      <div className="max-w-2xl">
                        <p className="font-label text-[0.66rem] font-bold uppercase tracking-[0.3em] text-secondary">
                          {category.title}
                        </p>
                        <h2 className="mt-3 font-headline text-3xl font-extrabold text-primary sm:text-4xl">
                          {category.description}
                        </h2>
                      </div>
                      <p className="max-w-md text-sm leading-7 text-on-surface-variant">
                        Clique em um perfil para ver a história completa, o tipo de lar ideal e os
                        caminhos para adoção ou apadrinhamento.
                      </p>
                    </div>

                    <RevealStagger
                      className="grid gap-6 lg:grid-cols-2"
                      amount={0.1}
                      staggerChildren={0.12}
                    >
                      {cats.map((cat) => (
                        <RevealItem key={cat.slug} distance={34} className="h-full">
                          <Link
                            href={`/gatos/${cat.slug}`}
                            className="group grid h-full overflow-hidden rounded-4xl border border-outline-variant/40 bg-white shadow-[0_28px_70px_-40px_rgba(61,38,17,0.24)] transition-transform duration-500 hover:-translate-y-1.5"
                          >
                            <div className="grid h-full md:grid-cols-[0.92fr_1fr]">
                              <div className="relative min-h-88 overflow-hidden">
                                <Image
                                  src={cat.image}
                                  alt={cat.imageAlt}
                                  fill
                                  sizes="(min-width: 1024px) 30vw, 100vw"
                                  className="object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div
                                  className={cn(
                                    "absolute inset-0 bg-linear-to-t opacity-90 transition-opacity duration-500 group-hover:opacity-100",
                                    cat.accentClassName,
                                  )}
                                />
                                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                  <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-white/80">
                                    {cat.age}
                                  </p>
                                  <h3 className="mt-2 font-headline text-3xl font-extrabold">
                                    {cat.name}
                                  </h3>
                                </div>
                              </div>

                              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                                <div>
                                  <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary-container transition-transform duration-500 group-hover:translate-x-1">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {cat.location}
                                  </div>
                                  <p className="mt-5 text-base leading-8 text-on-surface-variant">
                                    {cat.summary}
                                  </p>
                                  <ul className="mt-6 space-y-3 text-sm leading-7 text-on-surface-variant">
                                    {cat.personality.slice(0, 2).map((item) => (
                                      <li key={item} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <span className="mt-8 inline-flex items-center gap-3 font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary">
                                  Abrir perfil
                                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                </span>
                              </div>
                            </div>
                          </Link>
                        </RevealItem>
                      ))}
                    </RevealStagger>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export function profileMailTo(subject: string) {
  return `mailto:contato@gatolinos.org?subject=${encodeURIComponent(subject)}`;
}
