import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { shellClassName } from "../shell";

export function DonationSectionRoot({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      id="contribuir"
      data-slot="donation-section"
      className={cn("bg-surface-warm py-20 sm:py-24 lg:py-32", className)}
      {...props}
    >
      <div className={shellClassName}>{props.children}</div>
    </section>
  );
}
