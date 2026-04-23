import Image from "next/image";

const HOME_EXAMPLES = [
  { src: "/examples/brat-demo-1.png", alt: "brat generator png example: brat summer vibes" },
  { src: "/examples/brat-demo-2.png", alt: "brat image generator sample: stay toxic" },
  { src: "/examples/brat-demo-3.png", alt: "brat words generator example: main character energy" },
  { src: "/examples/brat-demo-4.png", alt: "brat generator png example: chaotic good" },
  { src: "/examples/brat-demo-5.png", alt: "brat image generator sample: delulu mode activated" },
  { src: "/examples/brat-demo-6.png", alt: "brat words generator example: hot girl walk" },
];

const MAKER_EXAMPLES = [
  { src: "/examples/brat-maker-ex-1.png", alt: "brat maker app profile picture design graphic" },
  { src: "/examples/brat-maker-ex-2.png", alt: "brat meme template maker text layout" },
  { src: "/examples/brat-maker-ex-3.png", alt: "tiktok brat meme generation tool layout" },
  { src: "/examples/brat-maker-ex-4.png", alt: "custom brat aesthetic post template example" },
  { src: "/examples/brat-maker-ex-5.png", alt: "unbothered text layout meme format" },
  { src: "/examples/brat-maker-ex-6.png", alt: "custom color hex brat style layout" },
];

const FONT_EXAMPLES = [
  { src: "/examples/brat-font-ex-1.png", alt: "brat font generator typography sample" },
  { src: "/examples/brat-font-ex-2.png", alt: "tight character spacing brat style" },
  { src: "/examples/brat-font-ex-3.png", alt: "bold weight sans-serif brat font" },
  { src: "/examples/brat-font-ex-4.png", alt: "minimalist typography layout design" },
  { src: "/examples/brat-font-ex-5.png", alt: "accurate brat style font configuration" },
  { src: "/examples/brat-font-ex-6.png", alt: "high contrast typographic image" },
];

export default function ExampleGallery({ type = "home" }: { type?: "home" | "maker" | "font" }) {
  const images = type === "maker" ? MAKER_EXAMPLES : type === "font" ? FONT_EXAMPLES : HOME_EXAMPLES;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
      {images.map(({ src, alt }, i) => (
        <div
          key={i}
          className="hp-example-card relative aspect-square w-full"
        >
          <Image
            src={src}
            alt={alt}
            width={400}
            height={400}
            sizes="(max-width: 768px) 50vw, 33vw"
            loading="lazy"
            className="object-cover w-full h-full"
            style={{ borderRadius: 'inherit' }}
          />
        </div>
      ))}
    </div>
  );
}
