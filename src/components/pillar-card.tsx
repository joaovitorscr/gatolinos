import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function PillarCard({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      data-slot="pillar-card"
      className={cn(
        "group rounded-4xl bg-white p-8 shadow-[0_32px_64px_-24px_rgba(61,38,17,0.12)] ring-1 ring-outline-variant/30 transition-transform duration-300 hover:-translate-y-1 sm:p-10",
        className,
      )}
      {...props}
    />
  );
}

function PillarCardIcon({
  className,
  tintClassName,
  ...props
}: ComponentProps<"div"> & { tintClassName?: string }) {
  return (
    <div
      data-slot="pillar-card-icon"
      className={cn(
        "mb-7 inline-flex size-16 items-center justify-center rounded-2xl",
        tintClassName,
        className,
      )}
      {...props}
    />
  );
}

function PillarCardTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="pillar-card-title"
      className={cn("font-headline text-2xl font-bold text-primary", className)}
      {...props}
    />
  );
}

function PillarCardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="pillar-card-description"
      className={cn("mt-4 text-base leading-8 text-on-surface-variant", className)}
      {...props}
    />
  );
}

export { PillarCard, PillarCardIcon, PillarCardTitle, PillarCardDescription };
