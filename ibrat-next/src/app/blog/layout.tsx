import AdBanner from "@/components/AdBanner";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ── BLOG TOP AD ── */}
      <div className="w-full flex flex-col items-center justify-center py-6 gap-4 border-b border-black/5 bg-zinc-50/50">
        <div className="hidden sm:block">
          <AdBanner adKey="d800cb66922d3aade44d6334e34e8f54" format="iframe" height={90} width={728} />
        </div>
        <div className="block sm:hidden">
          <AdBanner adKey="acddc0424b8d37bee4ab81ffd01274e4" format="iframe" height={50} width={320} />
        </div>
      </div>
      {children}
    </>
  );
}
