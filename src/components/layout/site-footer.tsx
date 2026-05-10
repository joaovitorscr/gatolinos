import Link from "next/link";
import type { ComponentProps } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { siteNavigationItems } from "@/content/gatolinos-content";
import { Reveal, RevealItem, RevealStagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SiteFooter({ className, ...props }: ComponentProps<"footer">) {
  return (
    <footer
      data-slot="site-footer"
      className={cn("border-t border-outline-variant/30 bg-surface-container-low py-12", className)}
      {...props}
    >
      <div className="default-shell flex flex-col gap-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center">
            <BrandLogo className="h-16 w-44" />
          </div>
          <p className="max-w-2xl text-sm leading-7 text-on-surface-variant">
            Um cantinho sustentado por doações, trabalho voluntário e muito amor pelos felinos de
            Londrina.
          </p>
        </Reveal>

        <RevealStagger className="flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {siteNavigationItems.map((item) => (
              <li key={item.href} className="list-none shrink-0">
                <RevealItem distance={16}>
                  <Link
                    href={item.href}
                    className="font-label block text-[0.6rem] font-bold uppercase tracking-[0.22em] text-on-surface-variant transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </RevealItem>
              </li>
            ))}
          </ul>
        </RevealStagger>

        <div className="border-t border-outline-variant/40 pt-8">
          <Reveal
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-3 text-center font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline sm:flex-row sm:items-center sm:justify-between sm:text-left"
          >
            <p>Projeto Gatolinos</p>
            <p>Londrina, Paraná</p>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
