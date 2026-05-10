import Image from "next/image";
import type { ComponentProps } from "react";

import { Reveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

type BrandLogoProps = ComponentProps<"div"> & {
  priority?: boolean;
  scaleClassName?: string;
};

export function BrandLogo({
  className,
  priority = false,
  scaleClassName = "scale-[1.18] sm:scale-[1.22]",
}: BrandLogoProps) {
  return (
    <Reveal className={cn("relative overflow-hidden", className)}>
      <Image
        src="/gatolinos/logo.png"
        alt="Logotipo do Projeto Gatolinos"
        fill
        sizes="(min-width: 1024px) 192px, 152px"
        className={cn("object-contain object-center", scaleClassName)}
        priority={priority}
      />
    </Reveal>
  );
}
