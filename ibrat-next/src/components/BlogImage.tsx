import Image from "next/image";

export default function BlogImage({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="my-10 w-full overflow-hidden rounded-xl border border-[var(--hp-border)] bg-[var(--hp-surface-warm)] shadow-sm">
      <Image 
        src={src} 
        alt={alt} 
        width={800} 
        height={450} 
        className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
  );
}
