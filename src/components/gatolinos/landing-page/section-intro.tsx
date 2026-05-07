import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SectionIntroRootProps = ComponentProps<"div"> & {
  align?: "left" | "center";
  invert?: boolean;
};

function SectionIntroRoot({
  align = "left",
  invert = false,
  className,
  ...props
}: SectionIntroRootProps) {
  const alignmentClassName =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div
      data-slot="section-intro"
      data-align={align}
      data-invert={invert ? "true" : "false"}
      className={cn(alignmentClassName, className)}
      {...props}
    />
  );
}

function SectionIntroEyebrow({
  className,
  invert = false,
  ...props
}: ComponentProps<"p"> & { invert?: boolean }) {
  return (
    <p
      data-slot="section-intro-eyebrow"
      className={cn(
        "mb-4 font-label text-[0.68rem] font-bold uppercase tracking-[0.32em]",
        invert ? "text-primary-fixed" : "text-secondary",
        className,
      )}
      {...props}
    />
  );
}

function SectionIntroTitle({
  className,
  invert = false,
  ...props
}: ComponentProps<"h2"> & { invert?: boolean }) {
  return (
    <h2
      data-slot="section-intro-title"
      className={cn(
        "text-balance font-headline text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl",
        invert ? "text-white" : "text-primary",
        className,
      )}
      {...props}
    />
  );
}

function SectionIntroDescription({
  className,
  invert = false,
  ...props
}: ComponentProps<"p"> & { invert?: boolean }) {
  return (
    <p
      data-slot="section-intro-description"
      className={cn(
        "mt-5 text-pretty text-base leading-8 sm:text-lg",
        invert
          ? "text-[color:rgba(201,232,240,0.82)]"
          : "text-on-surface-variant",
        className,
      )}
      {...props}
    />
  );
}

export const SectionIntro = Object.assign(SectionIntroRoot, {
  Eyebrow: SectionIntroEyebrow,
  Title: SectionIntroTitle,
  Description: SectionIntroDescription,
});
