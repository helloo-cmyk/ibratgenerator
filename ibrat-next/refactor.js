const fs = require('fs');
const path = require('path');

const generatorPath = path.join('d:', 'ibrat generator', 'ibrat-next', 'src', 'components', 'BratGenerator.tsx');
const lazyPath = path.join('d:', 'ibrat generator', 'ibrat-next', 'src', 'components', 'BratGeneratorLazy.tsx');
const cssPath = path.join('d:', 'ibrat generator', 'ibrat-next', 'src', 'app', 'brat-generator.css');

let content = fs.readFileSync(generatorPath, 'utf8');

// Extract the BRAT_STYLES string
const startTag = 'const BRAT_STYLES = `\n';
const endTag = '\n`;\n';
const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const cssContent = content.substring(startIndex + startTag.length, endIndex);
  fs.writeFileSync(cssPath, cssContent);
  
  // Replace the constant
  let newContent = content.substring(0, startIndex) + content.substring(endIndex + endTag.length);
  
  // Replace the style tag
  newContent = newContent.replace('<style dangerouslySetInnerHTML={{ __html: BRAT_STYLES }} />', '');
  
  fs.writeFileSync(generatorPath, newContent);
  
  // Add import to BratGeneratorLazy.tsx
  let lazyContent = fs.readFileSync(lazyPath, 'utf8');
  if (!lazyContent.includes('brat-generator.css')) {
    lazyContent = lazyContent.replace('import { useRef } from "react";', 'import { useRef } from "react";\nimport "../app/brat-generator.css";');
    fs.writeFileSync(lazyPath, lazyContent);
  }
  console.log("Refactoring complete");
} else {
  console.log("Could not find BRAT_STYLES block");
}
