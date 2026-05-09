import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { RevealStagger } from "../motion";

export function ValuePillarsSectionGrid({
  className,
  ...props
}: ComponentProps<typeof RevealStagger>) {
  return (
    <RevealStagger
      data-slot="value-pillars-section-grid"
      className={cn(
        "mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
      {...props}
    />
  );
}
