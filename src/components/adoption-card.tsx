import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

type AdoptionCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overlayClassName: string;
};

export function AdoptionCard({
  slug,
  title,
  description,
  image,
  imageAlt,
  overlayClassName,
}: AdoptionCardProps) {
  return (
    <Link
      href={`/gatos#${slug}`}
      className="group relative block overflow-hidden rounded-[2.25rem] bg-surface-container-high transition-transform duration-500 hover:-translate-y-1.5"
    >
      <div className="relative aspect-4/5">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale transition duration-700 group-hover:scale-108 group-hover:grayscale-0"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-90 ${overlayClassName}`}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-1 p-8 transition-transform duration-500 group-hover:translate-y-0 sm:p-10">
        <h3 className="font-headline text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 max-w-xs text-sm leading-7 text-white/80">{description}</p>
        <span className="mt-6 inline-flex items-center gap-3 font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white">
          Ver perfis
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={16}
            className="text-white transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
