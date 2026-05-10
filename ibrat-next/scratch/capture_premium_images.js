const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const HTML_FILE = `file://${path.join(__dirname, 'premium_image_generator.html')}`;

// Exact phrases from original generateExamples.js
const PHRASES = ["brat vibe", "stay toxic", "main character", "chaotic good", "delulu mode", "iconic"];
const MAKER_PHRASES = ["profile pic", "post graphic", "tiktok layout", "album look", "unbothered", "custom theme"];
const TEXT_PHRASES = ["clean text", "typography", "bold look", "no distractions", "pure vibe", "minimalist"];
const FONT_PHRASES = ["sans serif", "tight spacing", "font style", "bold weight", "clean lines", "minimalist"];

const BG_COLORS = ["#89CC04", "#FFFFFF", "#000000", "#FF69B4", "#89CC04", "#000000"];

const EXAMPLES_DIR = path.join(__dirname, '..', 'public', 'examples');
const BLOG_IMAGES_DIR = path.join(__dirname, '..', 'public', 'blog-images');

async function capture() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // High density for retina-quality screenshots
  await page.setViewport({ width: 1200, height: 1200, deviceScaleFactor: 2 });

  // 1. Capture Hero Image
  console.log('Capturing Hero Image...');
  await page.goto(`${HTML_FILE}?type=hero`, { waitUntil: 'networkidle0' });
  
  const heroElement = await page.$('#render-container');
  await heroElement.screenshot({
    path: path.join(BLOG_IMAGES_DIR, 'brat-vs-clean-girl-v5.png'),
    omitBackground: true
  });
  console.log('Saved brat-vs-clean-girl-v5.png');

  // 2. Capture 24 Example Images
  const sets = [
    { phrases: PHRASES, prefix: "brat-demo-" },
    { phrases: MAKER_PHRASES, prefix: "brat-maker-ex-" },
    { phrases: TEXT_PHRASES, prefix: "brat-text-ex-" },
    { phrases: FONT_PHRASES, prefix: "brat-font-ex-" }
  ];

  console.log('Capturing Example Images...');
  let overallIndex = 1;
  for (const set of sets) {
    for (let i = 0; i < set.phrases.length; i++) {
      const phrase = encodeURIComponent(set.phrases[i]);
      const bg = encodeURIComponent(BG_COLORS[i % BG_COLORS.length]);
      const fgCode = BG_COLORS[i % BG_COLORS.length] === "#000000" ? "#FFFFFF" : "#0A0A0A";
      const fg = encodeURIComponent(fgCode);

      await page.goto(`${HTML_FILE}?type=example&text=${phrase}&bg=${bg}&fg=${fg}&id=${overallIndex}`, { waitUntil: 'networkidle0' });
      
      const el = await page.$('#render-container');
      const outPath = path.join(EXAMPLES_DIR, `${set.prefix}${i + 1}-v5.png`);
      
      await el.screenshot({
        path: outPath,
        omitBackground: true
      });
      console.log(`Saved ${outPath}`);
      overallIndex++;
    }
  }

  await browser.close();
  console.log('All premium images generated successfully!');
}

capture().catch(console.error);
