import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function LandingPageMain({
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      data-slot="landing-page-main"
      className={cn("overflow-x-hidden", className)}
      {...props}
    />
  );
}
