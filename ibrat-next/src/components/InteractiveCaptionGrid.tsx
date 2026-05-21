"use client";

import { useState } from "react";

interface CaptionGridProps {
  captions: string[];
  hoverBg?: string;
  hoverText?: string;
}

export default function InteractiveCaptionGrid({ captions, hoverBg = "hover:bg-[#89CC04]", hoverText = "hover:text-black" }: CaptionGridProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className={`flex-1 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#000] border-2 border-black transition-colors`}>
      {captions.map((cap) => (
        <button 
          key={cap} 
          onClick={() => handleCopy(cap)}
          className={`bg-white text-black p-6 text-[16px] font-black italic lowercase tracking-tight ${hoverBg} ${hoverText} transition-all cursor-pointer relative overflow-hidden group/btn text-left`}
        >
          <span className={`transition-opacity ${copiedText === cap ? "opacity-0" : "opacity-100"}`}>{cap}</span>
          <span className="absolute top-1 right-2 text-[6px] font-black uppercase tracking-widest opacity-0 group-hover/btn:opacity-30">COPY_CMD</span>
          {copiedText === cap && (
            <span className={`absolute inset-0 flex items-center justify-center ${hoverBg.replace('hover:', '')} ${hoverText.replace('hover:', '')} text-[12px] font-black uppercase italic tracking-tighter animate-in fade-in duration-200`}>
              SAVED_TO_CLIPBOARD
            </span>
          )}
        </button>
      ))}
      {Array.from({ length: captions.length % 6 === 0 ? 0 : 6 - (captions.length % 6) }).map((_, i) => (
        <div key={`empty-${i}`} className="bg-white"></div>
      ))}
    </div>
  );
}
