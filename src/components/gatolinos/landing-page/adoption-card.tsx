import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import { AppIcon } from "@/components/gatolinos/app-icon";

type AdoptionCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overlayClassName: string;
};

export function AdoptionCard({
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
