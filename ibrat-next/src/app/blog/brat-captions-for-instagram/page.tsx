import Link from "next/link";

function CaptionGrid({ captions }: { captions: string[] }) {
  return (
    <ul className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {captions.map((caption) => (
        <li key={caption}>
          <button
            type="button"
            className="group flex w-full items-center justify-between rounded-full border border-black/10 bg-background px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-foreground/[0.04]"
            aria-label={`Copy caption ${caption}`}
          >
            <span className="truncate">&quot;{caption}&quot;</span>
            <span className="ml-3 rounded-full border border-black/10 bg-foreground/[0.03] px-2 py-0.5 text-[11px] uppercase tracking-wide text-foreground/60 transition-colors group-hover:bg-foreground/[0.08]">
              Copy
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ icon, title }: { icon: string; title: string }) {
  return (
    <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
      <span aria-hidden="true" className="text-2xl sm:text-3xl">
        {icon}
      </span>
      <span>{title}</span>
    </h2>
  );
}

export const metadata = {
  title: {
    absolute: "Brat Captions for Instagram (50+ Real Examples You Can Copy)",
  },
  alternates: {
    canonical: "https://ibratgenerator.com/blog/brat-captions-for-instagram/",
  },
  description:
    "Get 50+ brat captions for Instagram you can copy, plus practical tips to write your own short, bold, and natural captions.",
};

const popularPosts = [
  {
    href: "/blog/what-is-brat-generator/",
    title: "What Is Brat Generator?",
    blurb: "Quick overview of how the tool works.",
  },
  {
    href: "/blog/how-to-make-brat-text/",
    title: "How to Make Brat Text",
    blurb: "Step-by-step setup for your first post.",
  },
  {
    href: "/blog/what-is-brat-font/",
    title: "What Is Brat Font?",
    blurb: "Understand the look and why it trends.",
  },
];

export default function BratCaptionsForInstagramPage() {
  return (
    <main className="space-y-16">
      <section>
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 text-foreground/90">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                Brat Captions for Instagram
              </h1>
              <p className="max-w-xl text-base leading-relaxed sm:text-lg">
                Find short, bold, and natural brat captions you can copy in seconds.
                Use these ideas when you want your post to feel effortless but still stand out.
              </p>
              <p className="text-sm uppercase tracking-wide text-foreground/60">8 min read</p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="w-full max-w-sm rounded-3xl border border-black/20 bg-[#8ACE00] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.15)]">
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-black/15 bg-black/5">
                  <span className="text-5xl font-semibold lowercase tracking-tight text-black sm:text-6xl">
                    brat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div className="lg:col-span-8">
          <section className="pt-2 sm:pt-4">
            <div className="mx-auto max-w-3xl py-10 sm:py-14 text-base leading-relaxed text-foreground/90">
          <SectionHeading icon="✨" title="Short Brat Captions (Copy These)" />
          <p className="mb-4">
            These are quick lines for mirror pics, outfit dumps, random reels, and low-effort story posts.
            They work because they are short and clear.
          </p>
          <CaptionGrid
            captions={[
              "so what",
              "stay mad",
              "idc",
              "not impressed",
              "cool enough",
              "say less",
              "no thanks",
              "try again",
              "already bored",
              "keep watching",
              "still unbothered",
              "too real",
              "next question",
              "no comment",
              "move along",
              "your loss",
              "hard pass",
              "not today",
              "seen it",
              "do better",
            ]}
          />
          <p>
            If your image is already loud, choose a simple caption from this list. The caption should add flavor, not compete with the photo.
          </p>
            </div>
          </section>

          <section className="pt-2 sm:pt-4">
            <div className="mx-auto max-w-3xl py-10 sm:py-14 text-base leading-relaxed text-foreground/90">
          <SectionHeading icon="😎" title="Attitude Brat Captions" />
          <p className="mb-4">
            These have more edge. Use them when you want the post to feel confident, blunt, or slightly confrontational.
          </p>
          <CaptionGrid
            captions={[
              "not your type",
              "you wish",
              "watch me",
              "i said no",
              "deal with it",
              "not sorry",
              "stay pressed",
              "i meant that",
              "main character",
              "not for everyone",
              "know your place",
              "too busy winning",
              "out of reach",
              "you had a chance",
              "i do me",
            ]}
          />
          <p className="mb-4">
            One practical rule: do not stack attitude in both the photo and caption unless you want a very intense tone.
            If the photo is already dramatic, pick a shorter line like "watch me" or "not sorry."
            If the photo is plain, stronger lines like "deal with it" can carry the whole mood.
          </p>
          <p>
            Also avoid captions that sound forced. The best brat lines still sound like something you would actually say to a friend.
          </p>
            </div>
          </section>

          <section className="pt-2 sm:pt-4">
            <div className="mx-auto max-w-3xl py-10 sm:py-14 text-base leading-relaxed text-foreground/90">
          <SectionHeading icon="🌙" title="Soft / Aesthetic Brat Captions" />
          <p className="mb-4">
            Not every brat caption needs to be aggressive. You can keep the minimal style and still sound soft, detached, or dreamy.
          </p>
          <CaptionGrid
            captions={[
              "just vibes",
              "low energy",
              "nothing serious",
              "it is what it is",
              "soft chaos",
              "quiet today",
              "slow morning",
              "no pressure",
              "doing my best",
              "half awake",
              "gentle mood",
              "taking my time",
            ]}
          />
          <p className="mb-4">
            These work especially well for:
          </p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>photo dumps with mixed random moments</li>
            <li>coffee, desk, and daily routine shots</li>
            <li>late-night stories and blurry videos</li>
            <li>travel clips where the vibe matters more than details</li>
          </ul>
          <p>
            If your feed leans minimal or neutral, soft brat captions usually blend better and feel less performative.
          </p>
            </div>
          </section>

          <section className="pt-2 sm:pt-4">
            <div className="mx-auto max-w-3xl py-10 sm:py-14 text-base leading-relaxed text-foreground/90">
          <SectionHeading icon="🛠️" title="How to Create Your Own Brat Caption" />
          <p className="mb-4">
            Copying examples is useful, but writing your own line gives your page more personality.
            You do not need to be witty all the time. You just need a simple structure.
          </p>
          <ol className="mb-6 list-decimal list-inside space-y-3">
            <li>
              <strong>Keep it short (1-3 words).</strong> Short lines have more impact.
              "idc" works better than "i do not care anymore."
            </li>
            <li>
              <strong>Lowercase works better.</strong> The style feels casual and current.
              Uppercase often looks too formal or too shouty.
            </li>
            <li>
              <strong>Avoid long sentences.</strong> Brat captions are fragments, not full explanations.
              If you can remove a word and keep meaning, remove it.
            </li>
            <li>
              <strong>Match tone with your content.</strong> Confident photo, confident line.
              Calm photo, softer line. The caption should feel like part of the same mood.
            </li>
          </ol>
          <p className="mb-4">
            Try this quick method when you are stuck:
          </p>
          <ol className="mb-6 list-decimal list-inside space-y-2">
            <li>Pick one emotion: annoyed, confident, detached, or soft.</li>
            <li>Write five rough caption options in ten seconds.</li>
            <li>Keep the shortest one that still sounds natural.</li>
          </ol>
          <p className="mb-4">
            Example:
          </p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>emotion: annoyed</li>
            <li>drafts: "say less", "enough already", "not impressed", "pls stop", "move along"</li>
            <li>final pick: "not impressed"</li>
          </ul>
          <p>
            If you want to preview your caption in brat-style text before posting, use the{" "}
            <Link href="/brat-text-generator/" className="text-primary hover:underline">
              brat text generator
            </Link>
            .
          </p>
            </div>
          </section>

          <section className="pt-2 sm:pt-4">
            <div className="mx-auto max-w-3xl py-10 sm:py-14 text-base leading-relaxed text-foreground/90">
          <SectionHeading icon="📱" title="Turn Your Caption Into a Post" />
          <p className="mb-4">
            A good caption can become the full post, not just the text under a photo.
          </p>
          <p className="mb-4">
            This helps when:
          </p>
          <ul className="mb-6 list-inside list-disc space-y-1">
            <li>you want to post but do not have new photos</li>
            <li>you need a quick story slide with personality</li>
            <li>you want a carousel opener with clear text impact</li>
            <li>you want a cleaner, repeatable visual style for your page</li>
          </ul>
          <p className="mb-4">
            Easy workflow:
          </p>
          <ol className="mb-6 list-decimal list-inside space-y-2">
            <li>Pick one short caption from your notes.</li>
            <li>Use high contrast so the words are readable in one second.</li>
            <li>Export and post it as a feed image, story, or reel cover.</li>
          </ol>
          <p className="mb-4">
            This is one of the fastest ways to stay consistent without spending an hour editing.
            You can batch five to ten caption posts in one sitting and schedule them later.
          </p>
          <p>
            To turn your lines into full visuals and meme-style layouts, use{" "}
            <Link href="/brat-maker/" className="text-primary hover:underline">
              brat maker
            </Link>
            .
          </p>
            </div>
          </section>

          <section className="pt-2 sm:pt-4">
            <div className="mx-auto max-w-3xl">
              <div className="group relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-[#EAF7D0] to-[#E2F3C2] p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-8">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
                <div className="relative">
                  <p className="mb-2 inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
                    Brat tool
                  </p>
                  <p className="mb-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Create your own brat text in seconds
                  </p>
                  <p className="mb-6 text-sm text-foreground/70">
                    Type your caption, style it, and export a post-ready visual instantly.
                  </p>
                  <Link href="/brat-text-generator/" className="ui-btn-primary">
                    Open Brat Text Generator
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-2 sm:pt-4">
            <div className="mx-auto max-w-3xl py-10 sm:py-14 text-base leading-relaxed text-foreground/90">
          <SectionHeading icon="✅" title="Final Tip" />
          <p>
            Keep it short and natural. If the caption sounds like your real voice, it will always perform better than something that feels copied, forced, or overwritten.
          </p>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-black/10 bg-background p-5">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">Popular posts</h3>
              <ul className="space-y-3">
                {popularPosts.map((post) => (
                  <li key={post.href}>
                    <Link
                      href={post.href}
                      className="group block rounded-xl border border-black/10 bg-foreground/[0.015] p-3 transition-colors hover:bg-foreground/[0.05]"
                    >
                      <p className="mb-0.5 text-base font-medium text-foreground">{post.title}</p>
                      <p className="mb-0 text-xs text-foreground/65">{post.blurb}</p>
                      <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-foreground/55 transition-colors group-hover:text-foreground/80">
                        Read post {"->"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[#EAF7D0] p-5">
              <p className="mb-1 text-base font-semibold text-foreground">Create your own brat text</p>
              <p className="mb-4 text-sm text-foreground/70">Generate and export in under 30 seconds.</p>
              <Link href="/brat-text-generator/" className="ui-btn-primary">
                Open Generator
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
