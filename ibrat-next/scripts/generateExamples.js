/**
 * Generates brat-style example PNG images at build time.
 * Saves to /public/examples/ for static serving.
 *
 * Usage: node scripts/generateExamples.js
 */

const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

const PHRASES = [
  "brat vibe",
  "stay toxic",
  "main character",
  "chaotic good",
  "delulu mode",
  "iconic",
];

const MAKER_PHRASES = [
  "profile pic",
  "post graphic",
  "tiktok layout",
  "album look",
  "unbothered",
  "custom theme",
];

const TEXT_PHRASES = [
  "clean text",
  "typography",
  "bold look",
  "no distractions",
  "pure vibe",
  "minimalist",
];

const FONT_PHRASES = [
  "sans serif",
  "tight spacing",
  "font style",
  "bold weight",
  "clean lines",
  "minimalist",
];

const BG_COLORS = ["#89CC04", "#FFFFFF", "#000000", "#FF69B4", "#89CC04", "#000000"];

const SIZE = 400;
const OUT_DIR = path.join(__dirname, "..", "public", "examples");

function drawBratText(ctx, width, height, text, bg, fg) {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const padding = Math.round(width * 0.1);
  const boxW = width - padding * 2;
  const lineHeight = 0.95;
  
  // Find dynamic font size
  let fontSize = width * 0.25; // Start large
  let lines = [];
  let letterSpacing = 0;

  // We loop until the text fits the box width
  while (fontSize > 10) {
    ctx.font = `normal ${fontSize}px "Arial", sans-serif`;
    letterSpacing = Math.max(-3, -fontSize * 0.05); // Dynamic letter spacing
    
    // Split into lines based on boxW
    const words = text.split(/\s+/);
    lines = [];
    let cur = "";
    let tooWideWord = false;

    for (const w of words) {
      // Check if a single word is too wide
      const wordW = measureLineW(ctx, w, letterSpacing);
      if (wordW > boxW) {
        tooWideWord = true;
        break;
      }

      const test = (cur ? cur + " " : "") + w;
      if (measureLineW(ctx, test, letterSpacing) <= boxW) {
        cur = test;
      } else {
        if (cur) lines.push(cur);
        cur = w;
      }
    }
    
    if (tooWideWord) {
      fontSize -= 2; // Shrink and retry
      continue;
    }
    
    if (cur) lines.push(cur);
    break; // Fits!
  }

  function measureLineW(context, line, spacing) {
    const chars = [...line];
    let w = 0;
    for (let i = 0; i < chars.length; i++) {
      w += context.measureText(chars[i]).width;
      if (i < chars.length - 1) w += spacing;
    }
    return w;
  }

  const lh = fontSize * lineHeight;
  const totalTextH = (lines.length - 1) * lh + fontSize;
  const centerX = width / 2;
  const centerY = height / 2;

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.textBaseline = "top";
  ctx.textAlign = "left";

  // Authentic Brat Blur Effect
  ctx.filter = `blur(${fontSize * 0.015}px)`;
  ctx.fillStyle = fg;

  lines.forEach((line, i) => {
    const lineWidth = measureLineW(ctx, line, letterSpacing);
    const lineX = -lineWidth / 2;
    const lineY = -totalTextH / 2 + i * lh;
    const chars = [...line];
    let x = lineX;
    for (const ch of chars) {
      ctx.fillText(ch, x, lineY);
      x += ctx.measureText(ch).width + letterSpacing;
    }
  });
  ctx.restore();
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const sets = [
    { phrases: PHRASES, prefix: "brat-demo-" },
    { phrases: MAKER_PHRASES, prefix: "brat-maker-ex-" },
    { phrases: TEXT_PHRASES, prefix: "brat-text-ex-" },
    { phrases: FONT_PHRASES, prefix: "brat-font-ex-" }
  ];

  let count = 0;
  for (const set of sets) {
    for (let i = 0; i < set.phrases.length; i++) {
      const phrase = set.phrases[i];
      const bg = BG_COLORS[i % BG_COLORS.length];
      const fg = bg === "#000000" ? "#FFFFFF" : "#0A0A0A";

      const canvas = createCanvas(SIZE, SIZE);
      const ctx = canvas.getContext("2d");

      drawBratText(ctx, SIZE, SIZE, phrase, bg, fg);

      const outPath = path.join(OUT_DIR, `${set.prefix}${i + 1}.png`);
      const buf = canvas.toBuffer("image/png");
      fs.writeFileSync(outPath, buf);
      console.log(`Generated ${outPath}`);
      count++;
    }
  }

  console.log(`Done. ${count} images saved to public/examples/`);
}

main();
