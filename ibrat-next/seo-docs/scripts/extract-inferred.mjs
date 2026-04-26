/**
 * Node alternative to keyword_pipeline.py extract (no Python required).
 * Usage: node extract-inferred.mjs ../ALL_PAGES_SEO_AND_FEATURE_FLOW.txt ../cleaned_keywords_baseline.csv
 */
import { readFileSync, writeFileSync } from "fs";

const [,, srcArg, outArg] = process.argv;
const src = srcArg || "../ALL_PAGES_SEO_AND_FEATURE_FLOW.txt";
const out = outArg || "../cleaned_keywords_baseline.csv";

const text = readFileSync(src, "utf8");
const blocks = text.split(/={10,}/);
const rows = [];
let currentUrl = "/";
let inKw = false;

for (const block of blocks) {
  const lines = block.split("\n");
  for (const line of lines) {
    const t = line.trim();
    const pm = t.match(/^PAGE:\s*(\S*)/);
    if (pm) {
      currentUrl = pm[1] || "/";
      inKw = false;
      continue;
    }
    if (t.includes("TARGET KEYWORDS") && t.includes("INFERRED")) {
      inKw = true;
      continue;
    }
    if (inKw) {
      if (t.startsWith("ARTICLE / BODY") || t.startsWith("ARTICLE ")) {
        inKw = false;
        continue;
      }
      const km = t.match(/^-\s*(.+)$/);
      if (km) {
        const q = km[1].trim();
        if (q) {
          const pathPart = currentUrl.startsWith("/") ? currentUrl : `/${currentUrl}`;
          rows.push({
            query: q,
            page: `https://ibratgenerator.com${pathPart}`,
            clicks: 0,
            impressions: 0,
            source: "inferred_all_pages",
          });
        }
      } else if (t && !t.startsWith("-")) {
        inKw = false;
      }
    }
  }
}

const esc = (s) => {
  if (/[",\n]/.test(s)) return `"${String(s).replace(/"/g, '""')}"`;
  return s;
};

const body = [
  "query,page,clicks,impressions,source",
  ...rows.map(
    (r) =>
      [esc(r.query), esc(r.page), r.clicks, r.impressions, esc(r.source)].join(",")
  ),
].join("\n");
writeFileSync(out, body, "utf8");
console.error(`Wrote ${rows.length} rows to ${out}`);
