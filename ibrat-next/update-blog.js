const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const blogDir = path.join('d:\\ibrat generator\\ibrat-next\\src\\app\\blog');

walkDir(blogDir, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.md')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Rule 1: Replace em dashes with hyphens
    content = content.replace(/—/g, '-');

    // Rule 2: Wrap FAQAccordion
    // Check if FAQAccordion is already wrapped in <section className=\"bg-zinc-50
    if (content.includes('<FAQAccordion') && !content.includes('<section className=\"bg-zinc-50')) {
      const regex = /(<FAQAccordion[\s\S]*?\/>)/g;
      content = content.replace(regex, '<section className=\"bg-zinc-50 py-12 px-4 overflow-hidden border-b-2 border-black/5\">\n        $1\n      </section>');
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
console.log('Done!');
