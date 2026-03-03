/**
 * Generates brat-style example images using canvas.
 * Runs client-side only. Results are cached in memory.
 */

import { examplePhrases } from "./examplePhrases";

let cachedExamples: string[] | null = null;

/** Brat-style colors for variety across examples */
const EXAMPLE_STYLES = [
  { bg: "#c1ff00", fg: "#0a0a0a" }, // brat green
  { bg: "#ffffff", fg: "#0a0a0a" }, // white
  { bg: "#0a0a0a", fg: "#ffffff" }, // black
  { bg: "#ffc0cb", fg: "#0a0a0a" }, // pink
  { bg: "#c1ff00", fg: "#0a0a0a" }, // brat green
  { bg: "#e0f7fa", fg: "#0a0a0a" }, // mint
];

function drawBratText(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  text: string,
  bg: string,
  fg: string
): void {
  const fontSize = Math.round(Math.min(width, height) * 0.18);
  const fontFamily = "'Inter', system-ui, -apple-system, sans-serif";
  ctx.font = `bold ${fontSize}px ${fontFamily}`;

  const padding = Math.round(width * 0.08);
  const boxW = width - padding * 2;
  const lineHeight = 1.0;
  const letterSpacing = 0;

  // Split lines by width
  const words = text.split(/\s+/);
  const lines: string[] = [];
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

  function totalLineWidth(line: string): number {
    const chars = [...line];
    let w = 0;
    for (let i = 0; i < chars.length; i++) {
      w += ctx.measureText(chars[i]).width;
      if (i < chars.length - 1) w += letterSpacing;
    }
    return w;
  }

  // Draw background
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Draw text
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

/**
 * Generate brat-style PNG images for each example phrase.
 * Returns base64 data URLs. Cached after first call.
 * Client-side only—returns empty array if not in browser.
 */
export async function generateExampleImages(): Promise<string[]> {
  if (cachedExamples !== null) {
    return cachedExamples;
  }

  if (typeof document === "undefined") {
    return [];
  }

  const size = 400;
  const results: string[] = [];

  for (let i = 0; i < examplePhrases.length; i++) {
    const phrase = examplePhrases[i];
    const style = EXAMPLE_STYLES[i % EXAMPLE_STYLES.length];

    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      results.push("");
      continue;
    }

    drawBratText(ctx, size, size, phrase, style.bg, style.fg);
    results.push(canvas.toDataURL("image/png"));
  }

  cachedExamples = results;
  return results;
}
