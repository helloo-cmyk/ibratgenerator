"use client";

import { useState } from "react";

interface PaletteColor {
  type: string;
  name: string;
  hex: string;
  bg: string;
  text: string;
}

export default function InteractivePalette({ colors }: { colors: PaletteColor[] }) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  return (
    <div className="space-y-6 mb-32">
      {colors.map((color) => (
        <div key={color.hex} className="flex gap-6 items-center group">
           <div className="w-12 flex-shrink-0">
              <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 opacity-20 group-hover:opacity-100 transition-opacity">{color.type}</span>
           </div>
           <div 
             className={`flex-1 ${color.bg} h-24 sm:h-32 flex items-center px-8 sm:px-12 border-2 border-black group-hover:-translate-y-1 transition-transform cursor-pointer shadow-[8px_8px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 relative`} 
             onClick={() => handleCopy(color.hex)}
           >
              <span className={`text-2xl sm:text-4xl font-black italic tracking-tighter uppercase ${color.text} ${copiedValue === color.hex ? 'opacity-0' : 'opacity-100'}`}>{color.name}</span>
              <span className={`ml-auto text-xl font-bold opacity-30 ${color.text} ${copiedValue === color.hex ? 'opacity-0' : 'opacity-100'}`}>{color.hex}</span>
              {copiedValue === color.hex && (
                <div className="absolute inset-0 flex items-center justify-center bg-inherit">
                  <span className={`text-2xl sm:text-4xl font-black italic tracking-tighter uppercase ${color.text}`}>COPIED</span>
                </div>
              )}
           </div>
        </div>
      ))}
    </div>
  );
}
