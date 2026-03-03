import Image from "next/image";

const EXAMPLES = [
  { src: "/examples/brat1.png", alt: "free brat generator example: brat summer vibes" },
  { src: "/examples/brat2.png", alt: "free brat generator example: stay toxic" },
  { src: "/examples/brat3.png", alt: "free brat generator example: main character energy" },
  { src: "/examples/brat4.png", alt: "free brat generator example: chaotic good" },
  { src: "/examples/brat5.png", alt: "free brat generator example: delulu mode activated" },
  { src: "/examples/brat6.png", alt: "free brat generator example: hot girl walk" },
];

export default function ExampleGallery() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="max-w-none text-base leading-relaxed text-foreground/90">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-6">
          Brat Generator Examples
        </h2>
        <p className="mb-6">
          Here are real examples created with our free brat generator.
        </p>

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
      </div>
    </section>
  );
}
