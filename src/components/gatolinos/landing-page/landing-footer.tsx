import Link from "next/link";
import type { ComponentProps } from "react";
import { navigationItems } from "@/content/gatolinos-content";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./brand-logo";
import { shellClassName } from "./shell";

export function LandingFooter({
  className,
  ...props
}: ComponentProps<"footer">) {
  return (
    <footer
      data-slot="landing-page-footer"
      className={cn(
        "border-t border-outline-variant/30 bg-surface-container-low py-14",
        className,
      )}
      {...props}
    >
      <div className={`${shellClassName} flex flex-col gap-12`}>
        <div className="flex flex-col gap-2 lg:items-center lg:justify-between">
          <div className="flex items-center">
            <BrandLogo className="h-16 w-[11rem]" />
          </div>
          <p className="mt-4 text-sm leading-7 text-on-surface-variant mx-auto">
            Um cantinho sustentado por doações, trabalho voluntário e muito amor
            pelos felinos de Londrina.
          </p>
        </div>

        <nav className="flex items-center justify-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label w-fit text-[0.6rem] font-bold uppercase tracking-[0.22em] text-on-surface-variant transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-outline-variant/40 pt-8 font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline sm:flex-row sm:items-center sm:justify-between">
          <p>Projeto Gatolinos</p>
          <p>Londrina, Paraná</p>
        </div>
      </div>
    </footer>
  );
}
