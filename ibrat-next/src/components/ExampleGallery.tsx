import Image from "next/image";

const EXAMPLES = [
  { src: "/examples/brat1.png", alt: "brat generator png example: brat summer vibes" },
  { src: "/examples/brat2.png", alt: "brat image generator sample: stay toxic" },
  { src: "/examples/brat3.png", alt: "brat words generator example: main character energy" },
  { src: "/examples/brat4.png", alt: "brat generator png example: chaotic good" },
  { src: "/examples/brat5.png", alt: "brat image generator sample: delulu mode activated" },
  { src: "/examples/brat6.png", alt: "brat words generator example: hot girl walk" },
];

export default function ExampleGallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {EXAMPLES.map(({ src, alt }, i) => (
        <div
          key={i}
          className="relative aspect-square w-full rounded-lg overflow-hidden bg-muted/30"
        >
          <Image
            src={src}
            alt={alt}
            width={400}
            height={400}
            sizes="(max-width: 640px) 50vw, 33vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
