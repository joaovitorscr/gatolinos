import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type DonationCardTheme = "primary" | "secondary";

type DonationCardProps = ComponentProps<"article"> & {
  theme: "primary" | "secondary";
};

function DonationCard({ theme, className, ...props }: DonationCardProps) {
  const baseClassName =
    theme === "primary"
      ? "bg-white text-primary ring-outline-variant/30"
      : "bg-white text-secondary ring-outline-variant/30";

  const bodyColorClassName =
    theme === "primary" ? "text-on-surface-variant" : "text-on-secondary-container";

  return (
    <article
      data-slot="donation-card"
      data-theme={theme}
      className={cn(
        "flex h-[600px] flex-col rounded-[2.5rem] p-8 text-center ring-1 sm:p-12",
        baseClassName,
        bodyColorClassName,
        className,
      )}
      {...props}
    />
  );
}

function DonationCardIcon({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="donation-card-icon"
      className={cn(
        "mx-auto mb-8 inline-flex size-20 items-center justify-center rounded-[1.75rem] bg-white/70",
        className,
      )}
      {...props}
    />
  );
}

function DonationCardTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot="donation-card-title"
      className={cn("font-headline text-3xl font-bold", className)}
      {...props}
    />
  );
}

function DonationCardDescription({
  className,
  theme = "primary",
  ...props
}: ComponentProps<"p"> & { theme?: DonationCardTheme }) {
  return (
    <p
      data-slot="donation-card-description"
      className={cn(
        "mx-auto mt-4 max-w-md text-lg leading-8",
        theme === "primary" ? "text-on-surface-variant" : "text-on-secondary-container",
        className,
      )}
      {...props}
    />
  );
}

function DonationCardContent({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="donation-card-content" className={cn("mt-10", className)} {...props} />;
}

function DonationCardAction({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="donation-card-action" className={cn("mt-auto", className)} {...props} />;
}

export {
  DonationCard,
  DonationCardIcon,
  DonationCardTitle,
  DonationCardDescription,
  DonationCardContent,
  DonationCardAction,
};
