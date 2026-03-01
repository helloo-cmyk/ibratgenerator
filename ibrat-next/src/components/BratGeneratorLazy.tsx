"use client";

import dynamic from "next/dynamic";

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

export default function BratGeneratorLazy() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <BratGenerator />
    </div>
  );
}
