const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function main() {
  const width = 1280;
  const height = 720;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, width, height);

  // Background Grid
  ctx.strokeStyle = "#222222";
  ctx.lineWidth = 2;
  for (let i = 0; i <= width; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }
  for (let i = 0; i <= height; i += 40) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
  }

  // Green Glow
  const gradient = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, 600);
  gradient.addColorStop(0, "rgba(137, 204, 4, 0.15)");
  gradient.addColorStop(1, "rgba(17, 17, 17, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Floating Pill 1
  ctx.save();
  ctx.translate(220, 260);
  ctx.rotate((-8 * Math.PI) / 180);
  
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowBlur = 25;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 15;
  
  drawRoundedRect(ctx, -150, -45, 300, 90, 45);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  
  ctx.shadowColor = "transparent";
  ctx.fillStyle = "#000000";
  ctx.font = 'bold 36px "Arial", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("generator", 0, 2);
  ctx.restore();

  // Floating Pill 2
  ctx.save();
  ctx.translate(1020, 460);
  ctx.rotate((6 * Math.PI) / 180);
  
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowBlur = 25;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 15;
  
  drawRoundedRect(ctx, -120, -45, 240, 90, 45);
  ctx.fillStyle = "#89CC04";
  ctx.fill();
  
  ctx.shadowColor = "transparent";
  ctx.fillStyle = "#000000";
  ctx.font = 'bold 38px "Arial", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("for tiktok", 0, 2);
  ctx.restore();

  // Phone Mockup
  ctx.save();
  ctx.translate(width / 2, height / 2 + 10);
  ctx.rotate((4 * Math.PI) / 180);

  // Phone Shadow
  ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetX = 20;
  ctx.shadowOffsetY = 30;

  // Phone Frame
  drawRoundedRect(ctx, -170, -320, 340, 640, 45);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#333333";
  ctx.stroke();

  // Screen
  ctx.shadowColor = "transparent";
  drawRoundedRect(ctx, -158, -308, 316, 616, 35);
  ctx.fillStyle = "#89CC04";
  ctx.fill();

  // Dynamic Island
  drawRoundedRect(ctx, -50, -298, 100, 30, 15);
  ctx.fillStyle = "#000000";
  ctx.fill();

  // Screen Content "tiktok"
  ctx.fillStyle = "#000000";
  ctx.font = 'normal 90px "Arial", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.filter = 'blur(3px)';
  ctx.fillText("brat", 0, -20); // slightly offset to center better
  ctx.filter = 'none';

  // TikTok UI Mockups
  ctx.fillStyle = "#ffffff";
  
  // Profile
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(115, 60, 22, 0, Math.PI * 2);
  ctx.fill();

  // Heart
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.arc(115, 140, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.95;
  ctx.beginPath();
  ctx.moveTo(115, 148);
  ctx.lineTo(105, 138);
  ctx.arc(110, 133, 7, Math.PI, 0);
  ctx.arc(120, 133, 7, Math.PI, 0);
  ctx.lineTo(115, 148);
  ctx.fill();

  // Comment
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.arc(115, 210, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.95;
  drawRoundedRect(ctx, 103, 198, 24, 18, 6);
  ctx.fill();

  // Bookmark/Share
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.arc(115, 280, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.95;
  ctx.beginPath();
  ctx.moveTo(108, 270);
  ctx.lineTo(122, 270);
  ctx.lineTo(122, 290);
  ctx.lineTo(115, 285);
  ctx.lineTo(108, 290);
  ctx.fill();

  // Bottom Info Text Mockups
  ctx.globalAlpha = 0.95;
  drawRoundedRect(ctx, -140, 195, 130, 14, 7);
  ctx.fill();

  ctx.globalAlpha = 0.8;
  drawRoundedRect(ctx, -140, 225, 200, 10, 5);
  ctx.fill();

  drawRoundedRect(ctx, -140, 245, 160, 10, 5);
  ctx.fill();

  ctx.globalAlpha = 0.95;
  drawRoundedRect(ctx, -140, 275, 150, 12, 6);
  ctx.fill();

  ctx.restore();

  const outPath = path.join(__dirname, "..", "public", "blog-images", "tiktok-hero-v3.png");
  const buf = canvas.toBuffer("image/png");
  fs.writeFileSync(outPath, buf);
  console.log(`Generated awesome TikTok hero at: ${outPath}`);
}

main();
