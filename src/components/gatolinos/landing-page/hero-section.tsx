import { MedicalMaskIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { AppIcon } from "@/components/gatolinos/app-icon";
import { PrimaryLink } from "./primary-link";
import { SecondaryLink } from "./secondary-link";
import { shellClassName } from "./shell";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-surface-warm py-12 sm:py-16 lg:py-20"
    >
      <div
        className={`${shellClassName} grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-16`}
      >
        <div className="order-2 lg:order-1">
          <p className="inline-flex rounded-full bg-secondary-container px-4 py-2 font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-on-secondary-container">
            Ronronados em esperança
          </p>
          <h1 className="mt-7 max-w-4xl text-balance font-headline text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] text-primary sm:text-6xl lg:text-7xl">
            Bem-vindo ao Projeto Gatolinos Londrina
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-on-surface-variant sm:text-xl">
            Este é o cantinho onde transformamos ronronados em esperança.
            Explore, apaixone-se e ajude-nos a mudar vidas, segurando nossa
            patinha com doações, apadrinhamento e carinho.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryLink href="#contribuir">Segure nossa patinha</PrimaryLink>
            <SecondaryLink href="#abordagem">Conheça o projeto</SecondaryLink>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2.5rem] bg-surface-container-low p-5 shadow-[0_48px_80px_-40px_rgba(61,38,17,0.28)] sm:p-8 lg:mr-0 lg:max-w-none">
            <Image
              src="/gatolinos/hero-art.png"
              alt="Composição artística minimalista com gatos em linhas delicadas"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 88vw"
              className="object-cover p-5 sm:p-8"
            />
          </div>
          <div className="relative -mt-10 ml-4 max-w-[15rem] rounded-[1.75rem] bg-white/90 p-5 shadow-[0_24px_60px_-28px_rgba(61,38,17,0.32)] ring-1 ring-outline-variant/30 backdrop-blur xl:-mt-16">
            <div className="flex items-center gap-4">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary-container">
                <AppIcon
                  icon={MedicalMaskIcon}
                  size={30}
                  className="text-on-secondary-container"
                />
              </div>
              <div>
                <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline">
                  Movimento que acolhe
                </p>
                <p className="font-headline text-3xl font-bold text-primary">
                  Amor em ação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
