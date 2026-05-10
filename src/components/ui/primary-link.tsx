import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function PrimaryLink({ className, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-2xl bg-primary px-6 py-4 font-label text-xs font-bold uppercase tracking-[0.28em] text-white transition-transform duration-200 hover:scale-[0.98] hover:bg-primary-container",
        className,
      )}
      {...props}
    />
  );
}
