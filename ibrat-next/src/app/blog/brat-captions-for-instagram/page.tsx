import Link from "next/link";
import CaptionGrid from "@/components/CaptionGrid";
import BlogHero from "@/components/BlogHero";

function SectionHeading({ icon, title }: { icon: string; title: string }) {
  return (
    <h2 className="hp-display-heading mt-16 mb-6 !text-3xl flex items-center gap-2">
      <span aria-hidden="true" className="text-2xl sm:text-3xl bg-[var(--hp-surface)] px-2 py-1 rounded-md border border-[var(--hp-border)]">
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
    <main className="hp-root pb-24">
      
      <BlogHero 
        category="IDEAS & INSPO"
        title="Brat Captions for Instagram"
        subtitle="Find short, bold, and natural brat captions you can copy in seconds. Use these ideas when you want your post to feel effortless but still stand out."
        readTime="8 MIN READ"
        imageSrc="/examples/brat-demo-5.png"
      />

      {/* ── PAGE LAYOUT ── */}
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 pt-12 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-12">
        
        {/* Main Article Content */}
        <article className="lg:col-span-8">
          <div className="prose-container">
            <SectionHeading icon="✨" title="Short Brat Captions (Copy These)" />
            <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
              These are quick lines for mirror pics, outfit dumps, random reels, and low-effort story posts. They work because they are short and clear.
            </p>
            <CaptionGrid
              captions={[
                "so what", "stay mad", "idc", "not impressed", 
                "cool enough", "say less", "no thanks", "try again", 
                "already bored", "keep watching", "still unbothered", 
                "too real", "next question", "no comment", "move along", 
                "your loss", "hard pass", "not today", "seen it", "do better",
              ]}
            />
            <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
              If your image is already loud, choose a simple caption from this list. The caption should add flavor, not compete with the photo.
            </p>

            <SectionHeading icon="😎" title="Attitude Brat Captions" />
            <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
              These have more edge. Use them when you want the post to feel confident, blunt, or slightly confrontational.
            </p>
            <CaptionGrid
              captions={[
                "not your type", "you wish", "watch me", "i said no", 
                "deal with it", "not sorry", "stay pressed", "i meant that", 
                "main character", "not for everyone", "know your place", 
                "too busy winning", "out of reach", "you had a chance", "i do me",
              ]}
            />
            <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
              One practical rule: do not stack attitude in both the photo and caption unless you want a very intense tone. If the photo is already dramatic, pick a shorter line like "watch me" or "not sorry." If the photo is plain, stronger lines like "deal with it" can carry the whole mood.
            </p>
            <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
              Also avoid captions that sound forced. The best brat lines still sound like something you would actually say to a friend.
            </p>

            <SectionHeading icon="🌙" title="Soft / Aesthetic Brat Captions" />
            <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
              Not every brat caption needs to be aggressive. You can keep the minimal style and still sound soft, detached, or dreamy.
            </p>
            <CaptionGrid
              captions={[
                "just vibes", "low energy", "nothing serious", "it is what it is", 
                "soft chaos", "quiet today", "slow morning", "no pressure", 
                "doing my best", "half awake", "gentle mood", "taking my time",
              ]}
            />
            
            <p className="hp-body-text mb-4 text-[17px] sm:text-[18px]">
              These work especially well for:
            </p>
            <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3 text-[17px] sm:text-[18px]">
              <li>photo dumps with mixed random moments</li>
              <li>coffee, desk, and daily routine shots</li>
              <li>late-night stories and blurry videos</li>
              <li>travel clips where the vibe matters more than details</li>
            </ul>
            <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
              If your feed leans minimal or neutral, soft brat captions usually blend better and feel less performative.
            </p>

            <SectionHeading icon="🛠️" title="How to Create Your Own Brat Caption" />
            <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
              Copying examples is useful, but writing your own line gives your page more personality. You do not need to be witty all the time. You just need a simple structure.
            </p>
            <ol className="hp-body-text mb-6 list-decimal pl-6 space-y-4 text-[17px] sm:text-[18px]">
              <li>
                <strong>Keep it short (1-3 words).</strong> Short lines have more impact. "idc" works better than "i do not care anymore."
              </li>
              <li>
                <strong>Lowercase works better.</strong> The style feels casual and current. Uppercase often looks too formal or too shouty.
              </li>
              <li>
                <strong>Avoid long sentences.</strong> Brat captions are fragments, not full explanations. If you can remove a word and keep meaning, remove it.
              </li>
              <li>
                <strong>Match tone with your content.</strong> Confident photo, confident line. Calm photo, softer line. The caption should feel like part of the same mood.
              </li>
            </ol>
            <p className="hp-body-text mb-4 text-[17px] sm:text-[18px]">
              Try this quick method when you are stuck:
            </p>
            <ol className="hp-body-text mb-6 list-decimal pl-6 space-y-3 text-[17px] sm:text-[18px]">
              <li>Pick one emotion: annoyed, confident, detached, or soft.</li>
              <li>Write five rough caption options in ten seconds.</li>
              <li>Keep the shortest one that still sounds natural.</li>
            </ol>
            <p className="hp-body-text mb-4 text-[17px] sm:text-[18px]">Example:</p>
            <ul className="hp-body-text mb-6 list-disc pl-6 space-y-2 text-[17px] sm:text-[18px]">
              <li>emotion: annoyed</li>
              <li>drafts: "say less", "enough already", "not impressed", "pls stop", "move along"</li>
              <li>final pick: "not impressed"</li>
            </ul>
            <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
              If you want to preview your caption in brat-style text before posting, use the{" "}
              <Link href="/brat-text-generator/" className="hp-link">
                brat text generator
              </Link>.
            </p>

            <SectionHeading icon="📱" title="Turn Your Caption Into a Post" />
            <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
              A good caption can become the full post, not just the text under a photo.
            </p>
            <p className="hp-body-text mb-4 text-[17px] sm:text-[18px]">This helps when:</p>
            <ul className="hp-body-text mb-6 list-disc pl-6 space-y-3 text-[17px] sm:text-[18px]">
              <li>you want to post but do not have new photos</li>
              <li>you need a quick story slide with personality</li>
              <li>you want a carousel opener with clear text impact</li>
              <li>you want a cleaner, repeatable visual style for your page</li>
            </ul>
            <p className="hp-body-text mb-4 text-[17px] sm:text-[18px]">Easy workflow:</p>
            <ol className="hp-body-text mb-6 list-decimal pl-6 space-y-3 text-[17px] sm:text-[18px]">
              <li>Pick one short caption from your notes.</li>
              <li>Use high contrast so the words are readable in one second.</li>
              <li>Export and post it as a feed image, story, or reel cover.</li>
            </ol>
            <p className="hp-body-text mb-6 text-[17px] sm:text-[18px]">
              This is one of the fastest ways to stay consistent without spending an hour editing. You can batch five to ten caption posts in one sitting and schedule them later.
            </p>
            <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
              To turn your lines into full visuals and meme-style layouts, use{" "}
              <Link href="/brat-maker/" className="hp-link">
                brat maker
              </Link>.
            </p>

            <div className="mb-12">
              <div className="group relative overflow-hidden rounded-xl border border-[var(--hp-border)] bg-[var(--hp-surface-warm)] p-6 shadow-sm transition-all duration-300 hover:border-[var(--hp-border-dark)] sm:p-8">
                <div className="relative z-10">
                  <p className="mb-3 inline-flex items-center rounded-md border border-[var(--hp-border)] bg-[var(--hp-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-widest opacity-80">
                    Brat Tool
                  </p>
                  <p className="mb-2 text-2xl font-serif text-[var(--hp-ink)] sm:text-3xl">
                    Create your own brat text in seconds
                  </p>
                  <p className="mb-6 text-[15px] opacity-80">
                    Type your caption, style it, and export a post-ready visual instantly.
                  </p>
                  <Link href="/brat-text-generator/" className="inline-block bg-[var(--hp-accent)] text-black font-semibold text-[15px] px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                    Open Brat Text Generator
                  </Link>
                </div>
              </div>
            </div>

            <SectionHeading icon="✅" title="Final Tip" />
            <p className="hp-body-text mb-12 text-[17px] sm:text-[18px]">
              Keep it short and natural. If the caption sounds like your real voice, it will always perform better than something that feels copied, forced, or overwritten.
            </p>
          </div>
        </article>

        <aside className="lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-xl border border-[var(--hp-border)] bg-[var(--hp-surface)] p-6">
              <h3 className="mb-5 text-xl font-serif font-medium text-[var(--hp-ink)]">Popular Posts</h3>
              <ul className="space-y-4">
                {popularPosts.map((post) => (
                  <li key={post.href}>
                    <Link
                      href={post.href}
                      className="group block rounded-md border border-[var(--hp-border)] bg-[var(--hp-surface-warm)] p-4 transition-colors hover:border-[var(--hp-border-dark)]"
                    >
                      <p className="mb-1 text-[15px] font-semibold text-[var(--hp-ink)] group-hover:text-[var(--hp-primary)] transition-colors">{post.title}</p>
                      <p className="mb-2 text-[13px] opacity-70">{post.blurb}</p>
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                        Read post &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--hp-border)] p-6" style={{backgroundColor: "var(--hp-accent)"}}>
              <p className="mb-2 text-[17px] font-serif font-medium text-black">Create your own text</p>
              <p className="mb-5 text-[14px] text-black/70">Generate and export in under 30 seconds.</p>
              <Link href="/brat-text-generator/" className="inline-block bg-black text-white font-semibold text-[14px] px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                Open Generator
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
