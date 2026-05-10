import { ArrowLeft, HeartHandshake, Home } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { catsForAdoption, getCatBySlug, getCategoryBySlug } from "@/content/gatolinos-content";
import { Reveal, RevealItem, RevealStagger } from "@/lib/motion";
import { absoluteUrl, buildPageMetadata, siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";

import { profileMailTo } from "../page";

type CatProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return catsForAdoption.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CatProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCatBySlug(slug);

  if (!cat) {
    return {
      title: "Gato não encontrado | Projeto Gatolinos Londrina",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildPageMetadata({
    title: cat.name,
    description: `${cat.summary} Conheça a história, personalidade e cuidados para adoção responsável ou apadrinhamento em Londrina.`,
    path: `/gatos/${cat.slug}`,
    image: cat.image,
    type: "article",
  });
}

export default async function CatSlugPage({ params }: CatProfilePageProps) {
  const { slug } = await params;
  const cat = getCatBySlug(slug);

  if (!cat) {
    notFound();
  }
  const category = getCategoryBySlug(cat.categorySlug);
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${cat.name} para adoção`,
    url: absoluteUrl(`/gatos/${cat.slug}`),
    description: cat.summary,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "AnimalShelter",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(cat.image),
      caption: cat.imageAlt,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
        <div className="animate-float absolute inset-x-0 top-0 h-136 bg-[radial-gradient(circle_at_top_left,rgba(255,220,193,0.75),transparent_42%),radial-gradient(circle_at_top_right,rgba(201,232,240,0.65),transparent_42%)]" />
        <div className="relative default-shell">
          <Reveal distance={16}>
            <Link
              href="/gatos"
              className="inline-flex items-center gap-2 font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary-container transition-colors duration-200 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para a galeria
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.95fr)] lg:items-center">
            <Reveal distance={42}>
              <div className="relative min-h-120 overflow-hidden rounded-[2.5rem] bg-surface-container-low shadow-[0_48px_100px_-52px_rgba(61,38,17,0.34)]">
                <Image
                  src={cat.image}
                  alt={cat.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div
                  className={cn("absolute inset-0 bg-linear-to-t opacity-90", cat.accentClassName)}
                />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
                  <p className="font-label text-[0.66rem] font-bold uppercase tracking-[0.3em] text-white/78">
                    {category?.title ?? "Perfil de adoção"}
                  </p>
                  <h1 className="mt-3 font-headline text-4xl font-extrabold sm:text-5xl">
                    {cat.name}
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-8 text-white/84 sm:text-lg">
                    {cat.summary}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} distance={36}>
              <div className="space-y-8">
                <RevealStagger
                  className="grid gap-3 sm:grid-cols-3"
                  amount={0.18}
                  staggerChildren={0.1}
                >
                  <RevealItem distance={22}>
                    <div className="rounded-3xl border border-outline-variant/40 bg-white/82 p-5 backdrop-blur">
                      <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline">
                        Idade
                      </p>
                      <p className="mt-3 font-headline text-2xl font-extrabold text-primary">
                        {cat.age}
                      </p>
                    </div>
                  </RevealItem>
                  <RevealItem distance={22}>
                    <div className="rounded-3xl border border-outline-variant/40 bg-white/82 p-5 backdrop-blur">
                      <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline">
                        Local
                      </p>
                      <p className="mt-3 font-headline text-2xl font-extrabold text-primary">
                        {cat.location}
                      </p>
                    </div>
                  </RevealItem>
                  <RevealItem distance={22}>
                    <div className="rounded-3xl border border-outline-variant/40 bg-white/82 p-5 backdrop-blur">
                      <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline">
                        Vínculo
                      </p>
                      <p className="mt-3 font-headline text-2xl font-extrabold text-primary">
                        {cat.categorySlug === "duplas-inseparaveis" ? "Dupla" : "Individual"}
                      </p>
                    </div>
                  </RevealItem>
                </RevealStagger>

                <div>
                  <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-secondary">
                    História
                  </p>
                  <p className="mt-4 text-lg leading-8 text-on-surface-variant">
                    {cat.rescueStory}
                  </p>
                </div>

                <RevealStagger
                  className="flex flex-col gap-4 sm:flex-row"
                  amount={0.2}
                  staggerChildren={0.08}
                >
                  <RevealItem distance={20}>
                    <a
                      href={profileMailTo(`Quero adotar ${cat.name}`)}
                      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 font-label text-xs font-bold uppercase tracking-[0.28em] text-white transition-transform duration-200 hover:scale-[0.98] hover:bg-primary-container"
                    >
                      <Home className="h-4 w-4" />
                      Quero adotar
                    </a>
                  </RevealItem>
                  <RevealItem distance={20}>
                    <a
                      href={profileMailTo(`Quero ser padrinho de ${cat.name}`)}
                      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-secondary px-6 py-4 font-label text-xs font-bold uppercase tracking-[0.28em] text-white transition-colors duration-200 hover:bg-primary-container"
                    >
                      <HeartHandshake className="h-4 w-4" />
                      Quero ser padrinho
                    </a>
                  </RevealItem>
                </RevealStagger>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="default-shell grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.9fr)]">
          <Reveal distance={30}>
            <div className="rounded-4xl bg-white p-8 shadow-[0_28px_80px_-48px_rgba(61,38,17,0.24)]">
              <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-secondary">
                Jeitinho dele
              </p>
              <ul className="mt-6 space-y-4 text-base leading-8 text-on-surface-variant">
                {cat.personality.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <RevealStagger className="grid gap-8" amount={0.12} staggerChildren={0.12}>
            <RevealItem distance={28}>
              <div className="rounded-4xl bg-surface-container p-8">
                <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary-container">
                  O que ele precisa
                </p>
                <ul className="mt-6 space-y-4 text-base leading-8 text-on-surface-variant">
                  {cat.needs.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>

            <RevealItem distance={28}>
              <div className="rounded-4xl border border-outline-variant/40 bg-white p-8">
                <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-outline">
                  Detalhes rápidos
                </p>
                <RevealStagger
                  className="mt-6 grid gap-4 sm:grid-cols-3"
                  amount={0.25}
                  staggerChildren={0.08}
                >
                  {cat.facts.map((fact) => (
                    <RevealItem key={fact.label} distance={18}>
                      <div className="rounded-3xl bg-surface-container-low p-5">
                        <p className="font-label text-[0.6rem] font-bold uppercase tracking-[0.24em] text-outline">
                          {fact.label}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-primary">{fact.value}</p>
                      </div>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
