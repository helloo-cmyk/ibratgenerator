const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/app/blog');
const OUTPUT_FILE = path.join(__dirname, '../src/lib/blogPosts.json');

function extractData(content, regex, fallback = '') {
  const match = content.match(regex);
  return match ? match[1].trim() : fallback;
}

function parseDate(dateStr) {
  // Try to parse "May 06, 2026" or "May 2026"
  const timestamp = Date.parse(dateStr);
  return isNaN(timestamp) ? 0 : timestamp;
}

function generateBlogList() {
  console.log('Generating blog list...');
  const blogPosts = [];
  
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn(`Blog directory not found: ${BLOG_DIR}`);
    return;
  }

  const items = fs.readdirSync(BLOG_DIR);

  for (const item of items) {
    const itemPath = path.join(BLOG_DIR, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      const pagePath = path.join(itemPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, 'utf8');
        
        // Extract title (absolute from metadata, or from BlogHero)
        let title = extractData(content, /title:\s*\{\s*absolute:\s*["']([^"']+)["']/i);
        if (!title) title = extractData(content, /title=["']([^"']+)["']/i);
        
        // Extract description
        const description = extractData(content, /description:\s*["']([^"']+)["']/i);
        
        // Extract BlogHero props
        const category = extractData(content, /category=["']([^"']+)["']/i, "ARTICLE");
        const imageSrc = extractData(content, /imageSrc=["']([^"']+)["']/i);
        const publishDate = extractData(content, /publishDate=["']([^"']+)["']/i);
        const readTime = extractData(content, /readTime=["']([^"']+)["']/i);

        if (title) {
          blogPosts.push({
            title,
            slug: item,
            description,
            category,
            image: imageSrc,
            date: publishDate,
            readTime: readTime,
            timestamp: parseDate(publishDate)
          });
        }
      }
    }
  }

  // Sort by date (newest first)
  blogPosts.sort((a, b) => b.timestamp - a.timestamp);

  // Remove the timestamp property before saving
  const cleanPosts = blogPosts.map(({ timestamp, ...rest }) => rest);

  // Ensure lib directory exists
  const libDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(cleanPosts, null, 2));
  console.log(`Generated ${cleanPosts.length} blog posts in src/lib/blogPosts.json`);
}

generateBlogList();
