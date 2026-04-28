"use client";

import { useEffect, useState } from "react";

type CopyPixButtonProps = {
  pixKey: string;
};

export function CopyPixButton({ pixKey }: CopyPixButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);

    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex w-full max-w-xs items-center justify-center rounded-2xl bg-primary px-6 py-4 text-center font-label text-xs font-bold uppercase tracking-[0.28em] text-white transition-transform duration-200 hover:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {copied ? "Chave copiada" : "Copiar chave PIX"}
    </button>
  );
}
