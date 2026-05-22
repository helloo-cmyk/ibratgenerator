"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import "../app/brat-generator.css";

const BratGenerator = dynamic(
  () => import("@/components/BratGenerator"),
  {
    ssr: false,
    loading: () => (
      <div id="brat-widget" className="animate-pulse" style={{ pointerEvents: 'none' }}>
        <div id="brat-wrap">
          <div className="brat-grid">
            <aside className="brat-card" id="brat-controls">
              <div className="h-10 bg-slate-100 rounded-lg mb-4" />
              <div className="h-32 bg-slate-100 rounded-lg mb-4" />
              <div className="h-10 bg-slate-100 rounded-lg mb-4" />
              <div className="h-10 bg-slate-100 rounded-lg mb-4 w-2/3" />
            </aside>
            <div id="brat-preview">
              <div className="brat-stage">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#e2e8f0]/40 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }
);

type BratGeneratorMode = 'full' | 'text-only' | 'font-only' | 'album' | 'name' | 'color-variant';

interface BratGeneratorLazyProps {
  defaultBg?: string;
  defaultFg?: string;
  mode?: BratGeneratorMode;
  defaultTab?: 'text' | 'style' | 'stickers';
  defaultRatio?: '1:1' | '4:5' | '9:16' | '16:9';
  defaultResolution?: '1024' | '1500' | '2048' | '3000';
  defaultPlaceholder?: string;
  lockBg?: boolean;
  lockFg?: boolean;
  hideSelfieMode?: boolean;
  hideAspectRatio?: boolean;
  hidePresets?: boolean;
  showRandomButton?: boolean;
}

export default function BratGeneratorLazy(props: BratGeneratorLazyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-6xl scroll-mt-24">
      <BratGenerator 
        key={`${props.defaultBg}-${props.defaultFg}-${props.mode}-${props.defaultTab}`} 
        {...props}
      />
    </div>
  );
}
