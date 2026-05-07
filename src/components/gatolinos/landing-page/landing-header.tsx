"use client";

import Link from "next/link";
import { type ComponentProps, useEffect, useState } from "react";
import { navigationItems } from "@/content/gatolinos-content";
import { cn } from "@/lib/utils";
import { BrandLogo } from "./brand-logo";
import { PrimaryLink } from "./primary-link";
import { shellClassName } from "./shell";

export function LandingHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  const [activeHash, setActiveHash] = useState("#top");

  useEffect(() => {
    function syncActiveHash() {
      setActiveHash(window.location.hash || "#top");
    }

    syncActiveHash();
    window.addEventListener("hashchange", syncActiveHash);

    return () => window.removeEventListener("hashchange", syncActiveHash);
  }, []);

  return (
    <header
      data-slot="landing-page-header"
      className={cn(
        "sticky top-0 z-50 border-b border-outline-variant/30 bg-white/80 backdrop-blur-2xl",
        className,
      )}
      {...props}
    >
      <div
        className={`${shellClassName} flex items-center justify-between gap-4`}
      >
        <Link href="#top" className="flex h-fit w-fit items-center">
          <BrandLogo className="h-14 w-38 sm:h-20" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <div key={item.href} className="relative">
              <Link
                href={item.href}
                aria-current={activeHash === item.href ? "page" : undefined}
                onClick={() => setActiveHash(item.href)}
                className={cn(
                  "font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] transition-colors duration-200",
                  activeHash === item.href
                    ? "text-primary"
                    : "text-primary-container/72 hover:text-primary",
                )}
              >
                {item.label}
              </Link>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -bottom-2 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary transition-all duration-200",
                  activeHash === item.href
                    ? "opacity-100"
                    : "scale-75 opacity-0",
                )}
              />
            </div>
          ))}
        </nav>

        <PrimaryLink href="#contribuir" className="px-4 py-3 sm:px-6">
          Doe agora
        </PrimaryLink>
      </div>
    </header>
  );
}
