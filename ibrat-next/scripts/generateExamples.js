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
  "brat summer vibes",
  "stay toxic",
  "main character energy",
  "chaotic good",
  "delulu mode activated",
  "hot girl walk",
];

const BG_COLORS = ["#8ACE00", "#FFFFFF", "#000000", "#FF69B4", "#A8FFB0", "#E5FF00"];

const SIZE = 400;
const OUT_DIR = path.join(__dirname, "..", "public", "examples");

function drawBratText(ctx, width, height, text, bg, fg) {
  const fontSize = Math.round(Math.min(width, height) * 0.18);
  ctx.font = `bold ${fontSize}px "Inter", system-ui, -apple-system, sans-serif`;

  const padding = Math.round(width * 0.08);
  const boxW = width - padding * 2;
  const lineHeight = 1.0;
  const letterSpacing = 0;

  const words = text.split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    const test = (cur ? cur + " " : "") + w;
    if (ctx.measureText(test).width <= boxW) {
      cur = test;
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);

  function totalLineWidth(line) {
    const chars = [...line];
    let w = 0;
    for (let i = 0; i < chars.length; i++) {
      w += ctx.measureText(chars[i]).width;
      if (i < chars.length - 1) w += letterSpacing;
    }
    return w;
  }

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const lh = fontSize * lineHeight;
  const totalTextH = (lines.length - 1) * lh + fontSize;
  const centerX = width / 2;
  const centerY = padding + totalTextH / 2;

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.textBaseline = "top";
  ctx.fillStyle = fg;
  ctx.textAlign = "left";

  lines.forEach((line, i) => {
    const lineWidth = totalLineWidth(line);
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

  for (let i = 0; i < PHRASES.length; i++) {
    const phrase = PHRASES[i];
    const bg = BG_COLORS[i % BG_COLORS.length];
    const fg = bg === "#000000" ? "#FFFFFF" : "#0A0A0A";

    const canvas = createCanvas(SIZE, SIZE);
    const ctx = canvas.getContext("2d");

    drawBratText(ctx, SIZE, SIZE, phrase, bg, fg);

    const outPath = path.join(OUT_DIR, `brat${i + 1}.png`);
    const buf = canvas.toBuffer("image/png");
    fs.writeFileSync(outPath, buf);
    console.log(`Generated ${outPath}`);
  }

  console.log(`Done. ${PHRASES.length} images saved to public/examples/`);
}

main();
