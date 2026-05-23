const fs = require('fs');
const path = require('path');

const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <rect width="1280" height="720" fill="#89CC04"/>
  <text 
    x="640" 
    y="380" 
    font-family="Arial, Helvetica, sans-serif" 
    font-size="160" 
    font-weight="normal" 
    fill="#000000" 
    text-anchor="middle" 
    dominant-baseline="middle"
    letter-spacing="-0.05em"
  >
    tiktok
  </text>
</svg>`;

const outputPath = path.join(__dirname, 'public', 'blog-images', 'tiktok-hero.svg');

fs.writeFileSync(outputPath, svgContent);
console.log(`Successfully generated SVG at ${outputPath}`);
