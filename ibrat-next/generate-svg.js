const fs = require('fs');
const path = require('path');

const svgContent = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
    </filter>
  </defs>
  <rect width="1200" height="630" fill="#8ACE00"/>
  <text 
    x="50%" 
    y="50%" 
    font-family="Arial, Helvetica, sans-serif" 
    font-size="200" 
    font-weight="bold" 
    fill="black" 
    text-anchor="middle" 
    dominant-baseline="central" 
    letter-spacing="-0.05em"
    filter="url(#blur)"
  >names</text>
</svg>`;

const outPath = path.join(__dirname, 'public', 'blog-images', 'brat-names-hero.svg');
fs.writeFileSync(outPath, svgContent);
console.log('SVG generated at:', outPath);
