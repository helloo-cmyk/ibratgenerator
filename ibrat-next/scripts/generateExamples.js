const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

const PREMIUM_EXAMPLES = [
  { text: "brat", bg: "#89CC04", fg: "#000000" },
  { text: "stay toxic", bg: "#89CC04", fg: "#000000" },
  { text: "delulu", bg: "#FF69B4", fg: "#000000" },
  { text: "unbothered", bg: "#000000", fg: "#89CC04" },
  { text: "main character", bg: "#89CC04", fg: "#000000" },
  { text: "brat summer", bg: "#89CC04", fg: "#000000" }
];

const SIZE = 800;
const OUT_DIR = path.join(__dirname, "..", "public", "examples");

function drawBratText(ctx, width, height, text, bg, fg) {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // We want the text to look slightly stretched horizontally
  const horizontalStretch = 1.1;
  const padding = Math.round(width * 0.18);
  const boxW = (width - padding * 2) / horizontalStretch;
  
  let fontSize = width * 0.22;
  ctx.font = `bold ${fontSize}px "Arial", "Helvetica", sans-serif`;

  // Dynamic scaling for long words
  let metrics = ctx.measureText(text.toLowerCase());
  if (metrics.width > boxW) {
    fontSize = (boxW / metrics.width) * fontSize;
    ctx.font = `bold ${fontSize}px "Arial", "Helvetica", sans-serif`;
  }
  
  // Center alignment logic
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.scale(horizontalStretch, 1); // Apply the stretch
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Subtle blur for that authentic lo-fi feel
  ctx.filter = `blur(${fontSize * 0.012}px)`;
  ctx.fillStyle = fg;

  // Split text into lines if too long (secondary check)
  const words = text.toLowerCase().split(" ");
  let lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const testLine = currentLine + " " + words[i];
    const testMetrics = ctx.measureText(testLine);
    if (testMetrics.width > boxW) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);

  const lineHeight = fontSize * 0.95;
  const startY = -((lines.length - 1) * lineHeight) / 2;

  lines.forEach((line, i) => {
    ctx.fillText(line, 0, startY + i * lineHeight);
  });

  ctx.restore();
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  PREMIUM_EXAMPLES.forEach((ex, i) => {
    const canvas = createCanvas(SIZE, SIZE);
    const ctx = canvas.getContext("2d");
    drawBratText(ctx, SIZE, SIZE, ex.text, ex.bg, ex.fg);
    
    const outPath = path.join(OUT_DIR, `brat-premium-${i + 1}.png`);
    const buf = canvas.toBuffer("image/png");
    fs.writeFileSync(outPath, buf);
    console.log(`Generated: ${outPath}`);
  });

  console.log(`Successfully generated 6 real-feel premium examples.`);
}

main();
