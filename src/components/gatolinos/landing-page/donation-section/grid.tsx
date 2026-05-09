import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { RevealStagger } from "../motion";

export function DonationSectionGrid({
  className,
  ...props
}: ComponentProps<typeof RevealStagger>) {
  return (
    <RevealStagger
      data-slot="donation-section-grid"
      className={cn("mt-14 grid gap-8 xl:grid-cols-2", className)}
      {...props}
    />
  );
}
