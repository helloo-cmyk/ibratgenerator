# SEO keyword pipeline — inputs

Place your exports here (CSV) and run the pipeline from [`../scripts/keyword_pipeline.py`](../scripts/keyword_pipeline.py).

## Required files (when you have them)

| File | Source | Suggested columns |
|------|--------|-------------------|
| `gsc_queries.csv` | Google Search Console → Performance → Export (last 3 months) | At minimum: `query` (or `Query`). Optional: `clicks`, `impressions`, `position`, `page` |
| `competitor_keywords.csv` | Your SEO tool export for the competitor domain | `keyword` or `Keyword` and optionally `volume`, `url` |
| `brand_blocklist.txt` | Optional | One brand/token per line to strip from the competitor list (competitor name, "canva" if you want to drop those rows, etc.) |

## Run

```bash
cd ibrat-next/seo-docs/scripts
python keyword_pipeline.py process ^
  --gsc ../inputs/gsc_queries.csv ^
  --competitor ../inputs/competitor_keywords.csv ^
  --brand-file ../inputs/brand_blocklist.txt ^
  -o ../cleaned_keywords_merged.csv
```

Without GSC/competitor files, you can still extract **inferred** queries from the repo dump:

```bash
python keyword_pipeline.py extract --all-pages ../ALL_PAGES_SEO_AND_FEATURE_FLOW.txt -o ../cleaned_keywords_baseline.csv
```

Then open `cleaned_keywords_baseline.csv` in Excel/Sheets and re-run `process` when real GSC data is available.

## Notes

- The pipeline **normalizes** text (lowercase, whitespace), **removes** obvious junk lines, **dedupes** (including simple plural/singular collapse), and **merges** GSC + competitor.
- **Branded** queries are removed when a token from `--brands` or the brand file appears in the query string.
- **Page-level assignment** to URLs is not fully automatic: use [`../CANNIBALIZATION_RULES.md`](../CANNIBALIZATION_RULES.md) and [`../KEYWORD_MAP_MASTER.csv`](../KEYWORD_MAP_MASTER.csv) for final owner URLs.
