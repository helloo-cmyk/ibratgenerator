/**
 * Generate favicon files from public/logo.png
 * Run: node scripts/generate-favicons.js
 */
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.error('Installing sharp...');
    const { execSync } = require('child_process');
    execSync('npm install sharp --no-save', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    sharp = require('sharp');
  }

  const publicDir = path.join(__dirname, '..', 'public');
  const logoPath = path.join(publicDir, 'logo.png');

  if (!fs.existsSync(logoPath)) {
    throw new Error('logo.png not found in public/');
  }

  const resizeOpts = { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } };

  // favicon.ico - multi-size (16, 32, 48)
  const icoPath = path.join(publicDir, 'favicon.ico');
  const ico16 = await sharp(logoPath).resize(16, 16, resizeOpts).png().toBuffer();
  const ico32 = await sharp(logoPath).resize(32, 32, resizeOpts).png().toBuffer();
  const ico48 = await sharp(logoPath).resize(48, 48, resizeOpts).png().toBuffer();
  try {
    const toIco = require('to-ico');
    const icoBuffer = await toIco([ico16, ico32, ico48]);
    fs.writeFileSync(icoPath, icoBuffer);
  } catch {
    fs.writeFileSync(icoPath, ico32);
  }

  // favicon-192.png
  await sharp(logoPath)
    .resize(192, 192, resizeOpts)
    .png()
    .toFile(path.join(publicDir, 'favicon-192.png'));

  // favicon-512.png
  await sharp(logoPath)
    .resize(512, 512, resizeOpts)
    .png()
    .toFile(path.join(publicDir, 'favicon-512.png'));

  // apple-touch-icon.png (180x180)
  await sharp(logoPath)
    .resize(180, 180, resizeOpts)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('Favicon files created:');
  console.log('  - public/favicon.ico (16x16, 32x32, 48x48)');
  console.log('  - public/favicon-192.png');
  console.log('  - public/favicon-512.png');
  console.log('  - public/apple-touch-icon.png (180x180)');
}

generateFavicons().catch((err) => {
  console.error(err);
  process.exit(1);
});
