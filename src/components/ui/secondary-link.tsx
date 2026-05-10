import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function SecondaryLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-2xl bg-secondary px-6 py-4 font-label text-xs font-bold uppercase tracking-[0.28em] text-white transition-colors duration-200 hover:bg-primary-container",
        className,
      )}
      {...props}
    />
  );
}
