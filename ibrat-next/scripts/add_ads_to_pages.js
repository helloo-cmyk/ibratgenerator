const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src', 'app');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const topAd = `
      {/* ── ADS (Top) ── */}
      <div className="w-full flex flex-col items-center justify-center mb-8 px-4 gap-4">
        {/* Desktop Leaderboard */}
        <div className="hidden sm:block">
          <AdBanner adKey="d800cb66922d3aade44d6334e34e8f54" format="iframe" height={90} width={728} />
        </div>
        {/* Mobile Banner */}
        <div className="block sm:hidden">
          <AdBanner adKey="acddc0424b8d37bee4ab81ffd01274e4" format="iframe" height={50} width={320} />
        </div>
      </div>
`;

const bottomAd = `

      {/* ── ADS (Middle) ── */}
      <div className="w-full flex justify-center my-12 px-4">
        <AdBanner adKey="c08f3c01b8d75d9f5c29d292ee34c7e2" format="iframe" height={250} width={300} />
      </div>`;

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('page.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Only target pages with the generator
    if (content.includes('<BratGeneratorLazy') && content.includes('hp-gen-card')) {
      let changed = false;

      // Add import if missing
      if (!content.includes('import AdBanner from')) {
        content = content.replace(/(import .*;\n)(?!import)/, '$1import AdBanner from "@/components/AdBanner";\n');
        changed = true;
      }

      // Add top ad above hp-gen-section
      if (!content.includes('{/* ── ADS (Top) ── */}')) {
        content = content.replace(/(<div[^>]*className="hp-gen-section"[^>]*>)/, topAd + '\n      $1');
        changed = true;
      }

      // Add bottom ad below the closing of the generator
      if (!content.includes('{/* ── ADS (Middle) ── */}')) {
        // We know it ends with </div>\n        </div>\n      </div>
        // Let's replace the first instance after BratGeneratorLazy
        const generatorEndRegex = /(<BratGeneratorLazy[\s\S]*?\/>\s*<\/div>\s*<\/div>\s*<\/div>)/;
        content = content.replace(generatorEndRegex, '$1' + bottomAd);
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated: ' + filePath);
      }
    }
  }
});
