"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const BratGenerator = dynamic(
  () => import("@/components/BratGenerator"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[400px] items-center justify-center text-slate-500">
        <p>Loading generator...</p>
      </div>
    ),
  }
);

export default function BratGeneratorLazy({ defaultBg, defaultFg }: { defaultBg?: string; defaultFg?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (containerRef.current) {
      const timer = setTimeout(() => {
        containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-6xl scroll-mt-24">
      <BratGenerator 
        key={`${defaultBg}-${defaultFg}`} 
        defaultBg={defaultBg} 
        defaultFg={defaultFg} 
      />
    </div>
  );
}
