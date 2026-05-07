import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function LandingPageRoot({
  className,
  ...props
}: ComponentProps<"div">) {
  return <div data-slot="landing-page" className={cn(className)} {...props} />;
}
