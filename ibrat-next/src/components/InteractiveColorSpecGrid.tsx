"use client";

import { useState } from "react";

interface ColorSpec {
  label: string;
  value: string;
}

export default function InteractiveColorSpecGrid({ specs }: { specs: ColorSpec[] }) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-black border-4 border-black overflow-hidden shadow-[20px_20px_0px_rgba(137,204,4,0.1)]">
      {specs.map((spec) => (
        <button 
          key={spec.label}
          onClick={() => handleCopy(spec.value)}
          className="bg-white p-8 group text-left relative overflow-hidden active:bg-zinc-50 transition-all border-r border-b border-black last:border-r-0"
        >
          <span className="text-[10px] font-black uppercase tracking-widest opacity-30 group-hover:opacity-100 block mb-4">{spec.label}</span>
          <span className={`text-xl sm:text-2xl font-black italic tracking-tighter transition-opacity ${copiedValue === spec.value ? "opacity-0" : "opacity-100"}`}>{spec.value}</span>
          {copiedValue === spec.value && (
            <span className="absolute inset-0 flex items-center justify-center bg-[#89CC04] text-black font-black italic tracking-tighter text-xl animate-in fade-in duration-300">COPIED</span>
          )}
        </button>
      ))}
    </div>
  );
}
