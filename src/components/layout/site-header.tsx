"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { PrimaryLink } from "@/components/ui/primary-link";
import { getNavigationItems } from "@/content/gatolinos-content";
import { Reveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SiteHeader({ className, ...props }: ComponentProps<"header">) {
  const pathname = usePathname();
  const navigationItems = getNavigationItems();
  const [activeHref, setActiveHref] = useState(pathname);

  useEffect(() => {
    setActiveHref(pathname);
  }, [pathname]);

  useEffect(() => {
    function syncActiveHref() {
      const hash = window.location.hash;
      setActiveHref(`${window.location.pathname}${hash}`);
    }

    syncActiveHref();
    window.addEventListener("hashchange", syncActiveHref);

    return () => window.removeEventListener("hashchange", syncActiveHref);
  }, []);

  return (
    <header
      data-slot="site-header"
      className={cn(
        "sticky top-0 z-50 border-b border-outline-variant/30 bg-white/80 backdrop-blur-2xl",
        className,
      )}
      {...props}
    >
      <div className="default-shell flex items-center justify-between gap-4 py-3">
        <Link href="/#top" className="flex h-fit w-fit items-center">
          <BrandLogo className="h-14 w-38 sm:h-20" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <motion.div
              key={item.href}
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link
                href={item.href}
                aria-current={activeHref === item.href ? "page" : undefined}
                onClick={() => setActiveHref(item.href)}
                className={cn(
                  "font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] transition-colors duration-200",
                  activeHref === item.href
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
                  activeHref === item.href ? "opacity-100" : "scale-75 opacity-0",
                )}
              />
            </motion.div>
          ))}
        </nav>

        <Reveal>
          <PrimaryLink href="/#contribuir" className="px-4 py-3 sm:px-6">
            Doe agora
          </PrimaryLink>
        </Reveal>
      </div>
    </header>
  );
}
