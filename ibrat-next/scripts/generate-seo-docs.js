const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appDir = path.join(root, "src", "app");
const outDir = path.join(root, "seo-docs");

fs.mkdirSync(outDir, { recursive: true });

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    if (entry.isFile() && entry.name === "page.tsx") files.push(fullPath);
  }
  return files;
}

function stripJsx(text) {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/\{\s*"([^"]*)"\s*\}/g, " $1 ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMetadataBlock(content) {
  const match = content.match(/export const metadata\s*=\s*\{([\s\S]*?)\n\};/);
  return match ? match[1] : "";
}

function extractProp(block, key) {
  if (!block) return "";
  const regex = new RegExp(
    `${key}\\s*:\\s*([\\s\\S]*?)(?:,\\n\\s*[A-Za-z_]+\\s*:|\\n\\s*\\}|$)`
  );
  const match = block.match(regex);
  return match ? match[1].trim().replace(/,$/, "") : "";
}

function extractString(expr) {
  if (!expr) return "";
  const absoluteObj = expr.match(/absolute\s*:\s*["']([\s\S]*?)["']/);
  if (absoluteObj) return absoluteObj[1];
  const quoted = expr.match(/^["']([\s\S]*)["']$/);
  if (quoted) return quoted[1];
  const titleObj = expr.match(/title\s*:\s*["']([\s\S]*?)["']/);
  if (titleObj) return titleObj[1];
  const descObj = expr.match(/description\s*:\s*["']([\s\S]*?)["']/);
  if (descObj) return descObj[1];
  return expr.replace(/\s+/g, " ").trim();
}

function pageRoute(pagePath) {
  const rel = path.relative(appDir, pagePath).replace(/\\/g, "/");
  if (rel === "page.tsx") return "/";
  return `/${rel.replace(/\/page\.tsx$/, "")}`;
}

function slugFromRoute(route) {
  return route === "/" ? "home" : route.slice(1).replace(/\//g, "__");
}

function inferKeywords(route, title, description, h1, headings) {
  const source = [title, description, h1, ...headings].join(" ").toLowerCase();
  const candidates = [
    "brat generator",
    "free brat generator",
    "online brat generator",
    "brat text generator",
    "brat maker",
    "brat font generator",
    "brat name generator",
    "brat album cover generator",
    "black brat generator",
    "pink brat generator",
    "white brat generator",
    "green brat generator",
    "brat captions",
    "brat text",
    "brat font",
    "brat meme",
    "brat profile picture",
    "charli xcx brat",
    "no watermark",
  ];

  const picked = [];
  for (const term of candidates) {
    if (source.includes(term) && !picked.includes(term)) picked.push(term);
  }

  for (const part of route.split("/")) {
    const clean = part.replace(/-/g, " ").trim();
    if (clean && clean !== "blog" && !picked.includes(clean)) picked.push(clean);
  }

  return picked.slice(0, 15);
}

const layout = fs.readFileSync(path.join(appDir, "layout.tsx"), "utf8");
const globalMetadataFields = [
  "metadataBase",
  "title",
  "description",
  "openGraph",
  "robots",
  "icons",
  "verification",
].filter((field) => layout.includes(`${field}:`));

const globalHeadTags = [
  "manifest",
  "meta:p:domain_verify",
  "meta:google-adsense-account",
  "meta:viewport",
  "script:application/ld+json",
  "script:Google Analytics (gtag)",
  "script:Microsoft Clarity",
  "script:Google AdSense loader (production)",
].filter((tag) => {
  const checks = {
    manifest: 'rel="manifest"',
    "meta:p:domain_verify": 'name="p:domain_verify"',
    "meta:google-adsense-account": 'name="google-adsense-account"',
    "meta:viewport": 'name="viewport"',
    "script:application/ld+json": 'type="application/ld+json"',
    "script:Google Analytics (gtag)": "googletagmanager.com/gtag/js",
    "script:Microsoft Clarity": "clarity.ms/tag",
    "script:Google AdSense loader (production)": "googlesyndication.com/pagead/js/adsbygoogle.js",
  };
  return layout.includes(checks[tag]);
});

const pageFiles = walk(appDir).sort();
const docs = [];

for (const file of pageFiles) {
  const content = fs.readFileSync(file, "utf8");
  const route = pageRoute(file);
  const metadataBlock = extractMetadataBlock(content);
  const title = extractString(extractProp(metadataBlock, "title"));
  const description = extractString(extractProp(metadataBlock, "description"));
  const openGraphBlock = extractProp(metadataBlock, "openGraph");
  const ogTitle = extractString(extractProp(openGraphBlock, "title"));
  const ogDescription = extractString(extractProp(openGraphBlock, "description"));

  const headings = [...content.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)]
    .map((m) => ({ level: `H${m[1]}`, text: stripJsx(m[2]) }))
    .filter((h) => h.text.length > 0);

  const h1 = headings.find((h) => h.level === "H1")?.text || "";

  const featureFlow = headings
    .map((h) => h.text)
    .filter((t) =>
      /feature|how to|step|what this tool does|what is|main features|core features|how to use|use the|who this tool is for/i.test(
        t
      )
    );

  const paragraphs = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => stripJsx(m[1]))
    .filter(Boolean);

  const keywords = inferKeywords(
    route,
    title,
    description,
    h1,
    headings.map((h) => h.text)
  );

  const pageDoc = [
    `PAGE: ${route}`,
    `SOURCE: ${path.relative(root, file).replace(/\\/g, "/")}`,
    "",
    `META TITLE: ${title || "(not set in page metadata)"}`,
    `META DESCRIPTION: ${description || "(not set in page metadata)"}`,
    `OPEN GRAPH TITLE: ${ogTitle || "(inherits global default or not set)"}`,
    `OPEN GRAPH DESCRIPTION: ${ogDescription || "(inherits global default or not set)"}`,
    "",
    "HEADING STRUCTURE:",
    ...(headings.length
      ? headings.map((h) => `- ${h.level}: ${h.text}`)
      : ["- (No headings found)"]),
    "",
    "FEATURE FLOW SECTIONS:",
    ...(featureFlow.length
      ? featureFlow.map((f) => `- ${f}`)
      : ["- (No explicit feature flow sections detected in headings)"]),
    "",
    "TARGET KEYWORDS (INFERRED FROM VISIBLE PAGE CONTENT):",
    ...(keywords.length ? keywords.map((k) => `- ${k}`) : ["- (No clear keywords inferred)"]),
    "",
    "ARTICLE / BODY TEXT (PARAGRAPH TAG CONTENT):",
    paragraphs.length ? paragraphs.join("\n\n") : "(No paragraph text found in this page file)",
    "",
  ].join("\n");

  const pageFileName = `${slugFromRoute(route)}.txt`;
  const pageOutput = path.join(outDir, pageFileName);
  fs.writeFileSync(pageOutput, pageDoc);
  docs.push(pageDoc);
}

const masterDoc = [
  "PROJECT-WIDE SEO IMPLEMENTATION",
  "SOURCE: src/app/layout.tsx",
  "",
  "GLOBAL METADATA FIELDS IN USE:",
  ...globalMetadataFields.map((f) => `- ${f}`),
  "",
  "GLOBAL SEO TAGS / SCRIPTS IN USE:",
  ...globalHeadTags.map((h) => `- ${h}`),
  "",
  "SCHEMA/STRUCTURED DATA IN USE:",
  "- WebSite JSON-LD",
  "- SoftwareApplication JSON-LD",
  "",
  "PER-PAGE SEO + FEATURE FLOW + ARTICLE TEXT",
  "",
  ...docs.map((d) => `${"=".repeat(90)}\n${d}`),
].join("\n");

fs.writeFileSync(path.join(outDir, "ALL_PAGES_SEO_AND_FEATURE_FLOW.txt"), masterDoc);

console.log(`Generated ${pageFiles.length} per-page files + 1 master file in: ${outDir}`);
