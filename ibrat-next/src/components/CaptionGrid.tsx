"use client";

import { useState } from "react";

export default function CaptionGrid({ captions }: { captions: string[] }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (caption: string, index: number) => {
    navigator.clipboard.writeText(caption);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <ul className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {captions.map((caption, idx) => (
        <li key={caption}>
          <button
            type="button"
            onClick={() => handleCopy(caption, idx)}
            className="group flex w-full items-center justify-between rounded-md border border-[var(--hp-border)] bg-[var(--hp-surface)] px-4 py-2 text-left text-sm text-[var(--hp-ink)] transition-colors hover:border-[var(--hp-border-dark)]"
            aria-label={`Copy caption ${caption}`}
          >
            <span className="truncate">&quot;{caption}&quot;</span>
            <span 
              className={`ml-3 rounded-md border border-[var(--hp-border)] px-2 py-0.5 text-[11px] uppercase tracking-wide transition-all ${
                copiedIndex === idx 
                  ? "bg-[var(--hp-primary)] text-white border-[var(--hp-primary)]" 
                  : "bg-[var(--hp-surface-warm)] opacity-60 group-hover:opacity-100"
              }`}
            >
              {copiedIndex === idx ? "Copied" : "Copy"}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
