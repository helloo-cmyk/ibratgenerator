"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import "../app/brat-generator.css";

const BratGenerator = dynamic(
  () => import("@/components/BratGenerator"),
  {
    ssr: false,
    loading: () => (
      <div style={{
        minHeight: '520px',
        position: 'relative',
        width: '100%',
        background: '#f8f8f5',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '16px'
      }}>
        {/* Toolbar skeleton */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '8px'
        }}>
          <div style={{
            width: '80px', height: '36px',
            background: '#e8e6e0',
            borderRadius: '8px'
          }} />
          <div style={{
            width: '100px', height: '36px',
            background: '#0a0a0a',
            borderRadius: '8px'
          }} />
        </div>
        {/* Canvas skeleton */}
        <div style={{
          flex: 1,
          minHeight: '320px',
          background: '#c1ff00',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '32px',
            background: 'rgba(0,0,0,0.15)',
            borderRadius: '6px'
          }} />
        </div>
        {/* Tab bar skeleton */}
        <div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center'
        }}>
          {['Text', 'Style', 'Stickers'].map(tab => (
            <div key={tab} style={{
              padding: '8px 20px',
              background: tab === 'Text' ? '#0a0a0a' : '#e8e6e0',
              borderRadius: '100px',
              color: tab === 'Text' ? '#fff' : 'transparent',
              fontSize: '13px',
              fontWeight: 500
            }}>{tab}</div>
          ))}
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
