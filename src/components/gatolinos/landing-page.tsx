import {
  AlertTriangle,
  ArrowRight01Icon,
  FavouriteIcon,
  HeartPulse,
  Mail01Icon,
  MedicalMaskIcon,
  QrCodeIcon,
  ReloadIcon,
  Share01Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AppIcon } from "@/components/gatolinos/app-icon";
import { CopyPixButton } from "@/components/gatolinos/copy-pix-button";
import {
  adoptionCategories,
  donationOptions,
  navigationItems,
  socialLinks,
  transparencyMetrics,
  valuePillars,
} from "@/content/gatolinos-content";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

type PillarCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  tintClassName: string;
};

type AdoptionCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overlayClassName: string;
};

type MetricCardProps = {
  label: string;
  value: string;
  detail?: string;
  progress: number;
  accentClassName: string;
  icon: ReactNode;
};

type DonationCardProps = {
  title: string;
  description: string;
  theme: "primary" | "secondary";
  icon: ReactNode;
  content: ReactNode;
  action: ReactNode;
};

const shellClassName = "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8";

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionIntroProps) {
  const alignmentClassName =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";
  const titleColorClassName = invert ? "text-white" : "text-primary";
  const descriptionColorClassName = invert
    ? "text-[color:rgba(166,239,243,0.82)]"
    : "text-on-surface-variant";
  const eyebrowColorClassName = invert
    ? "text-primary-fixed"
    : "text-secondary";

  return (
    <div className={alignmentClassName}>
      {eyebrow ? (
        <p
          className={`mb-4 font-label text-[0.68rem] font-bold uppercase tracking-[0.32em] ${eyebrowColorClassName}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance font-headline text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl ${titleColorClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-pretty text-base leading-8 sm:text-lg ${descriptionColorClassName}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BrandLogo({
  className = "",
  priority = false,
  scaleClassName = "scale-[1.18] sm:scale-[1.22]",
}: {
  className?: string;
  priority?: boolean;
  scaleClassName?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src="/gatolinos/logo.png"
        alt="Logotipo do Projeto Gatolinos"
        fill
        sizes="(min-width: 1024px) 192px, 152px"
        className={`object-contain object-center ${scaleClassName}`}
        priority={priority}
      />
    </div>
  );
}

function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-4 font-label text-xs font-bold uppercase tracking-[0.28em] text-white transition-transform duration-200 hover:scale-[0.98] ${className}`}
    >
      {children}
    </Link>
  );
}

function SecondaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl bg-surface-container-high px-6 py-4 font-label text-xs font-bold uppercase tracking-[0.28em] text-primary transition-colors duration-200 hover:bg-surface-container-highest ${className}`}
    >
      {children}
    </Link>
  );
}

function PillarCard({
  icon,
  title,
  description,
  tintClassName,
}: PillarCardProps) {
  return (
    <article className="group rounded-[2rem] bg-white p-8 shadow-[0_32px_64px_-24px_rgba(0,70,74,0.15)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 sm:p-10">
      <div
        className={`mb-7 inline-flex size-16 items-center justify-center rounded-2xl ${tintClassName}`}
      >
        {icon}
      </div>
      <h3 className="font-headline text-2xl font-bold text-primary">{title}</h3>
      <p className="mt-4 text-base leading-8 text-on-surface-variant">
        {description}
      </p>
    </article>
  );
}

function AdoptionCard({
  title,
  description,
  image,
  imageAlt,
  overlayClassName,
}: AdoptionCardProps) {
  return (
    <Link
      href="#contribuir"
      className="group relative block overflow-hidden rounded-[2.25rem] bg-surface-container-high"
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
        <h3 className="font-headline text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 max-w-xs text-sm leading-7 text-white/80">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-3 font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white">
          Ver perfis
          <AppIcon
            icon={ArrowRight01Icon}
            size={16}
            className="text-white"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

function MetricCard({
  label,
  value,
  detail,
  progress,
  accentClassName,
  icon,
}: MetricCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary-fixed">
          {label}
        </p>
        {icon}
      </div>
      <p className="font-headline text-4xl font-bold text-white">{value}</p>
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${accentClassName}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {detail ? (
        <p className="mt-4 text-sm leading-7 text-[color:rgba(166,239,243,0.7)]">
          {detail}
        </p>
      ) : null}
    </article>
  );
}

function DonationCard({
  title,
  description,
  theme,
  icon,
  content,
  action,
}: DonationCardProps) {
  const baseClassName =
    theme === "primary"
      ? "bg-surface-container-low text-primary ring-black/5"
      : "bg-[color:rgba(255,220,193,0.45)] text-secondary ring-[color:rgba(133,83,36,0.1)]";
  const bodyColorClassName =
    theme === "primary"
      ? "text-on-surface-variant"
      : "text-on-secondary-container";

  return (
    <article
      className={`rounded-[2.5rem] p-8 text-center ring-1 sm:p-12 ${baseClassName}`}
    >
      <div className="mx-auto mb-8 inline-flex size-20 items-center justify-center rounded-[1.75rem] bg-white/70">
        {icon}
      </div>
      <h3 className="font-headline text-3xl font-bold">{title}</h3>
      <p
        className={`mx-auto mt-4 max-w-md text-lg leading-8 ${bodyColorClassName}`}
      >
        {description}
      </p>
      <div className="mt-10">{content}</div>
      <div className="mt-8">{action}</div>
    </article>
  );
}

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-2xl">
      <div
        className={`${shellClassName} flex items-center justify-between gap-4`}
      >
        <Link href="#top" className="flex items-center   w-fit h-fit">
          <BrandLogo className="h-14 w-38 sm:h-20" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[color:rgba(0,70,74,0.72)] transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <PrimaryLink href="#contribuir" className="px-4 py-3 sm:px-6">
          Doe agora
        </PrimaryLink>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-surface py-12 sm:py-16 lg:py-20"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-[radial-gradient(circle_at_top_left,rgba(166,239,243,0.34),transparent_62%)]" />
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
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2.5rem] bg-surface-container-low p-5 shadow-[0_48px_80px_-40px_rgba(0,70,74,0.35)] sm:p-8 lg:mr-0 lg:max-w-none">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(166,239,243,0.35),transparent_52%,rgba(254,188,131,0.22))]" />
            <Image
              src="/gatolinos/hero-art.png"
              alt="Composição artística minimalista com gatos em linhas delicadas"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 88vw"
              className="object-cover p-5 sm:p-8"
            />
          </div>
          <div className="relative -mt-10 ml-4 max-w-[15rem] rounded-[1.75rem] bg-white/85 p-5 shadow-[0_24px_60px_-28px_rgba(0,70,74,0.45)] ring-1 ring-black/5 backdrop-blur xl:-mt-16">
            <div className="flex items-center gap-4">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary-fixed/70">
                <AppIcon
                  icon={MedicalMaskIcon}
                  size={30}
                  className="text-primary"
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

export function ValuePillarsSection() {
  return (
    <section
      id="abordagem"
      className="bg-surface-container-low py-20 sm:py-24 lg:py-32"
    >
      <div className={shellClassName}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            title="Um projeto movido por amor e constância"
            description="O apadrinhamento mensal e as doações mantêm a rotina dos gatos acolhidos com alimentação, higiene, conforto e cuidado contínuo."
          />
          <div className="hidden h-px flex-1 bg-outline-variant/60 lg:block" />
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {valuePillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              tintClassName={pillar.tintClassName}
              icon={
                pillar.icon === "medical" ? (
                  <AppIcon
                    icon={MedicalMaskIcon}
                    size={32}
                    className="text-primary"
                  />
                ) : pillar.icon === "social" ? (
                  <AppIcon
                    icon={HeartPulse}
                    size={32}
                    className="text-secondary"
                  />
                ) : (
                  <AppIcon
                    icon={ReloadIcon}
                    size={32}
                    className="text-tertiary"
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

export function AdoptionGallery() {
  return (
    <section id="adocao" className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className={shellClassName}>
        <SectionIntro
          eyebrow="Explore e apaixone-se"
          title="Gatos esperando por carinho e encontro"
          align="center"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {adoptionCategories.map((category) => (
            <AdoptionCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TransparencySection() {
  return (
    <section id="transparencia" className="bg-primary py-20 sm:py-24 lg:py-32">
      <div className={shellClassName}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionIntro
            title="Transparência que aproxima"
            description="O Projeto Gatolinos sobrevive exclusivamente de doações e trabalho voluntário. Mostrar para onde vai cada ajuda também faz parte do cuidado."
            invert
          />
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

export function DonationSection() {
  const pixOption = donationOptions[0];
  const recurringOption = donationOptions[1];

  return (
    <section id="contribuir" className="bg-surface py-20 sm:py-24 lg:py-32">
      <div className={shellClassName}>
        <SectionIntro
          title="Pequenos gestos, grandes ronronados"
          description="Ao ajudar o Projeto Gatolinos Londrina, você garante ração de qualidade, sachês, cuidados veterinários, areia sanitária e mimos que trazem conforto."
          align="center"
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-2">
          <DonationCard
            title={pixOption.title}
            description={pixOption.description}
            theme="primary"
            icon={
              <AppIcon icon={QrCodeIcon} size={32} className="text-primary" />
            }
            content={
              <div className="mx-auto max-w-xs rounded-[1.5rem] bg-white p-6 text-center shadow-[0_20px_50px_-30px_rgba(0,70,74,0.4)] ring-1 ring-black/5">
                <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline">
                  Chave PIX (Celular)
                </p>
                <p className="mt-3 break-all font-headline text-2xl font-bold text-primary">
                  {pixOption.pixKey}
                </p>
              </div>
            }
            action={<CopyPixButton pixKey={pixOption.pixKey} />}
          />

          <DonationCard
            title={recurringOption.title}
            description={recurringOption.description}
            theme="secondary"
            icon={
              <AppIcon
                icon={FavouriteIcon}
                size={32}
                className="text-secondary"
              />
            }
            content={
              <div className="mx-auto flex max-w-xs flex-col gap-4">
                {recurringOption.tiers.map((tier) => (
                  <div
                    key={tier.label}
                    className={`rounded-2xl px-6 py-4 text-base font-bold ${
                      tier.emphasized
                        ? "bg-secondary text-white"
                        : "bg-white/70 text-secondary ring-1 ring-[color:rgba(133,83,36,0.14)]"
                    }`}
                  >
                    {tier.label}
                  </div>
                ))}
              </div>
            }
            action={
              <PrimaryLink
                href="mailto:contato@gatolinos.org?subject=Quero%20ser%20padrinho"
                className="w-full max-w-xs bg-secondary"
              >
                Quero ser padrinho
              </PrimaryLink>
            }
          />
        </div>
      </div>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className="border-t border-black/5 bg-slate-50 py-14">
      <div className={`${shellClassName} flex flex-col gap-12`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center">
              <BrandLogo className="h-16 w-[11rem]" />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Um cantinho sustentado por doações, trabalho voluntário e muito
              amor pelos felinos de Londrina.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex size-11 items-center justify-center rounded-full bg-slate-200 text-primary transition-colors duration-200 hover:bg-slate-300"
                aria-label={link.label}
              >
                <AppIcon
                  icon={link.icon === "share" ? Share01Icon : Mail01Icon}
                  size={18}
                  className="text-primary"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>

        <nav className="flex space-x-6 justify-center items-center">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label w-fit text-[0.6rem] font-bold uppercase tracking-[0.22em] text-slate-600 transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-8 font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          {/* <p>CNPJ: 45.231.990/0001-08</p> */}
          <p>Projeto Gatolinos</p>
          <p>Londrina, Paraná</p>
        </div>
      </div>
    </footer>
  );
}
