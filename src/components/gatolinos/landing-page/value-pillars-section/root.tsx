import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { shellClassName } from "../shell";

export function ValuePillarsSectionRoot({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      id="abordagem"
      data-slot="value-pillars-section"
      className={cn("bg-white py-20 sm:py-24 lg:py-32", className)}
      {...props}
    >
      <div className={shellClassName}>{props.children}</div>
    </section>
  );
}
