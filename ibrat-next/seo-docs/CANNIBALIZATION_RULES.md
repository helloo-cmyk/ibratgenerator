# Cannibalization rules (Ibrat Generator)

This document matches each **search topic** to a **single owner URL** so pages do not compete for the same query in Google. When your GSC or competitor data includes overlapping phrases, use these rules first, then the [`KEYWORD_MAP_MASTER.csv`](KEYWORD_MAP_MASTER.csv) rows for placement.

## Primary owner: head term (United States)

| Query family | Owner URL | Notes |
|-------------|-----------|--------|
| `brat generator`, `free brat generator`, `online brat generator`, `brat generator free` | `/` (home) | H1, title, and first screen copy carry the main promise. **Do not** repeat the same H1 on color tools. |
| `what is a brat generator`, `what is brat generator` | `/blog/what-is-brat-generator` | Home gets a **short** definition; the blog post owns the long explanation and FAQ. |

## Tool pages (intent-specific)

| Query family | Owner URL |
|-------------|-----------|
| `brat text generator`, `brat text`, `brat text png` (text-first) | `/brat-text-generator` |
| `brat font`, `what is brat font`, `brat font style` (typography / font *style*) | `/brat-font-generator` and/or `/blog/what-is-brat-font` — font *definition* leans blog; *generator* for hands-on. |
| `brat maker`, `brat meme`, `brat image` (full image/meme) | `/brat-maker` |
| `brat name generator`, `brat names` | `/brat-name-generator` |
| `brat album cover`, `brat cover` (album art) | `/brat-album-cover-generator` |
| `green brat`, `brat green`, `neon brat` | `/brat-green-generator` |
| `pink brat` | `/brat-generator-pink` |
| `black brat`, `brat black` | `/brat-black-generator` |
| `white brat` | `/brat-generator-white` |
| `brat captions`, `brat instagram captions` | `/blog/brat-captions-for-instagram` |
| `how to make brat text` | `/blog/how-to-make-brat-text` |
| `what is brat text` | `/blog/what-is-brat-text` |

## Pages that should **not** compete for money keywords

- **`/about-us`**, **`/contact-us`**, **`/privacy-policy`**, **`/terms-conditions`**, **`/disclaimer`**  
  - Mention the tool naturally for context; do **not** tune titles or H1s to rank for `brat generator` alone.  
  - If GSC shows impressions for `brat generator` on these URLs, consider **de-emphasizing** the phrase in meta (e.g. lead with "Contact" / "Privacy") in a later pass; see `do_not_target_here` in the master sheet.

- **`/blog` (index)**  
  - Lists posts; target **brat blog** / discovery intent, not the head term vs home.

## Cross-linking (topic authority → head term)

- Color and specialty tools should **link to `/`** with **varied** anchors: "free brat generator", "Brat generator (all styles)", "main generator", not the same exact anchor on every page.
- Blog posts that mention the head term should link to `/` once in-body where helpful.

## When you add GSC + competitor exports

1. Run [`scripts/keyword_pipeline.py`](scripts/keyword_pipeline.py) `process` (or merge in Sheets).  
2. For each new query, find the **one** best page using the table above.  
3. If two pages both “fit,” prefer **higher-funnel** tool ownership (e.g. home wins `brat generator` over `/brat-generator-pink`).

## Baseline data

[`cleaned_keywords_baseline.csv`](cleaned_keywords_baseline.csv) is the **inferred** list from `ALL_PAGES_SEO_AND_FEATURE_FLOW.txt` (no GSC file in repo). Replace or merge with real GSC + competitor data using [`inputs/README.md`](inputs/README.md).
